import React from 'react';
import ReactDOM from 'react-dom';
import { TransferenciaApp } from './TransferenciaApp';
import './styles/styles.scss'

console.log(process.env)

ReactDOM.render(
  <TransferenciaApp />,
  document.getElementById('root')
);