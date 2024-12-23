import React from 'react';
import PropTypes from 'prop-types';
import './Form1.css';
import { Component } from 'react';

// the form for filling with button to submit
class Form1 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      query: "", // initial state for the input field
    };
  }

  // handler for input field value change
  handleChange = (event) => {
    this.setState({ query: event.target.value });
  };

  // handler to submit form
  handleSubmit = (event) => {
    event.preventDefault(); // preventing page reload    
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <div className='form1-container'>
          <input
            name="query"
            value={this.state.query} // the value of the input is bound to the state.
            onChange={this.handleChange} // state update upon change.
          />
          <button type="submit">Submit</button> 
        </div>
        
      </form>
    );
  }
}

export default Form1;

// const Form1 = () => (
//   <div className="Form1">
//     Form1 Component
//   </div>
// );

// Form1.propTypes = {};

// Form1.defaultProps = {};

// export default Form1;
