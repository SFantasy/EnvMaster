import express from 'express';
import webpack from 'webpack';
import webpackDevMiddleware from 'webpack-dev-middleware';
import webpackHotMiddleware from 'webpack-hot-middleware';
import { spawn } from 'child_process';

import config from './webpack.dev.config';

const app = express();
const compiler = webpack(config);

const PORT = 3000;

const wdm = webpackDevMiddleware(compiler, {
  publicPath: config.output.publicPath,
  stats: {
    colors: true
  }
});

app.use(wdm);

app.use(webpackHotMiddleware(compiler));

const server = app.listen(PORT, err => {
  if (err) {
    console.log(err);
  }

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
