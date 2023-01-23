import './App.css';
import Score from './Score';
import Clock from './Clock';

function App() {
  return (
    <div className="App">
      <div>
        <Score team={'home'} />
      </div>
      <div>
        <Clock />
      </div>

      <div>
        <Score team={'guest'} />
      </div>
      
    </div>
  );
}

export default App;
