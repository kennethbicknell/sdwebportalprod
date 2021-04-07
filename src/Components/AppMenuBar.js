import React from 'react';
import {Link } from 'react-router-dom';


var AppMenuBar = () =>
{
    const menuStyle={
        backgroundColor: '#d6d6d6',
        position: 'fixed',
        width: '100%',
        padding: "2pt 92% 2pt 0%",
         
    };
    const imgStyle={
        align: 'left',
        border: '1px solid',
        color: 'black',
        borderRadius: '4px',
        padding: '1pt 3pt 1pt 3pt'
    };

    return(
        <div>
            <table style = {menuStyle}>
                <tr>
                    <td><Link to='./dashboard'>
                            <img style= {imgStyle} src={'/img/dashboard_btn.png' } width = "30" />
                        </Link>  </td>
                </tr>
            </table>
        </div>
    );

}

export default AppMenuBar;