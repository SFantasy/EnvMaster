import React from 'react';
import { Link } from 'react-router';
import './style.scss';

export default (props) => (
  <div className="layout">
    <ul className="menu">
      <li><Link to="/">基础设置</Link></li>
      <li><Link to="node">Node.js</Link></li>
      <li><Link to="about">关于</Link></li>
    </ul>
    <div className="container">{props.children}</div>
  </div>
);
