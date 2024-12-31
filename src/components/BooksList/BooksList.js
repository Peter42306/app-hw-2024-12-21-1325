import React from 'react';
import PropTypes from 'prop-types';
import './BooksList.css';
import { Carousel, Col, Container, Row } from 'react-bootstrap';
import Book from '../Book/Book';

const BooksList = ({ books, onBookSelect }) => {
  // Разделение массива книг на группы по 3
  const groupedBooks = [];
  const numberOfBooksInCarousel = 3;
  for (let i = 0; i < books.length; i += numberOfBooksInCarousel) {
    groupedBooks.push(books.slice(i, i + numberOfBooksInCarousel));
  }

  return (
    <Container className='w-100'>
      <Carousel>
        {groupedBooks.map((group, index) => (
          <Carousel.Item key={index}>
            <div className="d-flex justify-content-center">
              {group.map((book, id) => (
                <div key={id} className="text-center mx-3">
                  <Book
                    image={book.image}
                    title={book.title}
                    description={book.description}
                    author={book.author}
                    price={book.price}  
                    onSelect={() => onBookSelect(book)} // Передаем выбранную книгу
                  ></Book>                  
                </div>
              ))}
            </div>
          </Carousel.Item>
        ))}
      </Carousel>
    </Container>
  );
};  


BooksList.propTypes = {
  books: PropTypes.array.isRequired,
  onBookSelect: PropTypes.func.isRequired,  // Функцию для обработки выбора книги
};

BooksList.defaultProps = {
  books: [],
};

export default BooksList;
