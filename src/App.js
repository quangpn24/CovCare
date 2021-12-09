import { Layout } from 'antd';
// import AppHome from 'pages/Home';
import AppFooter from 'components/layout/Footer';
import AppHeader from 'components/layout/Header';
import Register from 'pages/Register';
import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
// import { AppHome, DoctorPage, DoctorDetailPage } from './pages/index';
import AppHome from 'pages/Home';
import DoctorPage from 'pages/Doctor';
import DoctorDetailPage from 'pages/DoctorDetail';
import './App.less';

const { Header, Footer, Content } = Layout;

const routes = [
  {
    path: '/',
    page: <AppHome />,
  },
  {
    path: '/register',
    page: <Register />,
  },
  {
    path: '/doctors',
    page: <DoctorPage />,
  },
  {
    path: '/doctor-detail',
    page: <DoctorDetailPage />,
  },
];
function App() {
  return (
    <Router>
      <Layout className="mainLayout">
        <Header>
          <AppHeader />
        </Header>
        <Content className="app__content">
          <Switch>
            {routes.map(route => (
              <Route exact path={route.path}>
                {route.page}
              </Route>
            ))}
          </Switch>
        </Content>
        <Footer>
          <AppFooter />
        </Footer>
      </Layout>
    </Router>
  );
}

export default App;
