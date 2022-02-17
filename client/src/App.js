
import { Header, Footer } from 'component/index'
import { Route, Switch } from 'react-router-dom';
import { Layout, MainContainer } from 'styles/Global.style';
import { Board, Home, Login, NotFound, Signup, BoardDetail, Write } from './pages/index';
import { useSelector } from 'react-redux';
import { loginResultSelector } from 'utils/selector';
import PublicRoute from 'lib/PublicRoute';
import PrivateRoute from 'lib/PrivateRoute';


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
          <PublicRoute component={Home} path="/" exact />
          <PublicRoute component={Login} path="/login" restricted />
          <PublicRoute component={Signup} path="/signup" restricted />
          <PublicRoute component={Board} path="/topic/:id" />
          <PublicRoute component={BoardDetail} path="post/:id" />
          <PrivateRoute component={Write} path="/write" />
          <PublicRoute component={NotFound} path="*" status={404} />
          {/* <Route path="/login" component={Login} /> */}
          {/* <Route path="/signup" component={Signup} />
          <Route path="/write" component={Write} /> */}
          {/* <Route path="/topic/:id" component={Board} />
          <Route path="/post/:id" component={BoardDetail} /> */}
          {/* <Route path="*" component={NotFound} status={404} /> */}
        </Switch>
        <Route component={ScrollToTop} />
      </MainContainer>
      <Footer />
    </Layout>
  );
}

export default App;
