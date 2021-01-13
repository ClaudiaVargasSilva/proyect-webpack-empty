import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
import './index.scss';
import adds, { resta } from './functions';
import Main from './main';

/* function Main(){
    return (
        <h1>Hola Mundo</h1>
    )
} */


ReactDOM.render(<Main adds={adds} resta={resta} />, document.querySelector("#root"));