import React, { Component } from 'react';
import PropTypes, { number } from 'prop-types';
import './BooksRequestForm.css';
import { Button, Card, Container, Form, InputGroup, Modal, Row } from 'react-bootstrap';

class BooksRequestForm extends Component {
  constructor(props) {
    
    super(props);

    this.state = {
      name: '',
      quantity: '',
      address: '',
      deliveryDate: '',
      comments: '',
      showModal: false,
    };
  }

  handleInputChange = (event) => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };

  // handleNameInputChange = (event) => {    
  //   this.setState({ name: event.target.value })
  // };
  
  // handleQuantityInputChange = (event) => {    
  //   this.setState({ quantity: event.target.value })
  // };

  // handleAddressInputChange = (event) => {    
  //   this.setState({ address: event.target.value })
  // };

  // handleDeliveryDateInputChange = (event) => {    
  //   this.setState({ deliveryDate: event.target.value })
  // };

  // handleCommentsInputChange = (event) => {    
  //   this.setState({ comments: event.target.value })
  // };

  handleSubmit = (event) => {
    event.preventDefault();
    
    const { selectedBook, onOrderComplete } = this.props;
    const { quantity, name, address, deliveryDate, comments } = this.state;

    // Проверка, что дата в будущем
    const currentDate = new Date();
    const selectedDate = new Date(deliveryDate);

    if(selectedDate <= currentDate ) {
      alert('Please choose a delivery date in the future');
      return;
    }


    if(selectedBook && quantity && name && address && deliveryDate){
      onOrderComplete({
        bookTitle: selectedBook.title,
        quantity,
        name,
        address,        
        deliveryDate,
        comments,        
      });

      this.setState({ showModal: true })
    } else {
      alert('Please fill in all required fields');
    }
  };

  handleCloseModal = () => {
    this.setState({ showModal: false });
  };

  render(){    
    const { selectedBook, onOrderComplete } = this.props;
    const { quantity, name, address, deliveryDate, comments, showModal } = this.state;

    return(
      <>
      <Card className="book-card-request-form">
        <Form onSubmit={this.handleSubmit}>
          <Card.Body>
            <Row>
              <InputGroup className="mb-3">
                <InputGroup.Text className='book-request-form-input-group-text'>Book</InputGroup.Text>
                <Form.Control
                  as="textarea"
                  rows={4}
                  value={selectedBook ? selectedBook.title : ''}
                  readOnly
                />
              </InputGroup>
            </Row>
            <Row>
              <InputGroup className="mb-3">
                <InputGroup.Text className='book-request-form-input-group-text'>Quantity</InputGroup.Text>
                <Form.Control
                  type="number" 
                  min={1} 
                  step={1}
                  rows={1}
                  name="quantity"                  
                  value={quantity}
                  onChange={this.handleInputChange}
                  required
                />
              </InputGroup>
            </Row>
            <Row>
              <InputGroup className="mb-3">
                <InputGroup.Text className='book-request-form-input-group-text'>Name</InputGroup.Text>
                <Form.Control
                  type="text"
                  name="name"
                  value={name}
                  onChange={this.handleInputChange}
                  required
                />
              </InputGroup>
            </Row>
            <Row>
              <InputGroup className="mb-3">
                <InputGroup.Text className='book-request-form-input-group-text'>Delivery Address</InputGroup.Text>
                <Form.Control
                  as="textarea"
                  rows={3}
                  name="address"
                  value={address}
                  onChange={this.handleInputChange}
                  required
                />
              </InputGroup>
            </Row>
            <Row>
              <InputGroup className="mb-3">
                <InputGroup.Text className='book-request-form-input-group-text'>Delivery Date</InputGroup.Text>
                <Form.Control
                  type="date"
                  name="deliveryDate"
                  value={deliveryDate}
                  onChange={this.handleInputChange}
                  required
                />
              </InputGroup>
            </Row>
            <Row>
              <InputGroup className="mb-3">
                <InputGroup.Text className='book-request-form-input-group-text'>Comments</InputGroup.Text>
                <Form.Control
                  as="textarea"
                  rows={7}
                  name="comments"
                  value={comments}
                  onChange={this.handleInputChange}
                />
              </InputGroup>
            </Row>
          </Card.Body>
          <Card.Footer>
            <Button type="submit" variant="primary" className="w-100">
              Buy
            </Button>
          </Card.Footer>
        </Form>
      </Card>

      
      <Modal show={showModal} onHide={this.handleCloseModal}>
      <Modal.Header closeButton>
        <Modal.Title>Order Confirmation</Modal.Title>
      </Modal.Header>
      <Modal.Body>

        <p>
          Dear {name}, thanks for the order!
        </p>

        { (Number(quantity) === 1) ? (
          <p>
          Your ordered {quantity} book <strong>{selectedBook?.title}</strong>, which will be delivered on {deliveryDate} to adress {address}. 
        </p>
        ) : (
          <p>
          Your ordered {quantity} books <strong>{selectedBook?.title}</strong>, which will be delivered on {deliveryDate} to adress {address}. 
          </p>
        )}
        
        <p>
          You left a comment: <i>{comments}</i> 
        </p>

        <p>
          Your comment will be taken into account.
        </p>

      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={this.handleCloseModal}>
          Close
        </Button>
      </Modal.Footer>
    </Modal>
    </>
    );
  }
}

BooksRequestForm.propTypes = {
  selectedBook: PropTypes.object,
  onOrderComplete: PropTypes.func.isRequired,
};

BooksRequestForm.defaultProps = {
  selectedBook: null,
};

export default BooksRequestForm;
