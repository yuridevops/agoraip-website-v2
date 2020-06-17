import React from 'react';
import Navbar from './Nav/Navbar';
import styled from 'styled-components';
import Home from '../pages/Home/Home';
import { HashRouter, Route, Switch } from 'react-router-dom'
import Info from '../pages/Info';
import Plans from '../pages/Plans'
import Footer from '../components/Footer'

const Main = styled.ul`
  margin-top: 72px;
  color: #444;
`;

function App() {
  return (
    <div className="App">
      <HashRouter>
        <Navbar />
        <Main>
          <Switch>
            <Route exact path="/"component={Home} />
            <Route path="/info"component={Info} />
            <Route path="/plans"component={Plans} />
            <Route exact path="**"component={Home} />
          </Switch>
        </Main>
        <Footer/>
      </HashRouter>
    </div>
  );
}

export default App;
