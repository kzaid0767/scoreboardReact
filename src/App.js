import './App.css';
import Score from './Score';

function App() {
  return (
    <div className="App">
      <Score team={'home'} />
      <Score team={'guest'} />
    </div>
  );
}

export default App;
