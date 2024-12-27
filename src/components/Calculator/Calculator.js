import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './Calculator.css';
import { Button, Col, Row } from 'react-bootstrap';

class Calculator extends Component {
  
  constructor(props){
    super(props);

    this.state = {      
      currentInput:"0",
      previousInput: null,
      operator: null,
    };
  }

  handleNumberClick = (value) => {
    const { currentInput } = this.state;

    this.setState({
      currentInput: currentInput === "0" ? value : currentInput + value,
    });
  }

  handleOperatorClick = (operator) => {
    const { currentInput } = this.state;
    
    this.setState({
      previousInput: currentInput,
      currentInput: "0",
      operator: operator,
    });
  }
  
  handleClearClick = () => {
    this.setState({
      currentInput: "0",
      previousInput: null,
      operator: null,      
    });
  }

  handleBackspaceClick = () => {
    const { currentInput } = this.state;
    
    this.setState({
      currentInput: currentInput.length > 1 ? currentInput.slice(0, -1) : "0",
    });
  }  

  handleToggleSignClick = () => {
    const { currentInput } = this.state;

    this.setState({
      currentInput: currentInput.startsWith("-") ? currentInput.slice(1) : ("-" + currentInput),
    });
  }

  handleEquals = () => {
    const { currentInput, previousInput, operator } = this.state;
    const parsedCurrentInput = parseFloat(currentInput);
    const parsedPreviousInput = parseFloat(previousInput);
    
    if (operator && !isNaN(parsedPreviousInput) && !isNaN(currentInput)) {
      let result = 0;
      
      switch(operator){
        case "+":
          result = parsedPreviousInput + parsedCurrentInput;
          break;
        case "-":
          result = parsedPreviousInput - parsedCurrentInput;
          break;
        case "*":
          result = parsedPreviousInput * parsedCurrentInput;
          break;
        case "/":
          result = (currentInput !== 0) ? (parsedPreviousInput / parsedCurrentInput) : ("Error");
          break;
        default:
          break;
      }

      this.setState({ currentInput: result.toString(), operator: null, previousInput: null })
    }
  }  

  render(){
    
    return(
      <div className='container mt-5'>
        <div className='row justify-content-center'>
          <div className='col-md-4'>
            <div className='card'>
              <div className='card-body calculator-background-color'>
                <h3 className='text-end mb-4 calculator-bordered-input'>{this.state.currentInput}</h3>        

                {/* First row */}
                <Row className='g-1 mb-1'>
                  <Col xs={3}>
                    <Button variant="outline-danger w-100" onClick={this.handleClearClick}>C</Button>
                  </Col>
                  <Col xs={3}>
                    <Button variant="outline-info w-100" onClick={this.handleBackspaceClick}>&lt;</Button>
                  </Col>
                  <Col xs={3}>
                    <Button variant="outline-info w-100" onClick={this.handleToggleSignClick}>+/-</Button>
                  </Col>
                  <Col xs={3}>
                    <Button variant="outline-secondary w-100" onClick={() => this.handleOperatorClick('/')}>/</Button>
                  </Col>
                </Row>

                {/* Second row */}
                <Row className='g-1 mb-1'>
                  <Col xs={3}>
                  <Button variant="outline-primary w-100" onClick={() => this.handleNumberClick("7")}>7</Button>
                  </Col>
                  <Col xs={3}>
                  <Button variant="outline-primary w-100" onClick={() => this.handleNumberClick("8")}>8</Button>
                  </Col>
                  <Col xs={3}>
                  <Button variant="outline-primary w-100" onClick={() => this.handleNumberClick("9")}>9</Button>
                  </Col>
                  <Col xs={3}>
                  <Button variant="outline-secondary w-100" onClick={() => this.handleOperatorClick('*')}>*</Button>
                  </Col>
                </Row>                
                
                {/* Third row */}
                <Row className='g-1 mb-1'>
                  <Col xs={3}>
                  <Button variant="outline-primary w-100" onClick={() => this.handleNumberClick("4")}>4</Button>
                  </Col>
                  <Col xs={3}>
                  <Button variant="outline-primary w-100" onClick={() => this.handleNumberClick("5")}>5</Button>
                  </Col>
                  <Col xs={3}>
                  <Button variant="outline-primary w-100" onClick={() => this.handleNumberClick("6")}>6</Button>
                  </Col>
                  <Col xs={3}>
                  <Button variant="outline-secondary w-100" onClick={() => this.handleOperatorClick('-')}>-</Button>
                  </Col>
                </Row>             
               
                {/* Fourth row */}
                <Row className='g-1 mb-1'>
                  <Col xs={3}>
                  <Button variant="outline-primary w-100" onClick={() => this.handleNumberClick("1")}>1</Button>
                  </Col>
                  <Col xs={3}>
                  <Button variant="outline-primary w-100" onClick={() => this.handleNumberClick("2")}>2</Button>
                  </Col>
                  <Col xs={3}>
                  <Button variant="outline-primary w-100" onClick={() => this.handleNumberClick("3")}>3</Button>
                  </Col>
                  <Col xs={3}>
                  <Button variant="outline-secondary w-100" onClick={() => this.handleOperatorClick('+')}>+</Button>
                  </Col>
                </Row>     
                
                {/* Fifth row */}
                <Row className='g-1 mb-1'>
                  <Col xs={6}>
                  <Button variant="outline-primary w-100" onClick={() => this.handleNumberClick("0")}>0</Button>
                  </Col>
                  <Col xs={3}>
                  <Button variant="outline-primary w-100" onClick={() => this.handleNumberClick(".")}>.</Button>
                  </Col>
                  <Col xs={3}>
                  <Button variant="outline-success w-100" onClick={this.handleEquals}>=</Button>
                  </Col>                  
                </Row>                     
              </div>
            </div>
          </div>
        </div>        
      </div>
    );      
  };     
}  

// Calculator.propTypes = {};

// Calculator.defaultProps = {};

export default Calculator;
