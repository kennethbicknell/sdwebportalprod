import React from 'react';
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Route, Redirect, Switch } from 'react-router-dom';

import Dashboard from '../Pages/Dashboard';
//import {Redirect} from 'react-router-dom';



function Login()
{
    var loginName;
    var loginPassword;

    const doLogin = async event =>
    function doLogin()
    {
        event.preventDefault();

        var obj = {
            login:loginName.value,
            password:loginPassword.value
        };
        var js = JSON.stringify(obj);

        window.location.href = '/dashboard';
   
       // alert('yes it is working!');
    
      //return(
     //       <Dashboard name= "loginName"/>
     //  );  
    }
    
    return(
        <div className='loginSection'><br/>
            <span>SENIOR DESIGN PORTAL</span>
            <form onSubmit = {doLogin}>
                <input type="text" id="loginName" placeholder="Username" ref ={(c) => loginName = c }/><br />
                <input type="password" id="loginPassword" placeholder="Password" ref ={(c) => loginPassword = c}/><br />
                <input type="submit" id="loginButton" class="buttons" value = "SIGN IN" onClick={doLogin} /><br />
                <a id ='passwordReset'>Password Reset</a>
            </form>
            <span id="loginResult"></span>
        </div>
    );

}
export default Login;