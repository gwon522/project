import { Route, BrowserRouter as Brr, Switch } from 'react-router-dom';
import Home from './component/Home';
import Login from './component/Login';

function App() {
    return (
        <>
            <Brr basename={window.location.pathname || ''}>
                <Switch>
                    <Route exact path="/" component={Home} />
                    <Route path="/Login" component={Login} />
                </Switch>
            </Brr>
        </>
    );
}

export default App;
