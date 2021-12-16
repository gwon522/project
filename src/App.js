
import { Header, Footer } from 'component/index'
import { Route } from 'react-router-dom';
import { Layout, MainContainer } from 'styles/Global.style';
import { Home, Login, Signup } from './pages/index';

function App() {
  return (
    <>
      <Layout>
        <Header />
        <MainContainer>
          <Route exact path="/" component={Home} />
          <Route path="/Login" component={Login} />
          <Route path="/Signup" component={Signup} />
          <Route path="*"  //component={NotFound}
            status={404} />
        </MainContainer>
        <Footer />
        <Login visible={false} />
      </Layout>

    </>
  );
}

export default App;
