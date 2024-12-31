import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './BooksListPagination.css';
import { Col, Container, Pagination, Row } from 'react-bootstrap';
import Book from '../Book/Book';

class BooksListPagination extends Component {
  constructor(props) {
    
    super(props);

    this.state = { currentPage: 1 }; // Состояние для текущей страницы
    this.booksPerPage = 3; // Количество книг на странице
  }

  // Обработчик для изменения текущей страницы
  handlePageChange = (pageNumber)=> {
    this.setState({ currentPage: pageNumber });
  };

  render(){
    const { books, onBookSelect } = this.props;
    const { currentPage } = this.state;

    const totalPages = Math.ceil(books.length / this.booksPerPage); // Вычисляем общее количество страниц

    const startPagination = (currentPage - 1) * this.booksPerPage;
    const endPagination = currentPage * this.booksPerPage;
    const currentPageBooks = books.slice(startPagination, endPagination); // Получаем книги для текущей страницы

    return(
      <Container>
        <Row>
        {currentPageBooks.map((book, index) => (          
            <Col key={index} md={4} className="mb-4 text-center">              
              <Book
                image={book.image}
                title={book.title}
                description={book.description}
                author={book.author}
                price={book.price}
                onSelect={() => onBookSelect(book)}
              />
            </Col>
          ))}
        </Row>
        {/* Пагинация */}
        <Row>
          <Col>          
            <Pagination className="justify-content-center">
              <Pagination.First
                onClick={() => this.handlePageChange(1)}
                disabled={currentPage === 1}
              />
              <Pagination.Prev
                onClick={() => this.handlePageChange(currentPage - 1)}
                disabled={currentPage === 1}
              />
              {[...Array(totalPages)].map((_, pageIndex) => (
                <Pagination.Item
                  key={pageIndex}
                  active={pageIndex + 1 === currentPage}
                  onClick={() => this.handlePageChange(pageIndex + 1)}
                >
                  {pageIndex + 1}
                </Pagination.Item>
              ))}
              <Pagination.Next
                onClick={() => this.handlePageChange(currentPage + 1)}
                disabled={currentPage === totalPages}
              />
              <Pagination.Last
                onClick={() => this.handlePageChange(totalPages)}
                disabled={currentPage === totalPages}
              />
            </Pagination>
          </Col>
        </Row>        
      </Container>
      
    );        
  }
}


BooksListPagination.propTypes = {
  books: PropTypes.array.isRequired,
  onBookSelect: PropTypes.func.isRequired,
};

BooksListPagination.defaultProps = {
  books: [],
};

export default BooksListPagination;
