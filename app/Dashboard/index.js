import React, { Component } from 'react';

import pkg from '../../package.json';
import './style.scss';

export default class Dashboard extends Component {
  render() {
    return (
      <div className="dashboard">
        <header className="header">
          <h1 className="brand">EnvMaster <small>{pkg.version}</small></h1>
          <p className="description">{pkg.description}</p>
        </header>
        <section>

        </section>
      </div>
    );
  }
}
