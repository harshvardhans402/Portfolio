import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import { TypeAnimation } from 'react-type-animation'


function BasicExample() {
    return (
        <Navbar expand="lg" className="shadow-lg  fixed-top" style={{ textAlign: 'center', opacity: 1 }}>
            <Container >
                <Navbar.Brand href="#home"> <div className='foldit-myname'>

                    < TypeAnimation sequence={['Harshvardhan Sharma', 10000, '']} repeat={Infinity} ></TypeAnimation >

                </div ></Navbar.Brand >


            </Container >
        </Navbar >
    );
}

export default BasicExample;