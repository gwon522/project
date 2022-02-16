
import { Header, Footer } from 'component/index'
import { Route, Switch } from 'react-router-dom';
import { Layout, MainContainer } from 'styles/Global.style';
import { Board, Home, Login, NotFound, Signup, BoardDetail, Write } from './pages/index';
import { useSelector } from 'react-redux';
import { loginResultSelector } from 'utils/selector';


const App = () => {
  const isLogin = useSelector(loginResultSelector);
  console.log('login체크', isLogin);
  const ScrollToTop = () => {
    window.scrollTo(0, 0);
    return null;
  }

  return (
    <Layout>
      <Header />
      <MainContainer>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/login" component={Login} />
          <Route path="/signup" component={Signup} />
          <Route path="/write" component={Write} />
          <Route path="/topic/:id" component={Board} />
          <Route path="/post/:id" component={BoardDetail} />
          <Route path="*" component={NotFound} status={404} />
        </Switch>
        <Route component={ScrollToTop} />
      </MainContainer>
      <Footer />
    </Layout>
  );
}

export default App;
