import webpack from 'webpack';
import WebpackDevServer from 'webpack-dev-server';
import { spawn } from 'child_process';

import config from './webpack.dev.config';

const compiler = webpack(config);
const PORT = 3000;

const server = new WebpackDevServer(compiler, {
  contentBase: '/app/',
  publicPath: '/',
  stats: {
    color: true,
  },
});

server.listen(PORT, () => {
  spawn('npm', ['run', 'start-app'], { shell: true, env: process.env, stdio: 'inherit'})
    .on('close', code => process.exit(code))
    .on('error', spawnError => console.error(spawnError));

  console.log(`Listening at http://localhost:${PORT}`);
});

process.on('SIGTERM', () => {
  console.log('Stopping dev server');
  wdm.close();
  server.close(() => {
    process.exit(0);
  });
});
