
import { Link, Route } from 'react-router-dom';
import Home from './component/Home';
import Login from './component/Login';

function App() {
  return (
    <>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/Login">login</Link>
        </li>
      </ul>
      <Route path="/" exact component={Home} />
      <Route path="/Login" exact component={Login} />
    </>
  );
}

export default App;
