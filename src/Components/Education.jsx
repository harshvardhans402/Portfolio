import React from 'react';
import Typography from '@mui/material/Typography';

import { Card, CardContent, Grid } from '@mui/material';
import podarcollege from './photo/podarCollege.png';
import cmr from './photo/cmrlogo.png';
import cmrv from './photo/CMRIT.mp4';
import podarv from './photo/podarv.mp4';
import { motion } from 'framer-motion';

const edu = [
    {
        Course: 'Bachelors of Computer Application',
        score: '75.46%',
        link: 'https://podarcollege.com/',
        logo: podarcollege,
        video: podarv
    },
    {
        Course: 'Masters of Computer Application',
        score: '9.06 CGPA',
        link: 'https://www.cmrit.ac.in/',
        logo: cmr,
        video: cmrv
    },
];

const BackgroundVideoCard = ({ Course, score, link, logo, video }) => {
    return (
        // <Container>
        // <Grid item xs={12} md={6} key={index}>
        <Card
            sx={{
                position: 'relative',
                maxWidth: '430px',
                maxHeight: '400px',
                borderRadius: '9px',
                backgroundColor: 'rgba(255, 255, 255)'
            }}
        >

            <CardContent style={{ paddingBottom: '0px' }} >

                <a href={link} target="_blank" rel="noreferrer" style={{ textDecoration: 'none' }}>
                    <img src={logo} alt="" height={50} style={{ marginBottom: '10px' }} />
                </a>
                <Typography variant="h6" component="div">
                    {Course}
                    {console.log(Course)}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                    {score}
                </Typography>
                <div>
                    <video
                        src={video}
                        type="video/mp4"
                        autoPlay
                        loop
                        muted
                        playsInline
                        style={{
                            position: 'relative',
                            width: '400px',
                            height: '200px',
                            objectFit: 'cover',

                        }}
                    />
                </div>
            </CardContent>
        </Card>

    );
};

export default function Education() {
    return (

        <div className='Education'>
            <motion.div

                whileInView={{ y: [10, 50, 1], opacity: [0, 0, 1] }}
                transition={{ duration: 0.5 }}
            >
                <div className='center' style={{ marginBottom: '100px' }}>
                    <h2  > <span style={{ color: 'Blue' }}>EDUCATED</span>  <span style={{ color: '#ffc107' }}>AGITATED</span> <span style={{ color: '#fd7e14' }}>ORGANISED</span></h2>
                </div>

                <Grid container spacing={2} style={{ justifyContent: 'center' }}>
                    {edu.map((college, index) => (


                        <div className='custom-card' key={index}  >

                            <BackgroundVideoCard {...college} />
                        </div>





                    ))}
                </Grid>

            </motion.div>
        </div>

    );
}
