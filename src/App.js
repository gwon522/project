import { Footer } from 'component/Footer';
import { Nav } from 'component/Nav';
import { Route } from 'react-router-dom';
import { Home, Login, Signup } from './pages/index';

function App() {
    return (
        <>
            <Nav />
            <Route exact path="/" component={Home} />
            <Route path="/Login" component={Login} />
            <Route path="/Signup" component={Signup} />
            <Footer />
        </>
    );
}

export default App;
