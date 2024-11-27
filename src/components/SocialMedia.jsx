import React from 'react';
import { BsLinkedin, BsGithub, BsDownload } from 'react-icons/bs';

const SocialMedia = () => (
  <div className="app__social">
    <div>
      <a href="https://www.linkedin.com/in/harshvardhan-sharma-a11399260/" target='_blank'><BsLinkedin /></a>
    </div>
    <div>
      <a href="https://github.com/harshvardhans402" target='_blank'><BsGithub /></a>
    </div>
    <div>
      <a href="https://drive.google.com/file/d/1UUB9igLcI8q8z5kzyln6vY_4lTuHuKjI/view?usp=sharing" download target='_blank'><BsDownload /></a>
    </div>
  </div>
);

export default SocialMedia;
