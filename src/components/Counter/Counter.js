import React, {Component} from 'react';
import PropTypes from 'prop-types';
import './Counter.css';

class Counter extends Component {

  constructor(props){
    super(props); // Вызываем конструктор родительского класса Component
    this.state = { count: 0 } // Устанавливаем начальное состояние компонента

    this.increaseCounter1 = this.increaseCounter1.bind(this); // Привязываем метод increaseCounter1 к контексту текущего класса
  }

  // Метод для увеличения счетчика на 2 (с использованием функции, привязанной через bind)
  increaseCounter1 = function(_e)
  {
    this.setState({ count: this.state.count + 1 }) // Используем setState для изменения состояния
  }

  // Метод для увеличения счетчика на 1 (используем стрелочную функцию, которая сохраняет контекст)
  increaseCounter2 = _e => {
    this.setState({ count: this.state.count + 2 })// Стрелочные функции автоматически привязывают `this` к текущему контексту
  }

  // Метод для сброса счетчика в 0
  resetCounter = () => this.setState({ count: 0 })

  // Вызывается один раз после того, как компонент был добавлен в DOM
  componentDidMount(){
    console.log("componentDidMount -> ",this.state.count);
  }

  // Вызывается каждый раз, когда состояние или пропсы компонента изменяются
  componentDidUpdate(){
    console.log("componentDidUpdate -> ",this.state.count);
  }

  // Вызывается перед тем, как компонент будет удален из DOM
  componentWillUnmount(){
    console.log("componentWillUnmount -> ",this.state.count);
  }

  // Метод render описывает, как будет выглядеть компонент на экране
  render(){
    return (
      <div className="counter__container">
        {/* Заголовок с выводом текущего значения счетчика */}
        <div className="counter__header">
          <p>You clicked {this.state.count} times</p>
        </div>

        {/* Основная часть с кнопками для управления состоянием */}
        <div className="counter__main">
          <button onClick={this.increaseCounter1}>Increase counter by 1 with bind</button>
          <button onClick={this.increaseCounter2}>Increase counter by 2 with arrow function</button>
          <button onClick={this.resetCounter}>Reset counter</button>
        </div>
      </div>
    );
  }
}


// const Counter = () => (
//   <div className="Counter">
//     Counter Component
//   </div>
// );

// Counter.propTypes = {};

// Counter.defaultProps = {};

export default Counter;
