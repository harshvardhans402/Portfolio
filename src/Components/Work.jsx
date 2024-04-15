import React from "react";

import { motion } from "framer-motion";
import { Card, CardContent, Grid } from '@mui/material';
import Typography from '@mui/material/Typography';
import pro from './profile1.png';
import pro1 from '../assets/project01.jpg';
import pro2 from '../assets/project03.jpg';
import pro3 from '../assets/project04.jpg';
import pro4 from '../assets/project11.jpg';
import pro5 from '../assets/project14.jpg';


const Work = () => {



    const data = [

        {
            title: "CVtae",
            description: "Data mining project for shortlisting resume based on the job role",
            projectLink: "",
            codeLink: "https://github.com/manish-patodiya/CVtae",
            pro
                : pro1,
            tags: ["Web App"],
        },
        {
            title: "Modern UI/UX Website",
            description: "A Modern UI/UX Portfolio Website.",
            projectLink: "https://manish-patodiya.github.io/portfolio/",
            codeLink: "https://github.com/manish-patodiya/portfolio",
            pro: pro2,
            tags: ["UI/UX", "React JS"],
        },
        {
            title: "Calc",
            description:
                "Calculator clone made using Java AWT and Swing Components",
            projectLink: "",
            codeLink: "",
            pro: pro3,
            tags: ["UI/UX"],
        },
        {
            title: "Campus|Connect",
            description: "Social Media for College Campus (PHP,HTML, CSS,Javascript)",
            projectLink: "",
            codeLink: "",
            pro: pro4,
            tags: ["Web App"],
        },
        {
            title: "PublicForumApp",
            description: "A Public Discussion Forum Web App",
            projectLink: "",
            codeLink: "",
            pro: pro5,
            tags: ["Web App", 'React JS'],
        }
    ];



    return (
        <>
            <div className='Work' >
                <motion.div
                    whileInView={{ y: [10, 50, 1], opacity: [0, 0, 1] }}
                    transition={{ duration: 0.5 }}
                    style={{ textAlign: 'center' }}
                >

                    <span style={{ fontSize: '45px', fontWeight: 'bold' }}> Project and Work</span>
                    <div className="" style={{ marginTop: '5%' }} >
                        <Grid container spacing={1} style={{ justifyContent: 'center' }}>

                            {data.map((project, index) => (



                                <Card className="custom-workcard"
                                    sx={{

                                        position: 'relative',
                                        maxWidth: '270px',
                                        maxHeight: '317px',
                                        borderRadius: '8px',
                                        textAlign: 'center',
                                        backgroundColor: 'rgba(255, 255, 255)',
                                        padding: '0px',


                                    }}>
                                    <CardContent >
                                        <img src={project.pro} alt="" height={220} width={240} style={{ padding: '0px', margin: '0px', borderRadius: '8px' }} />
                                        <Typography variant="h6" component="div" style={{}}>
                                            <span style={{ fontSize: '17px', fontWeight: 'bold', lineHeight: '17px' }}> {project.title}
                                            </span>     </Typography>
                                        <Typography variant="" component="div" style={{ lineHeight: '17px' }}>
                                            <span style={{ fontSize: '13px' }} >       {project.description}</span> </Typography>

                                    </CardContent>
                                </Card>
                            ))}
                        </Grid>
                    </div>
                </motion.div>
            </div>
        </>
    );
};

export default Work;