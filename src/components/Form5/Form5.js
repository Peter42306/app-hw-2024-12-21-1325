import React, {Component} from 'react';
import PropTypes from 'prop-types';
import './Form5.css';

// Определяем компонент Form5 как классовый компонент, наследующийся от React.Component
class Form5 extends Component {
  constructor(props) {
    super(props); // Вызов конструктора родительского класса с передачей пропсов
    
    this.state = {
      queryText: "", // начальное состояние для поля ввода текста
      querySenderName: "", // начальное состояние для поля ввода имени отправителя
      messages: [], // массив для хранения всех сообщений
      
      // submittedText: "", // состояние для сохранения имени отправителя и отправленного текста
      // submittedSenderName: "", // состояние для сохранения имени отправителя и отправленного текста
      // submittedTextTime: "", // состояние для сохранения имени отправителя и отправленного текста
    };
  }

  // Обработчик изменения значения в поле ввода текста
  handleTextChange = (event) => {
    this.setState({queryText: event.target.value});
  };

  // Обработчик изменения значения в поле ввода имени отправителя
  handleSenderNameChange = (event) => {
    this.setState({querySenderName: event.target.value});
  };

  // Обработчик отправки формы
  handleSubmit = (event) => {
    event.preventDefault(); // предотвращаем перезагрузку страницы при отправке формы
    
    const queryText = this.state.queryText; // Получаем текущие значения из состояния (текст и имя отправителя).
    const querySenderName = this.state.querySenderName;
    const messages = this.state.messages;
    const queryTextTimeSent = new Date().toLocaleString(); // Создаем строку с текущим временем отправки

    // Добавляемновое сообщение в массив
    const newMessage = {
      senderName: querySenderName,
      text: queryText,
      timeSent: queryTextTimeSent,
    };

    this.setState({
      messages: [...messages,newMessage],
      // submittedText: queryText,
      // submittedSenderName: querySenderName,
      // submittedTextTime: queryTextTimeSent,
      queryText: "", // очищаем поле для ввода текста      
      querySenderName: "", // очищаем поле для ввода имени
      
    });
  };

  render() {
    return (
        <div className='form4-container'>

          {/* Вывод всех сообщений */}
          <div className='form4-submitted-message'>
            {this.state.messages.map((message,index) =>(
              <div className='form4-submitted-message'>
                <div className='form4-submitted-message-header'>
                  <span className='form4-submitted-text-sender-name'>{message.senderName}</span>
                  <span className='form4-submitted-text-time'>{message.timeSent}</span>
                </div>
                <hr></hr>
                <div className='form4-submitted-text'>
                  <span>{message.text}</span>
                </div>
              </div>              
            ))}   
          </div>

          {/* Форма для нового сообщения */}          
          <div className='form4-new-text'>
            <span>Add new message</span>  
            
            <form onSubmit={this.handleSubmit}>   

              <div className='form4-input-group'>
                <label>Your name: </label>              
                <input
                  type="text"                      
                  placeholder='Enter your name'            
                  value = {this.state.querySenderName} // Значение поля input привязано к состоянию (имя отправителя)
                  onChange = {this.handleSenderNameChange} // При изменении значения вызывается handler для изменения состояния     
                  required     
                ></input>
              </div>
              
              <div className='form4-input-group'>
                <label>Your message:</label>
                <textarea
                  name='queryText'
                  placeholder='Enter your text'
                  value={this.state.queryText} // Значение поля textarea привязано к состоянию (текст сообщения)
                  onChange={this.handleTextChange} // При изменении текста в textarea вызывается handler для изменения состояния
                  required
                ></textarea>
              </div>             

              <button type="submit" className='form4-submit-button'>Submit</button>

            </form>

          </div>

        </div>     
    );
  }
}

export default Form5;