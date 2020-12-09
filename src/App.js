import React from 'react';
import { NavLink, Route, Switch } from 'react-router-dom'
import {
  CSSTransition,
  TransitionGroup,
} from 'react-transition-group';
import './App.css'
import Home from './Home'
import Login from './login'


class App extends React.Component {

  render() {
    return (
      <div calssName = "App">
        <div className="nav">
          <NavLink exact to="/" activeClassName="active">Home</NavLink>
          <NavLink exact to="/login" activeClassName="active">Login</NavLink>
        </div>
        <Route render={({location}) => (
        <TransitionGroup>
          <CSSTransition

                key={location.key}  
                timeout={450}
                classNames="fade"
          >
            <Switch location={location}>
              <Route exact path="/" component={Home} />
              <Route path="/login" component={Login} />

            </Switch>

          </CSSTransition>
        </TransitionGroup>
        )} />
      </div>
    )
  }
}

export default App