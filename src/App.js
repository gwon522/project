
import { Footer } from 'component/Footer';
import { Header } from 'component/Header';
import { Route } from 'react-router-dom';
import { Layout } from 'styles/CommonVariables';
import { Home, Login, Signup } from './pages/index';

function App() {
  return (
      <Layout>
        <Header />
        <mainContainer>
          <Route exact path="/" component={Home} />
          <Route path="/Login" component={Login} />
          <Route path="/Signup" component={Signup} />
        </mainContainer>
        <Footer />
      </Layout>
  );
}

export default App;
