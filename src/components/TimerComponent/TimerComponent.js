import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './TimerComponent.css';
import { Button } from 'react-bootstrap';

class TimerComponent extends Component{
  constructor(props){
    super(props);

    this.state = {
      seconds: 0,
      isRunning: false,
      isPaused: false,
    };

    this.intervalId = null;
  }

  handleStart = () => {
    if(!this.state.isRunning) {
      this.setState({ isRunning: true });
      this.intervalId = setInterval(() => {
        this.setState((previousState) => ({ seconds: previousState.seconds + 1 }));
      }, 1000);
    }
  };

  handlePauseOrResume = () => {
    if(this.state.isRunning) {
      if(!this.state.isPaused){
        // Таймер работает, нажали Pause
        clearInterval(this.intervalId);
        this.setState({ isPaused: true });
      } else {
        // Таймер на паузе, нажали Resume
        this.setState({ isPaused: false });
        this.intervalId = setInterval(() => {
          this.setState((previousState) => ({ seconds: previousState.seconds + 1 }));
        }, 1000);
      }      
    }
  };

  handleStop = () => {
    if(this.state.isRunning) {
      clearInterval(this.intervalId);
      this.setState({ seconds: 0, isRunning: false, isPaused: false })
    }
  }; 

  componentWillUnmount(){
    clearInterval(this.intervalId);
  };

  render(){
    return(
      <div>
        <h2>---- Timer Component ----</h2>
        <h2>Count: {this.state.seconds}</h2>
        <div className="d-flex gap-2">
          <Button className="w-100" variant='outline-primary' onClick={this.handleStart}>Start</Button>
          <Button className="w-100" variant='outline-primary' onClick={this.handlePauseOrResume}>{this.state.isPaused ? "Resume" : "Pause"}</Button>
          <Button className="w-100" variant='outline-primary' onClick={this.handleStop}>Stop</Button>
        </div>        
      </div>
    );
  }
}

export default TimerComponent;
