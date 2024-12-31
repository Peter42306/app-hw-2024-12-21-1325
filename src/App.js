import React from 'react';
import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'; // Подключаем стили Bootstrap
import Counter from './components/Counter/Counter';
import Avatar from './components/Avatar/Avatar';
import userPhoto1 from '../src/images/Screenshot_2024-11-15_161150.jpg';
import userPhoto2 from '../src/images/Screenshot_2024-11-15_162111.jpg';
import Slideshow from './components/Slideshow/Slideshow';
import odessaImage1 from './images/Odessa_Screenshot 2024-12-21 230706.jpg';
import odessaImage2 from './images/Odessa_Screenshot 2024-12-21 230731.jpg';
import odessaImage3 from './images/Odessa_Screenshot 2024-12-21 230732.jpg';
import odessaImage4 from './images/Odessa_Screenshot 2024-12-21 230800.jpg';
import odessaImage5 from './images/Odessa_Screenshot 2024-12-21 233256.jpg';
import odessaImage6 from './images/Odessa_Screenshot 2024-12-21 233309.jpg';
import odessaImage7 from './images/Odessa_Screenshot 2024-12-21 233323.jpg';
import odessaImage8 from './images/Odessa_Screenshot 2024-12-21 233337.jpg';
import odessaImage9 from './images/Odessa_Screenshot 2024-12-21 233428.jpg';
import odessaImage10 from './images/Odessa_Screenshot 2024-12-21 233447.jpg';
import odessaImage11 from './images/Odessa_Screenshot 2024-12-21 233506.jpg';
import odessaImage12 from './images/Odessa_Screenshot 2024-12-21 233520.jpg';
import odessaImage13 from './images/Odessa_Screenshot 2024-12-21 233551.jpg';
import odessaImage14 from './images/Odessa_Screenshot 2024-12-21 233620.jpg';
import malagaImage1 from './images/malaga_photo_2024-12-22_10-49-45.jpg';
import malagaImage2 from './images/malaga_photo_2024-12-22_10-49-46.jpg';
import malagaImage3 from './images/malaga_photo_2024-12-22_10-50-01.jpg';
import malagaImage4 from './images/malaga_photo_2024-12-22_10-50-02.jpg';
import malagaImage5 from './images/malaga_photo_2024-12-22_10-50-07.jpg';
import malagaImage6 from './images/malaga_photo_2024-12-22_10-50-12.jpg';
import malagaImage7 from './images/malaga_photo_2024-12-22_10-50-13.jpg';
import malagaImage8 from './images/malaga_photo_2024-12-22_10-50-14.jpg';
import malagaImage9 from './images/malaga_photo_2024-12-22_10-50-16.jpg';
import malagaImage10 from './images/malaga_photo_2024-12-22_10-50-18.jpg';
import malagaImage11 from './images/malaga_photo_2024-12-22_10-50-19.jpg';
import malagaImage12 from './images/malaga_photo_2024-12-22_10-50-21.jpg';
import malagaImage13 from './images/malaga_photo_2024-12-22_10-50-22.jpg';
import malagaImage14 from './images/malaga_photo_2024-12-22_10-50-24.jpg';
import malagaImage15 from './images/malaga_photo_2024-12-22_10-50-25.jpg';
import malagaImage16 from './images/malaga_photo_2024-12-22_10-50-26.jpg';
import malagaImage17 from './images/malaga_photo_2024-12-22_10-50-27.jpg';
import malagaImage18 from './images/malaga_photo_2024-12-22_10-50-29.jpg';
import malagaImage19 from './images/malaga_photo_2024-12-22_10-50-30.jpg';
import malagaImage20 from './images/malaga_photo_2024-12-22_10-50-31.jpg';
import malagaImage21 from './images/malaga_photo_2024-12-22_10-50-33.jpg';
import cadizImage1 from './images/cadiz_photo_2024-12-22_11-20-15.jpg';
import cadizImage2 from './images/cadiz_photo_2024-12-22_11-20-16.jpg';
import cadizImage3 from './images/cadiz_photo_2024-12-22_11-20-20.jpg';
import cadizImage4 from './images/cadiz_photo_2024-12-22_11-20-22.jpg';
import cadizImage5 from './images/cadiz_photo_2024-12-22_11-20-25.jpg';
import cadizImage6 from './images/cadiz_photo_2024-12-22_11-20-30.jpg';
import cadizImage7 from './images/cadiz_photo_2024-12-22_11-20-32.jpg';
import cadizImage8 from './images/cadiz_photo_2024-12-22_11-20-33.jpg';
import cadizImage9 from './images/cadiz_photo_2024-12-22_11-20-34.jpg';
import cadizImage10 from './images/cadiz_photo_2024-12-22_11-20-35.jpg';
import cadizImage11 from './images/cadiz_photo_2024-12-22_11-20-36.jpg';
import cadizImage12 from './images/cadiz_photo_2024-12-22_11-20-37.jpg';
import cadizImage13 from './images/cadiz_photo_2024-12-22_11-20-38.jpg';
import cadizImage14 from './images/cadiz_photo_2024-12-22_11-20-39.jpg';
import cadizImage15 from './images/cadiz_photo_2024-12-22_11-20-40.jpg';
import cadizImage16 from './images/cadiz_photo_2024-12-22_11-20-41.jpg';
import cadizImage17 from './images/cadiz_photo_2024-12-22_11-26-41.jpg';
import cadizImage18 from './images/cadiz_photo_2024-12-22_11-26-43.jpg';
import cadizImage19 from './images/cadiz_photo_2024-12-22_11-26-47.jpg';
import cadizImage20 from './images/cadiz_photo_2024-12-22_11-26-51.jpg';
import cadizImage21 from './images/cadiz_photo_2024-12-22_11-26-52.jpg';
import cadizImage22 from './images/cadiz_photo_2024-12-22_11-26-53.jpg';
import cadizImage23 from './images/cadiz_photo_2024-12-22_11-20-31.jpg';
import ImagesCarousel from './components/ImagesCarousel/ImagesCarousel';
import HelloMessage from './components/HelloMessage/HelloMessage';
import Form1 from './components/Form1/Form1';
import Form2 from './components/Form2/Form2';
import Form3 from './components/Form3/Form3';
import Form4 from './components/Form4/Form4';
import Form5 from './components/Form5/Form5';
import Form6 from './components/Form6/Form6';
import Form7 from './components/Form7/Form7';
import Form8 from './components/Form8/Form8';
import CounterClass from './components/CounterClass/CounterClass';
import Calculator from './components/Calculator/Calculator';
import TimerComponent from './components/TimerComponent/TimerComponent';
import TimerComponent1 from './components/TimerComponent1/TimerComponent1';
import Counter1 from './components/Counter1/Counter1';
import ToDoList from './components/ToDoList/ToDoList';
import Book from './components/Book/Book';
import BooksList from './components/BooksList/BooksList';
import imageBook1 from './images/books-1-Screenshot-2024-12-28-234628-Richter.jpg'
import imageBook2 from './images/books-2-Screenshot-2024-12-28-234531-Troelsen.jpg'
import imageBook3 from './images/books-3-Screenshot-2024-12-28-234802-Martin-Clean.jpg'
import imageBook4 from './images/books-4-Screenshot-2024-12-28-234413-Design-Patterns.jpg'
import imageBook5 from './images/books-5-Screenshot-2024-12-29-000405-Швец-Паттерны.jpg'
import imageBook6 from './images/books-6-Screenshot-2024-12-29-000439-Тепляков-Паттерны.jpg'
import imageBook7 from './images/books-7-Screenshot-2024-12-28-234735-Martin.jpg'
import imageBook8 from './images/books-8-Screenshot-2024-12-28-200023-How-to-analize.jpg'
import imageBook9 from './images/books-9-Screenshot-2024-12-28-204649-Dark-Psychology.jpg'

import { Col, Container, Row } from 'react-bootstrap';
import BooksRequestForm from './components/BooksRequestForm/BooksRequestForm';
import BookShop from './components/BookShop/BookShop';


function App() {
  const odessaCityInfo = {
    mainImage: odessaImage1,
    city: 'Odessa',
    country: 'Ukraine',
    description: 'A beautiful port city on the Black Sea, known for its beaches and historic architecture. Known as the "Pearl of the Black Sea."',
    population: 1025000,
    foundedYear: '1794',
    images: [      
      { image: odessaImage2, caption: 'Photo 2' },
      { image: odessaImage3, caption: 'Photo 3' },
      { image: odessaImage4, caption: 'Photo 4' },
      { image: odessaImage5, caption: 'Photo 5' },
      { image: odessaImage6, caption: 'Photo 6' },
      { image: odessaImage7, caption: 'Photo 7' },
      { image: odessaImage8, caption: 'Photo 8' },
      { image: odessaImage9, caption: 'Photo 9' },
      { image: odessaImage10, caption: 'Photo 10' },
      { image: odessaImage11, caption: 'Photo 11' },
      { image: odessaImage12, caption: 'Photo 12' },
      { image: odessaImage13, caption: 'Photo 13' },
      { image: odessaImage14, caption: 'Photo 14' },
    ]
  }

  const malagaCityInfo = {
    mainImage: malagaImage1,
    city: 'Malaga',
    country: 'Spain',
    description: 'A dynamic port city on the Costa del Sol in Spain, celebrated for its sunny weather, cultural landmarks, and artistic heritage. Birthplace of Picasso and gateway to Andalusian charm.',population: 578400,
    foundedYear: '770 BC',
    images: [      
      { image: malagaImage2, caption: 'Photo 2' },
      { image: malagaImage3, caption: 'Photo 3' },
      { image: malagaImage4, caption: 'Photo 4' },
      { image: malagaImage5, caption: 'Photo 5' },
      { image: malagaImage6, caption: 'Photo 6' },
      { image: malagaImage7, caption: 'Photo 7' },
      { image: malagaImage8, caption: 'Photo 8' },
      { image: malagaImage9, caption: 'Photo 9' },
      { image: malagaImage10, caption: 'Photo 10' },
      { image: malagaImage11, caption: 'Photo 11' },
      { image: malagaImage12, caption: 'Photo 12' },
      { image: malagaImage13, caption: 'Photo 13' },
      { image: malagaImage14, caption: 'Photo 14' },
      { image: malagaImage15, caption: 'Photo 15' },
      { image: malagaImage16, caption: 'Photo 16' },
      { image: malagaImage17, caption: 'Photo 17' },
      { image: malagaImage18, caption: 'Photo 18' },
      { image: malagaImage19, caption: 'Photo 19' },
      { image: malagaImage20, caption: 'Photo 20' },
      { image: malagaImage21, caption: 'Photo 21' },
    ]
  }

  const cadizCityInfo = {
    mainImage: cadizImage1,
    city: 'Cadiz',
    country: 'Spain',
    description: 'A historic port city in southwestern Spain, known for its ancient history, beautiful beaches, and vibrant culture. It is considered one of the oldest continuously inhabited cities in Western Europe.',
    population: 114200,
    foundedYear: '1104 BC',
    images: [      
      { image: cadizImage2, caption: 'Photo 2' },
      { image: cadizImage3, caption: 'Photo 3' },
      { image: cadizImage4, caption: 'Photo 4' },
      { image: cadizImage5, caption: 'Photo 5' },
      { image: cadizImage6, caption: 'Photo 6' },
      { image: cadizImage7, caption: 'Photo 7' },
      { image: cadizImage8, caption: 'Photo 8' },
      { image: cadizImage9, caption: 'Photo 9' },
      { image: cadizImage10, caption: 'Photo 10' },
      { image: cadizImage11, caption: 'Photo 11' },
      { image: cadizImage12, caption: 'Photo 12' },
      { image: cadizImage13, caption: 'Photo 13' },
      { image: cadizImage14, caption: 'Photo 14' },
      { image: cadizImage15, caption: 'Photo 15' },
      { image: cadizImage16, caption: 'Photo 16' },
      { image: cadizImage17, caption: 'Photo 17' },
      { image: cadizImage18, caption: 'Photo 18' },
      { image: cadizImage19, caption: 'Photo 19' },
      { image: cadizImage20, caption: 'Photo 20' },
      { image: cadizImage21, caption: 'Photo 21' },
      { image: cadizImage22, caption: 'Photo 22' },
      { image: cadizImage23, caption: 'Photo 23' },      
    ]
  }

  const books = [
    {
      image: imageBook1,
      title: 'CLR via C#',
      description: 'Программирование на платформе Microsoft .NET Framework 4.5 на языке C#',
      author: 'Джеффри Рихтер',
      price: 77.99,
    },
    {
      image: imageBook2,
      title: 'Язык программирования C# 7 и платформы .NET и .NET Core',
      description: 'Это всеобъемлющий источник сведений о языке программирования C# и о связанной с ним структуре.',
      author: 'Эндрю Троелсен',
      price: 4.99,
    },
    {
      image: imageBook3,
      title: 'Чистая архитектура',
      description: 'Искусство разработки программного обеспечения',
      author: 'Роберт Мартин',
      price: 49.99,
    },
    {
      image: imageBook4,
      title: 'Design Patterns via C#',
      description: 'Приёмы объекто-ориентированного проектирования',
      author: 'Александр Шевчук',
      price: 30.99,
    },
    {
      image: imageBook5,
      title: 'Погружение в паттерны проектирования',
      description: 'В мире сущестует множество других паттернов. Надеюсь, эта книга станет вашей стартовой точкой к постижению паттернов и развитию сверхспособностей в проектировании программ.',
      author: 'Александр Швец',
      price: 16.99,
    },
    {
      image: imageBook6,
      title: 'Паттерны проектирования на платформе .NET',
      description: 'Паттерны проектирования остаются важным инструментом в арсенале разработчика, поскольку они опираются на фундаментальные принципы проектирования.',
      author: 'Сергей Тепляков',
      price: 8.99,
    },
    {
      image: imageBook7,
      title: 'Принципы, паттерны и методики гибкой разработки на языке C#',
      description: 'Цель данной книги - собрать воедино все методиуки гибкой разработки и показать их работоспособность',
      author: 'Роберт Мартин, Микаб Мартин',
      price: 19.99,
    },
    {
      image: imageBook8,
      title: 'How To Analyze People',
      description: 'Read People Like a Book with Dark Psychology Secrets, NLP Techniques, Body Language Analysis, Enhanced Emotional Intelligence, and Expert-Level Manipulation Skills',
      author: 'Eric Holt',
      price: 9.99,
    },
    {
      image: imageBook9,
      title: 'Dark Psychology',
      description: 'Discover How To Analyze People and Master Human Manipulation Using Body Language Secrets, Covert NLP, Mind Control, Subliminal Persuasion, Hypnosis, and Speed Reading Techniques.',
      author: 'Vincent McDaniel',
      price: 8.99,
    },
    
    
  ];

  return (
    <div className="App">
      <header className="App-header">
        <BookShop books={books}></BookShop>

        {/* <Container className='w-100'>
          <Row>
            <Col lg={9}>
              <BooksList books={books}></BooksList>
              
            </Col>
            <Col lg={3}>
              <BooksRequestForm></BooksRequestForm>
            </Col>
          </Row>
        </Container> */}
        
        {/* <Book
          image={imageBook1}
          title="How To Analyze People"
          description="Read People Like a Book with Dark Psychology Secrets, NLP Techniques, Body Language Analysis, Enhanced Emotional Intelligence, and Expert-Level Manipulation Skills"
          author="Eric Holt"
          price={4.99}
        ></Book>         */}
        
        {/* <ToDoList></ToDoList> */}
        {/* <Counter1></Counter1> */}
        {/* <TimerComponent1></TimerComponent1> */}
        {/* <TimerComponent></TimerComponent> */}
        {/* <Calculator></Calculator> */}
        {/* <CounterClass></CounterClass> */}
        {/* <Form8></Form8> */}
        {/* <Form7></Form7> */}
        {/* <Form6></Form6> */}
        {/* <Form5></Form5> */}
        {/* <Form4></Form4> */}
        {/* <Form3></Form3> */}
        {/* <Form2></Form2> */}
        {/* <Form1></Form1> */}

        {/* Test of commit from another device       */}
        {/* <div className='city-containers'>
        <ImagesCarousel cityInfo={odessaCityInfo}></ImagesCarousel>
        <ImagesCarousel cityInfo={malagaCityInfo}></ImagesCarousel>
        <ImagesCarousel cityInfo={cadizCityInfo}></ImagesCarousel>
        </div>         */}

        {/* <Slideshow></Slideshow> */}

        {/* <Counter></Counter> */}

        {/* <div className='avatar-main-body'>
        <Avatar photo={userPhoto1} name="Ivan" position="Developer" twitter="https://twitter.com/ivan_dev" facebook="https://facebook.com/ivan_dev"></Avatar>
        <Avatar photo={userPhoto2} name="Maria" position="Designer" twitter="https://twitter.com/maria_design" facebook="https://facebook.com/maria_design"></Avatar>
        </div> */}

      </header>
    </div>
  );
}

export default App;
