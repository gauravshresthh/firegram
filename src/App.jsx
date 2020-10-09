import React from 'react';
import logo from './img/gs-logo.png';
import Posts from './Pages/Posts';
import Home from './Pages/Home';
import { Switch, Route,Link } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <div className="app-nav">
       <div className='app-logo'> 
       <Link to='/' ><img src={logo} alt=""/>
       </Link>
       </div>
       <div className="app-links">
        <Link to='/' className='app-links_item'>Home</Link><Link to='/Posts' className='app-links_item'>Get Started</Link>
       </div>
      </div>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/posts" component={Posts} />
      </Switch>
     
    </div>
  );
}

export default App;
