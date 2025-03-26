import React from 'react';
import { Carousel } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import PropTypes from 'prop-types';
import './Slideshow.css';
import image1 from '../../images/photo_2024-12-21_19-45-20.jpg';
import image2 from '../../images/photo_2024-12-21_19-45-22.jpg';
import image3 from '../../images/photo_2024-12-21_19-45-23.jpg';
import image4 from '../../images/photo_2024-12-21_19-45-24_2.jpg';
import image5 from '../../images/photo_2024-12-21_19-45-24.jpg';
import image6 from '../../images/photo_2024-12-21_19-45-25.jpg';
import image7 from '../../images/photo_2024-12-21_19-45-26.jpg';
import image8 from '../../images/photo_2024-12-21_19-45-26_2.jpg';
import image9 from '../../images/photo_2024-12-21_19-45-27.jpg';
import image10 from '../../images/photo_2024-12-21_19-51-06.jpg';
import image11 from '../../images/photo_2024-12-21_19-51-08.jpg';
import image12 from '../../images/photo_2024-12-21_19-51-09.jpg';
import image13 from '../../images/photo_2024-12-21_19-51-09_2.jpg';
import image14 from '../../images/photo_2024-12-21_19-51-10.jpg';
import image15 from '../../images/photo_2024-12-21_19-51-11.jpg';
import image16 from '../../images/photo_2024-12-21_19-51-12.jpg';
import image17 from '../../images/photo_2024-12-21_19-51-13.jpg';
import image18 from '../../images/photo_2024-12-21_19-51-14.jpg';
import image19 from '../../images/photo_2024-12-21_19-51-14_2.jpg';
import image20 from '../../images/photo_2024-12-21_19-51-15.jpg';
import image21 from '../../images/photo_2024-12-21_19-51-16.jpg';
import image22 from '../../images/photo_2024-12-21_19-51-17.jpg';
import image23 from '../../images/photo_2024-12-21_19-51-18.jpg';
import image24 from '../../images/photo_2024-12-21_19-51-18_2.jpg';
import image25 from '../../images/photo_2024-12-21_19-51-19.jpg';
import image26 from '../../images/photo_2024-12-21_19-51-20.jpg';
import image27 from '../../images/photo_2024-12-21_19-51-21.jpg';
import image28 from '../../images/photo_2024-12-21_19-51-22.jpg';

const Slideshow = () => {
  const slides = [
    { image: image1, caption: "" },
    { image: image2, caption: "" },
    { image: image3, caption: "" },
    { image: image4, caption: "" },
    { image: image5, caption: "" },
    { image: image6, caption: "" },
    { image: image7, caption: "" },
    { image: image8, caption: "" },
    { image: image9, caption: "" },
    { image: image10, caption: "" },
    { image: image11, caption: "" },
    { image: image12, caption: "" },
    { image: image13, caption: "" },
    { image: image14, caption: "" },
    { image: image15, caption: "" },
    { image: image16, caption: "" },
    { image: image17, caption: "" },
    { image: image18, caption: "" },
    { image: image19, caption: "" },
    { image: image20, caption: "" },
    { image: image21, caption: "" },
    { image: image22, caption: "" },
    { image: image23, caption: "" },
    { image: image24, caption: "" },
    { image: image25, caption: "" },
    { image: image26, caption: "" },
    { image: image27, caption: "" },
    { image: image28, caption: "" }
  ];

  return (
    <Carousel>
      {slides.map((slide, index) => (
        <Carousel.Item key={index}>
          <img className="d-block w-100" src={slide.image} alt={slide.caption} />
          <Carousel.Caption>
            <h3>{slide.caption}</h3>
          </Carousel.Caption>
        </Carousel.Item>
      ))}
    </Carousel>
  );
};

// // Рабочее слайдшоу, но нужно разобраться с хуками
// const Slideshow = () => {
//   const [slideIndex,setSlideIndex] = useState(0);
//   const slides = [
//     {image: image1, caption: "Photo 1"},
//     {image: image2, caption: "Photo 2"}
//   ];

//   const nextSlide = () => {
//     setSlideIndex((prevIndex) => (prevIndex + 1) % slides.length);
//   };

//   const prevSlide = () => {
//     setSlideIndex((prevIndex) => 
//       prevIndex === 0 ? slides.length - 1 : prevIndex -1);
//   };

//   return(
//     <div>
//       <img src={slides[slideIndex].image} alt={slides[slideIndex].caption}></img>
//       <div className="caption">{slides[slideIndex].caption}</div>
//       <button onClick={prevSlide} className="prev">❮</button>
//       <button onClick={nextSlide} className="next">❯</button>
//     </div>
//   );
// };

// const Slideshow = () => (
//   <div className="Slideshow">
//     Slideshow Component
//   </div>
// );

Slideshow.propTypes = {};

Slideshow.defaultProps = {};

export default Slideshow;
