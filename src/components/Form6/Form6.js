import React, {Component} from 'react';
import PropTypes from 'prop-types';
import './Form6.css';

// Word Counter
class Form6 extends Component {
  constructor(props){
    super(props)
    this.state = {
      inputText: '', // текст пользователя
      wordCount: 0, // количество слов
      wordArrayAfterFiltered: [], // массив для хранения отфильтрованных слов
    };
  }

  handleTextChange = (event) => {
    this.setState({inputText: event.target.value});
  };

  handleSubmit = (event) => {
    event.preventDefault();    
    const wordCount = this.countWords(this.state.inputText);
    const wordArrayAfterFiltered = this.getWordsArrayAfterFiltered(this.state.inputText); // Получаем фильтрованные слова
    this.setState({wordCount, wordArrayAfterFiltered}); // Обновляем состояние
  };
  

  // Функция для подсчета слов в тексте
  countWords = (text) => {    
    const cleanedText = text.replace(/[^a-zA-Zа-яА-ЯёЁ\s]/g, '');// Убираем все небуквенные символы 
    const trimmedText = cleanedText.trim(); // Убираем пробелы в начале и в конце текста
    const wordsArray = trimmedText.split(/\s+/); // Разбиваем текст на слова с учетом пробелов между ними
    const validWords = wordsArray.filter(wordsArray => wordsArray.length > 0);  // Фильтруем слова, чтобы исключить пустые элементы
    return validWords.length; // Считаем количество слов
  };

  // Функция для получения списка слов с нумерацией
  getWordsArrayAfterFiltered = (text) => {
    const cleanedText = text.replace(/[^a-zA-Zа-яА-ЯёЁ\s]/g, '');// Убираем все небуквенные символы 
    const trimmedText = cleanedText.trim(); // Убираем пробелы в начале и в конце текста
    const wordsArray = trimmedText.split(/\s+/); // Разбиваем текст на слова с учетом пробелов между ними
    return wordsArray.filter(wordsArray => wordsArray.length > 0); // Возвращаем только валидные слова    
  };

  render(){
    return(
      <div>

        <p>Word Counter</p>
        <form onSubmit={this.handleSubmit}>
          <textarea
            value={this.state.inputText}
            onChange={this.handleTextChange}
            placeholder="Enter your text here"
            rows="4"
            cols="150"
          ></textarea>
          <br></br>
          <button type='submit'>Submit to count words</button>
        </form>
        <p>Total words: {this.state.wordCount}</p>   

        {/* Выводим слова с нумерацией */}     
        <div className='words-after-filtered'>
          {this.state.wordArrayAfterFiltered.map((word, index) => (
            <div key={index}>
              {index + 1}. {word} - {word.length}
            </div>            
          ))}
        </div>        

      </div>      
    );
  }
}


export default Form6;
