import React, { Component } from 'react';
import {Link } from 'react-router-dom';


function Applications()
{
    return(
        <div>
            <table id = 'miniApps' class = 'miniAppsAligment'>
                <tr>
                    <td><Link to='/projectselection'> <img src={'/img/star.png' } width = "70" /> </Link></td>
                    <td><Link to='/assigments'> <img src={'/img/assigments.png' } width = "70" /> </Link></td>
                    <td> <Link to='/groups' > <img src={'/img/groups.png' } width = "70" /> </Link></td>
                    <td> <Link to='/grade'> <img src={'/img/grades.png' } width = "70" /> </Link></td>
                    <td> <Link to='files'> <img src={'/img/files.png' } width = "70" /> </Link></td>
                </tr>
                <tr>
                    <td> <Link id='miniAppsName' to='/projectselection'>projectSelection();</ Link> </td>
                    <td> <Link id='miniAppsName' to='/assigments'>assigments();</Link> </td>
                    <td> <Link id='miniAppsName' to='/groups'>group();</Link> </td>
                    <td> <Link id='miniAppsName' to='/grade'>grades();</Link> </td>
                    <td> <Link id='miniAppsName' to='files'>files();</Link> </td>
                </tr>
            </table>
        </div>
    );
}
export default Applications;