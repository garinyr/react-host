import React, { Component } from 'react';
import {BrowserRouter, Route, Link, Switch} from 'react-router-dom';


function home() {
  return <h2>Halaman Home</h2>
}

function ListView() {
  return(
    <div>
      <h2>Halaman User</h2>
      <li>
        <Link to='user/garin' >Garin</Link>
      </li>
      <li>
        <Link to='user/mega' >Mega</Link>
      </li>
    </div>
  ) 
}

function NoMatch() {
  return <h2>404, Halaman Tidak Ditemukan</h2>
}

function DetailView ({match}) {
  return <h2>Ini Halaman {match.params.name} </h2>
}

class App extends Component{
  render() {
    return (
      <BrowserRouter >
        <div>
        <nav>
          <li>
            <Link to='/' >Home</Link>
          </li>
          <li>
            <Link to='/users' >User</Link>
          </li>
        </nav>
        <main>
        <Switch>
          <Route path='/' component={home} exact/>
          <Route path='/users' component={ListView} exact/>
          <Route path='/user/:name' component={DetailView} exact/>
          <Route component={NoMatch}/>
        </Switch>
        </main>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
