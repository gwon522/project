
import { Header, Footer } from 'component/index'
import { Route, Switch } from 'react-router-dom';
import { Layout, MainContainer } from 'styles/Global.style';
import { Home, Login, NotFound, Signup } from './pages/index';
import { useState } from 'react';

const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const loginHandler = (id, passward) => {
    console.log('로그인 버튼 눌러서 메서드 실행됨')
    setIsLoggedIn(true);
  }

  const logoutHandler = () => {
    setIsLoggedIn(false);
  }

  return (
    <Layout>
      <Header onLogout={logoutHandler} />
      {/* <MainContainer>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/Login" component={Login} />
          <Route path="/Signup" component={Signup} />
          <Route path="*" component={NotFound}
            status={404} />
        </Switch>
      </MainContainer>
      <Footer /> */}
    </Layout>
  );
}

export default App;
