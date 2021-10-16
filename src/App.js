import logo from './logo.svg';
import {connect} from 'react-redux';
import './App.css';
import Greetings from './components/Greetings';


function App({count}) {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a> 
      
      <Greetings/>
      </header>
    </div>
  );
}

export default connect((state)=>({...state.count}),{})(App);
