import logo from './logo.svg';
import './App.css';
import Counter from './components/Counter/Counter';
import Avatar from './components/Avatar/Avatar';
import userPhoto1 from '../src/images/Screenshot_2024-11-15_161150.jpg';
import userPhoto2 from '../src/images/Screenshot_2024-11-15_162111.jpg';

function App() {
  return (
    <div className="App">
      <header className="App-header">

        {/* <Counter></Counter> */}

        <div className='avatar-main-body'>
        <Avatar photo={userPhoto1} name="Ivan" position="Developer" twitter="https://twitter.com/ivan_dev" facebook="https://facebook.com/ivan_dev"></Avatar>
        <Avatar photo={userPhoto2} name="Maria" position="Designer" twitter="https://twitter.com/maria_design" facebook="https://facebook.com/maria_design"></Avatar>
        </div>

      </header>
    </div>
  );
}

export default App;
