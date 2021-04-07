import React from 'react';
import {Link } from 'react-router-dom';

function MenuBar()
{
    const navButton={
        fontSize: '12pt',
        fontFamily: 'helvetica',
        color: '#ffc904',
        textDecoration: 'none'

    };
    return(
        <div>
            <table class = 'menu'>
                <tr>
                    <td><Link style={navButton} to='./'>Home</Link> </td> 
                    <td><Link style={navButton} to='/outline'>Outline</ Link></td>
                    <td><Link style={navButton} to='/projects'> Projects</Link></td>
                    <td><Link style={navButton} to='sponsors'>Sponsors</Link></td>
                    <td><Link style={navButton}t o='./abet'>ABET</Link></td>
                    <td><Link style={navButton} to='./contactus'>Contact US</Link></td>
                    <td><Link style={navButton} to='./Login'><button id = "portalbutton" >Senior Design Portal</button></Link></td>
                </tr>
            </table><br/>
        </div>
    );
}

export default MenuBar;