import React from "react";
import { Card, CardContent, Grid } from '@mui/material';
import javalogo from '../assets/javalogo.png';
import pythonlogo from '../assets/pythonlogo.png';
import javascriptlogo from '../assets/javascriptlogo.png';
import csslogo from '../assets/csslogo.png';
import htmllogo from '../assets/htmllogo.png';
import nodelogo from '../assets/nodelogo.png';
import reactlogo from '../assets/reactlogo.png';
import Nullclasslogo from '../assets/Nullclass.png';
import accubitslogo from '../assets/accubitslogo.png';
import e2elogo from '../assets/e2ehiring_logo.jpeg';
import Typography from '@mui/material/Typography';
import { motion } from "framer-motion";
import Links from "./Links";


const logos = {
    javalogo,
    pythonlogo,
    javascriptlogo,
    csslogo,
    htmllogo,
    nodelogo,
    reactlogo,

};

const Skill = () => {
    return (
        <div className="Skill">
            <motion.div

                whileInView={{ y: [10, 50, 1], opacity: [0, 0, 1] }}
                transition={{ duration: 0.5 }}
                style={{ textAlign: 'center' }}
            >
                <h1> Skills and Hands On Experiences </h1>

                <Grid container spacing={0} style={{ justifyContent: 'center' }}>

                    {Object.keys(logos).map((key, index) => (
                        <Card sx={{
                            position: 'relative',
                            maxWidth: '150px',
                            maxHeight: '150px',
                            borderRadius: '80%',
                            margin: '45px',
                            // padding: '40px',
                            textAlign: 'center',
                            backgroundColor: 'rgba(220, 220, 220)'
                        }} className="custom-card">
                            <CardContent>
                                <img src={logos[key]} height={'60px'} width={70} style={{ padding: '5px' }} />
                            </CardContent>
                        </Card>
                    ))}


                </Grid>
                <div>
                    <Grid container spacing={0} style={{ justifyContent: 'center' }}>
                        <Card sx={{
                            position: 'relative',
                            maxWidth: '300px',
                            maxHeight: '400px',
                            borderRadius: '40px',
                            margin: '50px',
                            padding: '40px',
                            textAlign: 'center',

                            backgroundColor: 'rgba(255, 255, 255)'
                        }} className="custom-card">
                            <CardContent>
                                <img src={e2elogo} height={'200px'} />
                                <span style={{ fontWeight: 'bold', fontSize: "15px" }}>Bootcamp Organised by e2ehiring </span>
                                <Typography style={{ fontSize: '12px' }}>React and Spring Fusion bootcamp for entrepreneurial application  </Typography>
                            </CardContent>
                        </Card>
                        <Card sx={{
                            position: 'relative',
                            maxWidth: '300px',
                            maxHeight: '400px',
                            borderRadius: '40px',
                            margin: '50px',
                            padding: '40px',
                            textAlign: 'center',

                            backgroundColor: 'rgba(255, 255, 255)'
                        }} className="custom-card">
                            <CardContent>
                                <img src={accubitslogo} height={'200px'} />
                                <span style={{ fontWeight: 'bold', fontSize: "15px" }}>Workshop Organised by Accubits Technologies </span>
                                <Typography style={{ fontSize: '12px', marginTop: '10px' }}>Mastering the art of Real World Penetration Testing  </Typography>
                            </CardContent>
                        </Card>
                        <Card sx={{
                            position: 'relative',
                            maxWidth: '300px',
                            maxHeight: '400px',
                            borderRadius: '40px',
                            margin: '50px',
                            padding: '40px',
                            textAlign: 'center',

                            backgroundColor: 'rgba(255, 255, 255)'
                        }} className="custom-card">
                            <CardContent>
                                <img src={Nullclasslogo} height={'200px'} />
                                <span style={{ fontWeight: 'bold', fontSize: "15px" }}>Internship at NULLCLASS (Nov 2023) </span>
                                <Typography style={{ fontSize: '12px', marginTop: '10px' }}>Duration: 3 Months </Typography>
                                <Typography style={{ fontSize: '12px', marginTop: '10px', fontWeight: 'bold' }}>MERN Stack  </Typography>
                            </CardContent>
                        </Card>
                    </Grid>

                </div>
            </motion.div >
            <Links />
        </div >
    );
}

export default Skill;