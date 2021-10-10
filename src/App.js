import React from 'react';
import './App.less';
import { Layout } from 'antd';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import AppHome from 'pages/Home';
import AppFooter from 'components/layout/Footer';
import AppHeader from 'components/layout/Header';

const { Header, Footer, Content } = Layout;

function App() {
  return (
    <Router>
      <Layout className="mainLayout">
        <Header>
          <AppHeader />
        </Header>
        <Content>
          <Switch>
            <Route exact path="/">
              <AppHome />
            </Route>
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
