import React from 'react';
import { Carousel } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import PropTypes from 'prop-types';
import './ImagesCarousel.css';
import { propTypes } from 'react-bootstrap/esm/Image';

const ImagesCarousel = ({cityInfo}) => {
  return (
    <div className='city-container'>
      {/* Главное изображение города */}
      <div className='city-main-image'>
        <img className='d-block w-100' src={cityInfo.mainImage} alt={`${cityInfo.city} main photo`}></img>
      </div>

      {/* Название города */}
      <div className='city-name'>
      <p>{cityInfo.city}</p>
      </div>

      {/* Информация о городе */}
      <div className='city-info'>        
        <p>Country: {cityInfo.country}</p>
        <p>Population {cityInfo.population} people</p>
        <p>Founded in {cityInfo.foundedYear}</p>        
      </div>

      <div className='city-description'>
      <p>{cityInfo.description}</p>
      </div>

      {/* Карусель с изображениями */}
      <Carousel>
        {cityInfo.images.map((imageInArray, index) => (
          <Carousel.Item key={index}>
            <img className='d-block w-100' src={imageInArray.image} alt={imageInArray.caption}></img>
            <Carousel.Caption>
              <p>{imageInArray.caption}</p>
            </Carousel.Caption>
          </Carousel.Item>
        )) }
      </Carousel>
      
    </div>    
  );
};

ImagesCarousel.propTypes = {
  cityInfo: PropTypes.shape({
    mainImage: PropTypes.string.isRequired,
    city: PropTypes.string.isRequired,
    country: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    population: PropTypes.number.isRequired,
    foundedYear: PropTypes.string.isRequired,
    images: PropTypes.arrayOf(
      PropTypes.shape({
        image: PropTypes.string.isRequired,
        caption: PropTypes.string.isRequired,      
      })
    ).isRequired
    }).isRequired
  }; 

// ImagesCarousel.defaultProps = {
//   country:'',
//   description:'',
//   population: null,
//   foundedYear: null,
// };

export default ImagesCarousel;
