import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './Counter1.css';
import { Button, Row } from 'react-bootstrap';

class Counter1 extends Component{
  constructor(props){
    super(props);
    this.state = {
      counter: 0,      
    }
  };

  handleButtonPlusOne = () => {
    this.setState({ counter: this.state.counter + 1 });
  }

  handleButtonMinusOne = () => {
    this.setState({ counter: this.state.counter - 1 });
  }

  handleButtonReset = () => {
    this.setState({ counter: 0 })
  }

  render(){
    return(
      <div>
        <h1>{this.state.counter}</h1>

        <Button className='ms-1' variant='primary' onClick={this.handleButtonPlusOne}>Button +1</Button>
        <Button className='ms-1' variant='primary' onClick={this.handleButtonMinusOne}>Button -1</Button>
        <Button className='ms-1'variant='primary' onClick={this.handleButtonReset}>Button Reset Value</Button>
        
        
        
        
        
        
      </div>
    );
  }
}

// const Counter1 = () => (
//   <div className="Counter1">
//     Counter1 Component
//   </div>
// );

Counter1.propTypes = {};

Counter1.defaultProps = {};

export default Counter1;
