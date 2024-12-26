import React, { Component } from 'react';
import { Form, FloatingLabel, Button } from 'react-bootstrap';
import bootstrap from 'bootstrap' 
import './Form8.css';


class Form8 extends Component {
  constructor(props) {
    
    super(props);

    this.state = {
      inputText: '',
      submittedText: '',
      selectedBold: false,
      selectedUnderline: false,
      selectedItalic: false,
      selectTextAlignment: 'left',
    };
  }

  handleChange = (event) => {
    this.setState({ inputText: event.target.value });
  };

  handleShowText = (event) => {
    // Временная переменная для работы со стилями
    let formattedText = this.state.inputText;

    // Применим стили в зависимости от выбранных чекбоксов
    if (this.state.selectedBold) {
      formattedText = `<b>${formattedText}</b>`;
    }
    if (this.state.selectedUnderline) {
      formattedText = `<u>${formattedText}</u>`;
    }
    if (this.state.selectedItalic) {
      formattedText = `<i>${formattedText}</i>`;
    }

    // Применяем выравнивание текста
    formattedText = `<div style="text-align:${this.state.selectTextAlignment};">${formattedText}</div>`

    

    this.setState({ submittedText: formattedText })
  }

  handleCheckboxChange = (event) => {
    const { id, checked } = event.target;
    this.setState({ [id]: checked })
  }

  handleRadioChange = (event) => {
    const { id } = event.target;
    this.setState({ selectTextAlignment: id })
  }

  render() {
    return (
      <div className='container'>
        <p>This is Form8</p>

        {/* Checkboxes */}
        <div className='mb-3'>
          <Form.Check inline label='Bold' type='checkbox' id='selectedBold' className='me-3' checked={this.state.selectedBold} onChange={this.handleCheckboxChange}></Form.Check>
          <Form.Check inline label='Underline' type='checkbox' id='selectedUnderline' className='me-3' checked={this.state.selectedUnderline} onChange={this.handleCheckboxChange}></Form.Check>
          <Form.Check inline label='Italic' type='checkbox' id='selectedItalic' className='me-3'checked={this.state.selectedItalic} onChange={this.handleCheckboxChange}></Form.Check>
        </div>

        <div>
          <Form.Check inline label='Left' type='radio' name='text-alignment' id='left' checked={this.state.selectTextAlignment==='left'} onChange={this.handleRadioChange}></Form.Check>
          <Form.Check inline label='Right' type='radio' name='text-alignment' id='right' checked={this.state.selectTextAlignment==='right'} onChange={this.handleRadioChange}></Form.Check>
          <Form.Check inline label='Justify' type='radio' name='text-alignment' id='justify' checked={this.state.selectTextAlignment==='justify'} onChange={this.handleRadioChange}></Form.Check>
        </div>

        <Form.Group className='mb-3'>          
          <Form.Label>Textarea 1</Form.Label>
          <Form.Control as="textarea" placeholder="Leave a comment here" value={this.state.inputText} onChange={this.handleChange} ></Form.Control>          
        </Form.Group>

        <Form.Group className='mb-3'>
          <Form.Label>Textarea 2</Form.Label>          
          <Form.Control as="textarea" placeholder="See here the text from Textarea 1" value={this.state.inputText} readOnly></Form.Control>          
        </Form.Group>

        <Form.Group className='mb-3'>
        <Form.Label>Textarea 3</Form.Label>            
        <div
            className="submittedText"            
            dangerouslySetInnerHTML={{ __html: this.state.submittedText }}
          ></div>
        </Form.Group>
          
        <div className="d-grid gap-2 mb-3">
          <Button variant="outline-primary" size="lg" onClick={this.handleShowText}>
            Show text in Textarea 3
          </Button>      
        </div>
        
      </div>
    );
  }
}

export default Form8;
