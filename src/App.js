import Login from './components/Login/Login';
import vector from "./vector.svg"
import './App.css';

function App() {

  return (       
    <div className="App">
      <Login />
      <div className='Elipse1'/>
      <div className='Elipse2'/>
      <img src={ vector } alt="vector" className='Vector'/> 
    </div>     
  );
}

export default App;
