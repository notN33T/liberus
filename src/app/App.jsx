import { BrowserRouter as Router } from 'react-router-dom';
import UseRouter from './router/router';

function App() {
  return (
    <Router>
      <div className="App">
        <UseRouter/>
      </div>
    </Router>
  );
}

export default App;
