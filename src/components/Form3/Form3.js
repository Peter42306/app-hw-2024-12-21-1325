import React, {Component} from 'react';
import PropTypes from 'prop-types';
import './Form3.css';

// Определяем компонент Form3 как классовый компонент, наследующийся от React.Component
class Form3 extends Component {
  constructor(props) {
    super(props); // Вызов конструктора родительского класса с передачей пропсов
    
    this.state = {
      queryText: "", // начальное состояние для поля ввода текста
      querySenderName: "", // начальное состояние для поля ввода имени отправителя
      submittedQuery: "", // состояние для сохранения имени отправителя и отправленного текста
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
    const queryTextTimeSent = new Date().toLocaleString(); // Создаем строку с текущим временем отправки

    this.setState({
      submittedQuery: `Message sent at ${queryTextTimeSent}\nName: ${querySenderName}\nMessage: ${queryText}`, 
      queryText: "", // очищаем поле для ввода текста
      querySenderName: "", // очищаем поле для ввода имени
    }); // сохраняем введённый текст в submittedQuery      
  };

  render() {
    return (
      <div>

        <form onSubmit={this.handleSubmit}>          

          <input
            type="text"          
            name="senderName"
            placeholder='Your name'            
            value = {this.state.querySenderName} // Значение поля input привязано к состоянию (имя отправителя)
            onChange = {this.handleSenderNameChange} // При изменении значения вызывается handler для изменения состояния          
          ></input>

          <textarea
            name='queryText'
            placeholder='Enter your text'
            value={this.state.queryText} // Значение поля textarea привязано к состоянию (текст сообщения)
            onChange={this.handleTextChange} // При изменении текста в textarea вызывается handler для изменения состояния
          ></textarea>

          <button type="submit">Submit</button>
        </form>

          <div>
            <textarea 
              readOnly value={this.state.submittedQuery} // Отображает сообщение, которое было отправлено, включая имя, текст и время
            ></textarea>
        </div>                
     

      </div>      
    );
  }
}

export default Form3;
