// importing React and ReactDOM
import React from 'react';
import ReactDOM from 'react-dom';

// imports App from App.js
import App from './App';

// importing bootstrap css library
import '../src/assets/css/style.css'
import 'bootstrap/dist/css/bootstrap.min.css';

// renders App
ReactDOM.render(<App />, document.getElementById('root'));
