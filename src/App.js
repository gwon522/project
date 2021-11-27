
import Join from 'component/Join/Join';
import { Link, Route, BrowserRouter as Router } from 'react-router-dom';
import Home from './component/Home/Home';
import Login from './component/Login/Login';

function App() {
  return (
    <>
      <Router basename={window.location.pathname || ''}>
        <switch>
          <Route exact path="/" component={Home} />
          <Route path="/Login" component={Login} />
          <Route path="/Join" component={Join} />
        </switch>
      </Router>
    </>
  );
}

export default App;
