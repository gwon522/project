
import { Link, Route } from 'react-router-dom';
import './App.css';
import Home from './component/Home';

function App() {
  return (
    <>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/hi">Hi</Link>
        </li>
      </ul>
      <Route path="/" exact component={Home} />
    </>
  );
}

export default App;
