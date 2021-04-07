import React from 'react';
//import ReactDOM from 'react-dom';
//import './index.css';
//import App from './App';
//import reportWebVitals from './reportWebVitals';

function LoggedInName(props)
{
    return(
       <div>
           <span id="welcome">Welcome {props.name}</span><br/>
           <span id= "title">CS SENIOR DESIGN PORTAL</span>
       </div>
    );
}


export default LoggedInName;