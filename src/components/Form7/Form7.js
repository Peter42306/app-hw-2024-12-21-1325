import React, {Component} from 'react';
import PropTypes from 'prop-types';
import './Form7.css';

// Letters counter
class Form7 extends Component {
  constructor(props){

    // необходимый вызов конструктора родительского класса
    super(props) 

    // инициализация локального состояния компонента, которое используется для управления данными в процессе работы с компонентом
    this.state = {
      inputText: '', // текст пользователя      
      wordArrayAfterFiltered: [], // массив для хранения отфильтрованных слов
      answers: [], // массив для ответов пользователя
      answerOptions: [], // Массив с вариантами ответов для каждого слова
      confirmedAnswers: [], // Массив для отслеживания, были ли ответы подтверждены
      isTextSumbitted: false, // Флаг отправки формы
    };
  }

  // Обработчик изменения текста в textarea
  handleTextChange = (event) => {
    this.setState({
      inputText: event.target.value // Обновляем текстовое поле в состоянии
    }); 
  };

  // Обработчик отправки формы
  handleSubmit = (event) => {
    event.preventDefault(); // Предотвращаем перезагрузку страницы

    const wordArray = this.getWordsArrayAfterFiltered(this.state.inputText); // Получаем слова без знаков препинания и без символов
    const radioButtonsOptions = wordArray.map(this.generateAnswerOptions); // Сохраняем варианты ответов в состоянии

    // Обновляем состояние после нажатия кнопки Submit to count words
    this.setState({
      wordArrayAfterFiltered: wordArray, // Сохраняем массив слов в состоянии
      answerOptions: radioButtonsOptions, // Сохраняем варианты ответов в состоянии
      answers: Array(wordArray.length).fill(null), // Инициализируем массив с начальными ответами null
      confirmedAnswers: Array(wordArray.length).fill(false), // Инициализируем массив с подтверждениями выбора
      isTextSumbitted: true, // Устанавливаем флаг отправки формы
    }); 
  };    

  // Функция для получения списка слов с нумерацией
  getWordsArrayAfterFiltered = (text) => {
    const cleanedText = text.replace(/[^a-zA-Zа-яА-ЯёЁ\s]/g, ''); // Убираем все небуквенные символы 
    const trimmedText = cleanedText.trim(); // Убираем пробелы в начале и в конце текста
    const wordsArray = trimmedText.split(/\s+/); // Разбиваем текст на слова с учетом пробелов между ними
    return wordsArray.filter(word => word.length > 0).map(word => word.toUpperCase()); // Возвращаем только валидные слова, делаем все буквы большими
  };

  // Функция для генерации случайных вариантов для ответа
  generateAnswerOptions = (word) => {
    const wordLength = word.length; // Длина текущего слова
    const options = new Set([wordLength]); // Добавляем правильный вариант в объект Set, множество, не массив, структура данных, которая автоматически удаляет дубликаты

    // Генерируем пока не будет 5 вариантов
    while (options.size < 5) {
      
      const randomLength = Math.max(1, Math.floor(Math.random() * (wordLength + 5))); // Генерация случайных чисел с учетом длины слова      
      options.add(randomLength); // добавляем случайный вариант в объект Set
    } 

    return Array.from(options).sort(() => Math.random() - 0.5); // Перемешиваеи варианты и возвращаем массив
  };  

  // Обработчик изменения ответа для конкретного слова
  handleAnswerChange = (index, answer) => {    
    const updateAnswers = [...this.state.answers]; // Создаем копию массива ответов
    updateAnswers[index] = answer; // Обновляем ответ для указанного индекса 

    const updatedConfirmedAnswers = [...this.state.confirmedAnswers]; // Создаём копию массива confirmedAnswers, который отслеживает, подтвержден ли ответ
    updatedConfirmedAnswers[index] = false; // Устанавливаем, что ответ еще не подтвержден

    // Обновляем состояние
    this.setState({ 
      answers: updateAnswers,
      confirmedAnswers: updatedConfirmedAnswers,
    }); 
  };

  handleConfirmedAnswers = (index) => {
    const updateConfirmedAnswers = [...this.state.confirmedAnswers];
    updateConfirmedAnswers[index] = true; // Помечаем, что ответ подтвержден для этого слова

    this.setState({ 
      confirmedAnswers: updateConfirmedAnswers 
    });
  };

  // Функция для подсчета количества правильных ответов
  countCorrectAnwers = () => {
    return this.state.answers
      .filter((answer, index) => answer === this.state.wordArrayAfterFiltered[index].length) // Сравнивается текущий ответ с длиной соответствующего слова из wordArrayAfterFiltered
      .length; // После фильтрации возвращается новый массив, содержащий только правильные ответы
  };

  render(){

    // переменные, которые рассчитываются на основе текущего состояния и используются в отображении
    const correctAnswersCount = this.countCorrectAnwers(); // Получаем количество правильных ответов
    const totalQuestions = this.state.wordArrayAfterFiltered.length; // Общее количество слов в тексте
    const allAnswersConfirmed = this.state.confirmedAnswers.every(Boolean); // Проверяем, подтверждены ли все ответы

    return(
      <div>

        <p>Test how many letters are in each word in the input text</p>

        {/* Форма для ввода текста */}
        <form onSubmit={this.handleSubmit}>

          <textarea
            value={this.state.inputText} // отображает введённый текст
            onChange={this.handleTextChange} // обновляет текст в state при изменении
            placeholder="Enter your text here"
            rows="1"
            cols="150"
          ></textarea>

          <br></br>

          <button type='submit'>Submit</button>

        </form>

        {/* Отображение количества слов */}
        <p>
          {this.state.wordArrayAfterFiltered.length === 0 
          ? 'To start please enter a text & submit' 
          : `You entered a text consisting of ${this.state.wordArrayAfterFiltered.length} words`}
        </p>  

        <hr></hr>

        {/* Генерация вопросов для каждого слова */}
        <div>
          {this.state.wordArrayAfterFiltered.map((word, indexWord) => {

            const answerOptions = this.state.answerOptions[indexWord] || []; // Варианты ответов
            const isConfirmed = this.state.confirmedAnswers[indexWord]; // Подтвержден ли ответ

            return (
              <div key={indexWord} className={`word-question-radio ${isConfirmed ? 'confirmed' : ''}`}>

                <p>
                  {indexWord + 1}. How many letters are there in the word "{word}"?
                </p>

                {answerOptions.map((option, indexOption) => (
                  <label
                    key={indexOption}>
                    <input
                      type='radio'
                      id={`answer-${indexWord}-${indexOption}`} // Уникальный идентификатор для каждой радиокнопки
                      name={`word-${indexWord}`} // Уникальное имя для группы радиокнопок
                      value={option}
                      onChange={() => this.handleAnswerChange(indexWord, option)} // Обработчик изменения ответа                       
                    />
                    {option}
                  </label>
                ))}                
                <br></br>

                {/* Кнопка подтверждения для каждого слова */}
                <button 
                  onClick={() => this.handleConfirmedAnswers(indexWord)} 
                  disabled={this.state.answers[indexWord] === null || isConfirmed}
                  className={isConfirmed ? 'confirmed-button': ''}>
                  {isConfirmed ? 'Confirmed' : 'Please choose & confirm your answer'}
                </button>
                {/* {isConfirmed && (
                  <p>
                    {this.state.answers[indexWord]} is {this.state.answers[indexWord]=== word.length ? 'correct' : 'not correct'}
                  </p>
                )} */}
                <hr></hr>
              </div>
            )
          })}          
        </div>        

        {/* Блок с результатами */}
        <div>
          {this.state.inputText.trim() && this.state.isTextSumbitted ? ( // Проверяем, что текст введён и форма отправлена
              allAnswersConfirmed ? (
              <p>Result: {correctAnswersCount} correct answers to {totalQuestions} questions</p>
              ) : (
              <p>Please choose & confirm all answers to see result</p>            
              )  
          ) : null} {/* Если текста нет или форма не отправлена, ничего не выводим */}
          
        </div>

      </div>      
    );
  }
}


export default Form7;