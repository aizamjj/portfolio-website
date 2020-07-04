import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import './style/main.scss';

const $container = document.getElementById('app');
$container ? ReactDOM.render(<App />, $container) : false;
