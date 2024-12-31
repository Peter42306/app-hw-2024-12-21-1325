import React from 'react';
import PropTypes from 'prop-types';
import './Book.css';
import { Button, Card, Col, Container, Row } from 'react-bootstrap';
import { propTypes } from 'react-bootstrap/esm/Image';
import  defaultImage from '../../images/Screenshot_2024-11-15_162111.jpg'

const Book = (props) => (  
  <Card className='book-card'>
    <Card.Img variant='top' src={props.image}></Card.Img>
    <Card.Body>
      <Card.Title className='book-card-title'>{props.title}</Card.Title>
      <Card.Text className='book-card-description'>{props.description}</Card.Text>
      <Card.Text className='book-card-author'>{props.author}</Card.Text>      
    </Card.Body>
    <Card.Text className='book-card-price'>{props.price}$</Card.Text>
    <Card.Footer>
    
    <Button variant='primary' className='w-100 book-card-button' onClick={props.onSelect}>Select</Button>
    </Card.Footer>
    
  </Card>  
);

Book.propTypes = {
  image: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  onSelect: PropTypes.func.isRequired, // Функция для обработки выбора
};

Book.defaultProps = {
  image: defaultImage,
  title: 'Unknown Title',
  author: 'Unknown Author',
  price: 0,
};

export default Book;
