// importing React and ReactDOM
import React from 'react';
import ReactDOM from 'react-dom';

// imports App from App.js
import App from './App';

// importing bootstrap css library
import 'bootstrap/dist/css/bootstrap.min.css';
import '../src/assets/css/style.css'

// renders App
ReactDOM.render(<App />, document.getElementById('root'));
