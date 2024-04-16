import React from 'react';
import { BsInstagram, BsLinkedin, BsGithub, BsFacebook } from 'react-icons/bs';
// import { FaFacebookF } from 'react-icons/fa';

const Links = () => (
    <div className="" style={{ paddingLeft: '2%     ', paddingBottom: '40px' }}>
        <div>
            <a href="https://www.linkedin.com/in/harshvardhan-sharma-a11399260" target='_blank'><BsLinkedin /></a>
        </div>
        <div>
            <a href="https://github.com/harshvardhans402" target='_blank'><BsGithub /></a>
        </div>
        <div>
            <a href="https://www.facebook.com/profile.php?id=100010741020727/" target='_blank'><BsFacebook /></a>
        </div>
    </div>
);

export default Links;