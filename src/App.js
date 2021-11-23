
import { Link, Route, BrowserRouter as brr } from 'react-router-dom';
import Home from './component/Home/Home';
import Login from './component/Login/Login';

function App() {
  return (
    <>
      <brr basename={window.location.pathname || ''}>
        <switch>
          <Route exact path="/" component={Home} />
          <Route path="/Login" component={Login} />
        </switch>
      </brr>
    </>
  );
}

export default App;
