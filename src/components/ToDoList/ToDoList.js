import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './ToDoList.css';
import { Button, Col, Container, Form, Row, Stack } from 'react-bootstrap';
import TextareaAutosize from 'react-textarea-autosize';

class ToDoList extends Component{
  constructor(props){
    super(props);

    this.state = {
      todoTaskTextSenderName: "",
      toDoTaskText: "",
      // toDoTaskSubmitted: "",      
      toDoTasksList: [],
    }
  }  

  handleSenderNameChange = (event) => {
    this.setState({ todoTaskTextSenderName: event.target.value })
  };

  handleTextAreaChange = (event) => {
    this.setState({ toDoTaskText: event.target.value })
  };

  handleAddTaskButtonClick = (event) => {
    event.preventDefault();

    let receivedTaskSenderName = this.state.todoTaskTextSenderName;
    let receivedTaskText = this.state.toDoTaskText;    
    let receivedTaskTextTimeSubmitted = new Date().toLocaleString();
    let receivedToDoTaskList = this.state.toDoTasksList;

    let newToDoTask={
      taskSender: this.state.todoTaskTextSenderName,
      taskText: this.state.toDoTaskText,      
      taskTime: new Date().toLocaleString(),
    }

    this.setState({    
      toDoTasksList: [...receivedToDoTaskList, newToDoTask],
      todoTaskTextSenderName: "",
      toDoTaskText: "",  

      // toDoTaskSubmitted: `${receivedTaskTextTimeSubmitted}\n${receivedTaskSenderName}\n${receivedTaskText}`,
      // todoTaskTextSenderName: "",
      // toDoTaskText: "",            
    })
  };



  render(){
    return(      
        <Container>           

          <Form onSubmit={this.handleAddTaskButtonClick}>            

            <Form.Group>
              <Form.Label>Sender Name</Form.Label>
              <Form.Control 
                onChange={this.handleSenderNameChange}
                value={this.state.todoTaskTextSenderName}                 
                type="text" 
                placeholder="Enter your name here" 
                className='mb-3'
                >                  
              </Form.Control>
            </Form.Group>

            <Form.Group>
              <Form.Label>Text area</Form.Label>
              <Form.Control 
                onChange={this.handleTextAreaChange}
                value={this.state.toDoTaskText}                 
                as="textarea" 
                rows={3} 
                placeholder="Enter your task here" 
                className='mb-3'
                >                  
              </Form.Control>
            </Form.Group>

            <Button 
              type='submit'
              className="w-100 mb-3"
              >Add Task
            </Button>
          </Form>

          <div>
            {this.state.toDoTasksList.slice().reverse().map((task, index)=>(
              
              <Stack key={index}>
                <TextareaAutosize                  
                  as="textarea"
                  rows={3}
                  className='mb-2'
                  readOnly
                  value={`${task.taskTime} - ${task.taskSender}\n${task.taskText}`}
                >
                </TextareaAutosize>
              </Stack>              
              
              
            ))}
          </div>
          
          


          

        </Container>   


      
      

      
    );
  }


}

export default ToDoList;
