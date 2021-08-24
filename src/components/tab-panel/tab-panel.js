import React, { useState } from 'react';
import {Link} from 'react-router-dom'

import './tab-panel.css';

const TabPanel = () => {
  
  const [isMiddlePage, setMiddlePage] = useState(false);
  const [isRightPage, setRightPage] = useState(false);
  const [isLeftPage, setLeftPage] = useState(true);


  return (
    <div className="header-my">  
      <ul className=" nav nav-tabs">
        <li className= "nav-item" onClick={() => {
                setLeftPage(true);
                setMiddlePage(false);
                setRightPage(false);

        }}>
          <Link className=  { isLeftPage ? "nav-link active" : "nav-link" } to="/left/">Left</Link>
        </li>
        <li className="nav-item" onClick={() => {
                setMiddlePage(true);
                setLeftPage(false);
                setRightPage(false);

        }} >
          <Link  className=  { isMiddlePage ? "nav-link active" : "nav-link" } to="/middle/">Middle</Link>
        </li>
        <li className="nav-item" onClick={() => {
                setMiddlePage(false);
                setLeftPage(false);
                setRightPage(true);

        }} >
          <Link  className=  { isRightPage ? "nav-link active" : "nav-link" } to="/right/">Right</Link>
        </li>
      </ul>
    </div>
  );
};

export default TabPanel;