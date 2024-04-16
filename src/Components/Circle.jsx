import React from 'react';

import javalogo from '../assets/javalogo.png';
import pythonlogo from '../assets/pythonlogo.png';
import javascriptlogo from '../assets/javascriptlogo.png';
import csslogo from '../assets/csslogo.png';
import htmllogo from '../assets/htmllogo.png';
import nodelogo from '../assets/nodelogo.png';
import reactlogo from '../assets/reactlogo.png';
import Links from './Links';


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

const Circle = () => {
    return (
        < div style={{ margin: 0, padding: 0 }}>
            <div className='Home' >

                <div className='circle' style={{}}>
                    {Object.keys(logos).map((key, index) => (
                        <div className="item" style={{ '--d': `-${index}s`, }} key={key}>
                            <img src={logos[key]} alt="" height={40} width={40} style={{}} />
                        </div>
                    ))}





                </div >
            </div>
            <Links />
        </div>
    );
};

export default Circle;
