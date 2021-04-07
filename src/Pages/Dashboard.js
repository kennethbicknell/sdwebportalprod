import React from 'react';

import LoggedInName from '../Components/LoggedInName';
import Applications from '../Components/Applications';
import LogOut from '../Components/LogOut';


//import './DashboardStyle.css';

const Dashboard = (props) =>
{
    //var js = JSON.stringify(props.name);


    //alert(props.name);

    return(
        <div className='dashboard'>
            <LogOut />
            <LoggedInName name = '{props.name}' />
            <Applications />
        </div>
    );
}

export default Dashboard;