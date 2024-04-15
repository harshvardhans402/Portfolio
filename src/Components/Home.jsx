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

// Define an object with all the logos
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
        <div className='Home'>
            <Grid container spacing={1} style={{ justifyContent: 'center' }}>
                <div id='contner'>
                    <div className='bgforpro' style={{ margin: '30px' }}>
                        <h3 className='center' style={{ paddingTop: '15px' }}>Welcome to my portfolio!</h3>
                        <img src={pro} alt="" height={200} width={200} style={{ margin: '50px', borderRadius: '70%' }} />
                    </div>
                    {/* Map over the logos object to render the logos and divisions */}
                    {Object.keys(logos).map((key, index) => (
                        <div className="item" style={{ '--d': `-${index}s` }} key={key}>
                            <img src={logos[key]} alt="" height={50} width={50} style={{}} />
                        </div>
                    ))}
                </div>
                <div className='center'>
                    <h1 style={{}}>Full Stack Web Developer</h1>
                </div>
            </Grid>
        </div>
    );
};

export default Home;
