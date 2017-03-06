import React from 'react';
import { Link } from 'react-router';
import './style.scss';

export default (props) => (
  <div className="layout">
    <ul className="menu">
      <li><Link to="basic">Basic</Link></li>
      <li><Link to="node">Node.js</Link></li>
      <li><Link to="about">About</Link></li>
    </ul>
    {props.children}
  </div>
);
