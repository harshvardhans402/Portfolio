import React, { useState, useEffect } from 'react';
import { HiChevronLeft, HiChevronRight } from 'react-icons/hi';


import { AppWrap, MotionWrap } from '../../wrapper';
import './Testimonial.scss';
import { images } from '../../constants';

const Testimonial = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [testimonials, setTestimonials] = useState([]);


  const handleClick = (index) => {
    setCurrentIndex(index);
  };

  useEffect(() => {
    setTestimonials([
      { name: "Deepak Saini", imgurl: images.deepak, designation: "Full Stack Developer", feedback: "Masterful Full Stack Developer, seamlessly integrating frontend and backend magic." },
      { name: "Shivani Bhardwaj", imgurl: images.shivani, designation: "Web Developer", feedback: "Web development wizard, turning visions into stunning online realities." },
      { name: "Harshvardhan Sharma", imgurl: images.harsh, designation: "Software Developer", feedback: "Top-tier Android app development skills, consistently exceeding expectations." },
      { name: "Pragya Jangir", imgurl: images.pragya, designation: "HR", feedback: "Your exceptional dedication and innovative approach have consistently driven outstanding results." },
      { name: "Saurabh Sharma", imgurl: images.saurabh, designation: "Java Full Stack Developer", feedback: "Reliable frontend developer delivering quality work on time, every time." },
    ]);
    // setBrands(data);
  }, []);

  return (
    <>
      {testimonials.length && (
        <>
          <div className="app__testimonial-item app__flex">
            <img src={testimonials[currentIndex].imgurl} alt={testimonials[currentIndex].name} />
            <div className="app__testimonial-content">
              <p className="p-text">{testimonials[currentIndex].feedback}</p>
              <div>
                <h4 className="bold-text">{testimonials[currentIndex].name}</h4>
                <h5 className="p-text">{testimonials[currentIndex].designation}</h5>
              </div>
            </div>
          </div>

          <div className="app__testimonial-btns app__flex">
            <div className="app__flex" onClick={() => handleClick(currentIndex === 0 ? testimonials.length - 1 : currentIndex - 1)}>
              <HiChevronLeft />
            </div>

            <div className="app__flex" onClick={() => handleClick(currentIndex === testimonials.length - 1 ? 0 : currentIndex + 1)}>
              <HiChevronRight />
            </div>
          </div>
        </>
      )}

      {/* <div className="app__testimonial-brands app__flex">
        {brands.map((brand) => (
          <motion.div
            whileInView={{ opacity: [0, 1] }}
            transition={{ duration: 0.5, type: 'tween' }}
            key={brand._id}
          >
            <img src={brand.imgUrl} alt={brand.name} />
          </motion.div>
        ))}
      </div> */}
    </>
  );
};

export default AppWrap(
  MotionWrap(Testimonial, 'app__testimonial'),
  'testimonial',
  'app__primarybg',
);
