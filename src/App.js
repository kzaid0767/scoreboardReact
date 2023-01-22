import './App.css';
import Score from './Score';

function App() {
  return (
    <div className="App">
      <div>
        <Score team={'home'} />
      </div>
      <div>
        <Score team={'guest'} />
      </div>
      
    </div>
  );
}

export default App;
