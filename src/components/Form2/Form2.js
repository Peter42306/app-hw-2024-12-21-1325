import React from 'react';
import PropTypes from 'prop-types';
import './Form2.css';
import { Component } from 'react';


class Form2 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      query: "", // начальное состояние для поля ввода
      submittedQuery: "", // состояние для сохранения отправленного текста
    };
  }

  // Обработчик изменения значения в поле ввода
  handleChange = (event) => {
    this.setState({ query: event.target.value });
  };

  // Обработчик отправки формы
  handleSubmit = (event) => {
    event.preventDefault(); // предотвращаем перезагрузку страницы
    this.setState({submittedQuery: this.state.query}); // сохраняем введённый текст в submittedQuery
  };

  render() {
    return (
      <div>

        <form onSubmit={this.handleSubmit}>
          <div className='form1-container'>
            <input
              name="query"
              value={this.state.query} // значение input привязано к состоянию
              onChange={this.handleChange} // обновление состояния при изменении
            />
            <button type="submit">Submit</button>
          </div>
          
        </form>

        <div>
          <textarea readOnly value={this.state.submittedQuery}></textarea>
        </div>        

        <p>{this.state.submittedQuery}</p>   

        {this.state.submittedQuery ? ( <p>You submitted: {this.state.submittedQuery}</p>) : (  <p>Case 2: Please write something & submit</p>)}

        {this.state.submittedQuery && ( <p>Case 3: You submitted: {this.state.submittedQuery}</p> )}
     

      </div>      
    );
  }
}

export default Form2;
