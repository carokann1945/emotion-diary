import './App.css';
import { getEmotionById } from './util';

function App() {
  return (
    <div className="App">
      <h1>carokann template</h1>
      <img src={getEmotionById(3)} alt="emotion1" />
    </div>
  );
}

export default App;
