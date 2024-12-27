import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './CounterClass.css';
import { Button, Card } from 'react-bootstrap';
import userPhoto2 from '../../images/Screenshot_2024-11-15_161150.jpg'

class CounterClass extends Component {
  
  constructor(props){    
    super(props);
    this.state = {
      count: 0,
    };
  }

  incrementMethod = () => {
    this.setState({ count: this.state.count + 1 });
  }

  render(){
    return(
      <Card style={{width:'20rem'}}>
        <Card.Img variant='top' src={userPhoto2}></Card.Img>
        <Card.Body>
          <Card.Title>Card Title. Counter using class complonent</Card.Title>
          <Card.Text>Card Text. Some quick example text to build on the card title and make up the bulk of the card's content.</Card.Text>
          <Card.Footer>Card. Footer {this.state.count}</Card.Footer>
          <Button 
            variant='primary'
            onClick={this.incrementMethod}
            >Click me to increase by 1</Button>
        </Card.Body>
      </Card>
    );
  }
}

export default CounterClass;
