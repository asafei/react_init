import React from 'react';
import ReactDOM from 'react-dom';
import { MyRouter } from './src/router/index.js';
import "./src/css/index.css"


const div=document.createElement('div');
div.className="main";
// div.style.width="100%";
// div.style.height="100%";
// div.style.background="red";
document.body.className="main";
document.body.appendChild(div);


ReactDOM.render(<MyRouter />,div);