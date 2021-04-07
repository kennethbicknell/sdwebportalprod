import React from 'react';
import MenuBar from '../Components/MenuBar';
import SlideshowPhotos from '../Components/SlideshowPhotos';



function HomePage()
{
    const styleTitle = {
        textAlign: 'center',
        fontSize: '30px',
        fontFamily: 'helvetica'

    };
    const styleSecondTitle = {
        textAlign: 'center',
        fontSize: '18px',
        display: 'block',
        fontFamily: 'helvetica'
    };
    const styleP ={
        fontSize: '22px',
        display: 'block',
        fontFamily: 'helvetica',
        width: '90%',
        margin: '40px'
    }

    return(
        <div>
            <MenuBar /><br /><br />
            <h1 style={styleTitle}>UCF Computer Science Senior Design</h1>
            <span style={styleSecondTitle}>Design, Entrepreneurship, Fun, Teamwork, Leadership, Year-long</span><br/>

            <SlideshowPhotos />

            
            <p style={styleP}>In the two-semester long Senior Design program at UCF, Computer Science
                 students are tasked with using the skills they have learned to solve
                  a realistic and meaningful problem. Professor Mark Heinrich is 
                  seeking companies with a substantial software design challenge to 
                  propose a scope of work for student teams to tackle. The proposed 
                  project should be a substantial piece of work appropriate for a 
                  student team to design and implement over the program of roughly 
                  eight months.</p>
        </div>
    );

}

export default HomePage;