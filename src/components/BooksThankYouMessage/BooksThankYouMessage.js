import React from 'react';
import PropTypes from 'prop-types';
import './BooksThankYouMessage.css';
import { Card, Form, InputGroup, Row } from 'react-bootstrap';

const BooksThankYouMessage = (orderDetails) => {
  const { buyerName, bookTitle, deliveryDate, buyerAddress } = orderDetails;

  return(
    <Card>
      <Card.Body>                 

        <Card.Text className='book-thank-you-message'>
           Dear {buyerName}!!!
        </Card.Text>
        <Card.Text className='book-thank-you-message'>
          Thank you for the order!
        </Card.Text>
        <Card.Text className='book-thank-you-message'>
          Book <strong>{bookTitle}</strong> will be delivered on <strong>{deliveryDate}</strong> to <strong>{buyerAddress}</strong> .
        </Card.Text>       
        
      </Card.Body>

    </Card>    
  )
}; 

BooksThankYouMessage.propTypes = {
  orderDetails: PropTypes.shape({
    buyerName: PropTypes.string.isRequired,
    bookTitle: PropTypes.string.isRequired,
    deliveryDate: PropTypes.string.isRequired,
    buyerAddress: PropTypes.string.isRequired,
  }).isRequired,
};

BooksThankYouMessage.defaultProps = {};

export default BooksThankYouMessage;
