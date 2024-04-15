import React, { useState } from 'react';
import emaili from '../assets/email.png';
import githubi from '../assets/github.png';
import mobilei from '../assets/mobile.png';
import linkedini from '../assets/linkedin.png';
import whatsappi from '../assets/whatsapp.png';
import { Card, CardContent, Grid } from '@mui/material';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';



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

            <h1 className="center" style={{ fontWeight: 'bold' }}>Take a coffee & chat with me</h1>

            <div className="" style={{ marginTop: '5%' }} >
                <Grid container spacing={1} style={{ justifyContent: 'center' }}>
                    <a href="mailto:harshvardhans402@gmail.com" className="" style={{ textDecoration: 'none' }} >
                        <Card className='contact-card' style={{ backgroundColor: 'rgb(255, 238, 241)' }}>
                            <CardContent>

                                <img src={emaili} alt="email" height={40} style={{ marginRight: '8px' }} />
                                <span style={{ marginRight: '17px' }}>     harshvardhans2@gmail.com </span>
                            </CardContent>
                        </Card>
                    </a>
                    <a href="tel:+91 9358066376" className="" style={{ textDecoration: 'none' }} >
                        <Card className='contact-card' style={{ backgroundColor: 'rgb(255, 238, 241)' }}>
                            <CardContent >
                                <img src={mobilei} alt="phone" height={40} style={{ marginRight: '8px' }} />
                                <span style={{ marginRight: '90px', }}>+91 935 806 6376</span>
                            </CardContent>
                        </Card>
                    </a>

                </Grid>

                <Form className='center' style={{ backgroundColor: '#dcdcdc', padding: '40px' }}>
                    <fieldset >
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

                    </fieldset>
                </Form>

            </div>

        </div>
    );
};

export default Contact;
;