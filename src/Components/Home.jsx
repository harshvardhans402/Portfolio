import React from 'react';
import pro from './profile1.png'; // Import the background image
import { Grid } from '@mui/material';
import javalogo from '../assets/javalogo.png';
import pythonlogo from '../assets/pythonlogo.png';
import javascriptlogo from '../assets/javascriptlogo.png';
import csslogo from '../assets/csslogo.png';
import htmllogo from '../assets/htmllogo.png';
import nodelogo from '../assets/nodelogo.png';
import reactlogo from '../assets/reactlogo.png';
import { TypeAnimation } from 'react-type-animation'

const logos = {
    javalogo,
    pythonlogo,
    javascriptlogo,
    csslogo,
    htmllogo,
    nodelogo,
    reactlogo,
};

const Home = () => {
    return (
        < div style={{  margin: '0px', padding: '0px' }}>

            <div className='Home ' style={{}}>

                <div className='intro' style={{ float: 'right', position: 'relative ' }}>
                    <h1 className='' style={{ padding: '4%', color: 'white' }}>
                        < TypeAnimation sequence={['Hello! I am Harshvardhan Sharma', 1, 'Hello! I am Harshvardhan Sharma']}  ></TypeAnimation >
                    </h1>
                    <p className=' ' style={{ fontSize: '25px', padding: '2%', color: 'grey' }}>a full-stack web developer on a mission to sculpt digital experiences that captivate and inspire. Step into my world, where code meets creativity, and explore the dynamic fusion of design, functionality, and innovation that defines my work.</p>
                </div>




            </div >

        </div>
    );
};

export default Home;
