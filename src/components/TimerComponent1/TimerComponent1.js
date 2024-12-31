import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './TimerComponent1.css';

class TimerComponent1 extends Component {
  constructor(props){

    super(props);

    this.state = { seconds: 0 };
    this.intervalId = null;
  };

  componentDidMount(){
    this.intervalId = setInterval(() =>{
      this.setState((previousState) => ({ seconds: previousState.seconds + 1 }));
    }, 1000);
  }

  componentWillUnmount(){
    clearInterval(this.intervalId);
  }

  render(){
    return(
      <div>Seconds from start this window: {this.state.seconds} seconds</div>
    )
  }
}

export default TimerComponent1;
