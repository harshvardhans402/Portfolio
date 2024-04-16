import React, { useState } from 'react';
import emaili from '../assets/email.png';
import githubi from '../assets/github.png';
import mobilei from '../assets/mobile.png';
import linkedini from '../assets/linkedin.png';
import whatsappi from '../assets/whatsapp.png';
import { Card, CardContent, Grid } from '@mui/material';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { motion } from 'framer-motion';



const Contact = () => {
    const [formData, setFormData] = useState({ name: '', email: '', message: '' });
    const [isFormSubmitted, setIsFormSubmitted] = useState(false);
    const [loading, setLoading] = useState(false);

    const { username, email, message } = formData;

    const handleChangeInput = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };




    return (
        <div className='Contact'>
            <motion.div

                whileInView={{ y: [10, 50, 1], opacity: [0, 0, 1] }}
                transition={{ duration: 0.5 }}
                style={{ textAlign: 'center' }}
            >
                <div className=''>

                    <h1 className="" style={{ fontWeight: 'bold', }}>Take a coffee & chat with me</h1>
                </div>

                <div className="    " style={{ paddingLeft: '10%', paddingRight: '10%' }} >


                    <Form className='' style={{ padding: '5%' }}>
                        <Row>
                            <Form.Group className="mb-3" as={Col}>

                                <a href="mailto:harshvardhans402@gmail.com" className="" style={{ textDecoration: 'none' }} >
                                    <div className='contact-card' style={{ backgroundColor: 'rgb(255, 238, 241)' }}>
                                        <div style={{ paddingTop: '20px', paddingBottom: '20px' }} >

                                            <img src={emaili} alt="email" height={25} style={{}} />
                                            <span style={{}}> HarshvardhanSharma </span>
                                        </div>
                                    </div>
                                </a>
                            </Form.Group>
                            <Form.Group className="mb-3" as={Col}>
                                <a href="tel:+91 9358066376" className="" style={{ textDecoration: 'none' }} >
                                    <div className='contact-card' style={{ backgroundColor: 'rgb(255, 238, 241)' }}>
                                        <div style={{ paddingTop: '20px', paddingBottom: '20px' }} >
                                            <img src={mobilei} alt="phone" height={25} style={{}} />
                                            <span style={{}}>+91 935 806 6376</span>
                                        </div>
                                    </div>
                                </a>

                            </Form.Group>
                        </Row>

                        <Form.Group className="mb-3">
                            <Form.Control id="TextInput" type='text' name='username' value={username} placeholder="Name" onChange={handleChangeInput} />
                        </Form.Group>
                        <Form.Group className="mb-3">

                            <Form.Control id="TextInput" type='email' name='email' value={email} placeholder="Email" onChange={handleChangeInput} />
                        </Form.Group>

                        <Form.Group className="mb-3">
                            <Form.Control id="TextInput" as='textarea' name='message' value={message} rows='4' placeholder="Message" onChange={handleChangeInput} />
                        </Form.Group>

                        <Button href={`https://wa.me/9358066376/?text=Name: ${username || ""}%0aEmail: ${email || ""}%0a${message || ""}`} target="_blank">  <img src={whatsappi} height={23} alt="" style={{ marginRight: '5px' }} />Send Message</Button>


                    </Form>

                </div>
            </motion.div>
        </div >
    );
};

export default Contact;
;