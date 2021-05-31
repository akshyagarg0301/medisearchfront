import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Redirect,
  Switch
} from 'react-router-dom';

import Login from './pages/login';
import Contact from './pages/contact';
import Home from './pages/index';
import Signup from './pages/signup';
import Navbar from './components/navbar';
import UserRegister from './pages/UserRegister'
import BusRegister from './pages/businessReg'
import Footer from './components/Footer';
function App(){
  return (
   <Router>
    <Navbar/>
    <main>
      <Switch>
        <Route path="/" exact>
          <Home/>
        </Route>
        <Route path="/contact" exact>
          <Contact/>
        </Route>
        <Route path="/signup" exact>
          <Signup/>
        </Route>
        <Route path="/login" exact>
          <Login/>
        </Route>
        <Route path="/UserRegister" exact>
          <UserRegister/>
          </Route>
          <Route path="/BusRegister" exact>
              <BusRegister/>
            </Route>
        <Redirect to="/" />
      </Switch>
    </main>
    <Footer/>
   </Router>
  );
}

export default App;
