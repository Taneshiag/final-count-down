// import logo from './logo.svg';
import './App.css';
import PomTimer from './components/PomTimer';
import dayjs from './components/utils/CountDownTimerUtils';
import CountDownTimerUtils from './components/utils/CountDownTimerUtils'
// import DiceImage1 from './images/Dice1.png';
// import DiceImage2 from './images/Dice2.png';
// import DiceImage3 from './images/Dice3.png';
// import DiceImage4 from './images/Dice4.png';
// import DiceImage5 from './images/Dice5.png';
// import DiceImage6 from './images/Dice6.png';

function App() {
  
  return (
    <div className="App">
      
            <center>
        <h1>Bet On Yourself</h1>
        <div className='container'>
         <img className='square'></img>
         </div>
         <button type="button" class="btn btn-outline-secondary">Lucky Me</button>
      </center>
     <PomTimer  
     countdownTimestampMs={1643673600000}/>
    <div>
      <center>
        <h1>Bet On Yourself</h1>
        <div className='container'>
        <img className='square'></img>
        </div>
        <button type="button" class="btn btn-outline-secondary">Lucky Me</button>
      </center> 
    </div>
    </div>
  );
}

// const new quote = ()=> {
//   axios.get('')
// }

export default App;
