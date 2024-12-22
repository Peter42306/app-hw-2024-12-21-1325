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
    { image: image1, caption: "Photo 1" },
    { image: image2, caption: "Photo 2" },
    { image: image3, caption: "Photo 3" },
    { image: image4, caption: "Photo 4" },
    { image: image5, caption: "Photo 5" },
    { image: image6, caption: "Photo 6" },
    { image: image7, caption: "Photo 7" },
    { image: image8, caption: "Photo 8" },
    { image: image9, caption: "Photo 9" },
    { image: image10, caption: "Photo 10" },
    { image: image11, caption: "Photo 11" },
    { image: image12, caption: "Photo 12" },
    { image: image13, caption: "Photo 13" },
    { image: image14, caption: "Photo 14" },
    { image: image15, caption: "Photo 15" },
    { image: image16, caption: "Photo 16" },
    { image: image17, caption: "Photo 17" },
    { image: image18, caption: "Photo 18" },
    { image: image19, caption: "Photo 19" },
    { image: image20, caption: "Photo 20" },
    { image: image21, caption: "Photo 21" },
    { image: image22, caption: "Photo 22" },
    { image: image23, caption: "Photo 23" },
    { image: image24, caption: "Photo 24" },
    { image: image25, caption: "Photo 25" },
    { image: image26, caption: "Photo 26" },
    { image: image27, caption: "Photo 27" },
    { image: image28, caption: "Photo 28" }
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
