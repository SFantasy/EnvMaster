import React, { Component } from 'react';

import './style.scss';

export default class Dashboard extends Component {
  render() {
    return (
      <div className="dashboard">
        <section>
          <h2 className="section__title">Requirements</h2>
          <ul>
            <li>
              <span>Homebrew</span>
            </li>
            <li>
              <span>Node.js</span>
            </li>
          </ul>
        </section>
      </div>
    );
  }
}
