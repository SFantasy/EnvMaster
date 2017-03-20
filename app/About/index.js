import React from 'react';

import './style.scss';

export default () => (
  <div className="page">
    <h1 className="page__title">About</h1>
    <p className="page__paragraph">
      EnvMaster is a tiny desktop application to make you build up your local development environment.
    </p>
    <p className="page__paragraph">
      It is open-sourced on <a href="https://github.com/SFantasy/EnvMaster">Github</a>, any issues or pull request is welcomed.
    </p>
    <p className="page__footer">
      Made with <a href="https://electron.atom.io/">Electron</a> and <a href="https://facebook.github.io/react">React</a>.
    </p>
  </div>
);
