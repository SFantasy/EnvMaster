import React from 'react';
import { Link } from 'react-router';
import { GoRepo, GoPackage, GoHeart } from 'react-icons/lib/go';

import './style.scss';

export default (props) => (
  <div className="layout">
    <ul className="menu">
      <li><Link to="/"><GoRepo /> Basis</Link></li>
      <li><Link to="node"><GoPackage/> Node.js</Link></li>
      <li><Link to="about"><GoHeart /> About</Link></li>
    </ul>
    <div className="container">{props.children}</div>
  </div>
);
