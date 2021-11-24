import { Route, BrowserRouter, Switch } from 'react-router-dom';
import { Home, Login, Signup } from './pages/index';

function App() {
    return (
        <>
            <Route exact path="/" component={Home} />
            <Route path="/Login" component={Login} />
            <Route path="/Signup" component={Signup} />
        </>
    );
}

export default App;
