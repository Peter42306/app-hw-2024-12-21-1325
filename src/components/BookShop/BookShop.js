import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './BookShop.css';
import { Col, Container, Row } from 'react-bootstrap';
import BooksList from '../BooksList/BooksList';
import BooksRequestForm from '../BooksRequestForm/BooksRequestForm';
import BooksListPagination from '../BooksListPagination/BooksListPagination';
import BooksThankYouMessage from '../BooksThankYouMessage/BooksThankYouMessage';

class BookShop extends Component {
  constructor(props) {
    super(props);

    // Состояние для выбранной книги
    this.state = {
      selectedBook: null,
      isOrderCompleted: false,
      orderDetails: null,
    };    
  }

  handleBookSelect = (book) => {
    this.setState({ selectedBook: book })    
  }

  handleOrderCompletion = (orderDetails) => {
    this.setState({
      isOrderCompleted: true,
      orderDetails,
    })
  }

  render() {
    const { books } = this.props;
    const { selectedBook, isOrderCompleted, orderDetails } = this.state;

    return(

      <Container className='w-100'>
        <Row>
          <Col lg={9}>   

            <BooksListPagination 
              books={books} 
              onBookSelect={this.handleBookSelect}
            ></BooksListPagination>          

          {/* <BooksThankYouMessage></BooksThankYouMessage> */}

          
            {/* Реализация с Bootstrap Pagination */}
            {/* <BooksListPagination 
              books={books} 
              onBookSelect={this.handleBookSelect}
            ></BooksListPagination> */}

            {/* Реализация с Bootstrap Carousel */}
            {/* <BooksList 
              books={books} 
              onBookSelect={this.handleBookSelect}
            ></BooksList>         */}

          </Col>
          <Col lg={3}>

            <BooksRequestForm 
              selectedBook={selectedBook}
              onOrderComplete={this.handleOrderCompletion}
            ></BooksRequestForm>

          </Col>
        </Row>          
      </Container>
    )
  }

}


BookShop.propTypes = {
  books: PropTypes.array.isRequired,
};

BookShop.defaultProps = {
  books: [],
};

export default BookShop;
