import React from 'react';

import Posts from './Pages/Posts';
import Home from './Pages/Home';
import { Switch, Route,Link } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Link to='/' className='app-logo'>IG</Link>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/posts" component={Posts} />
      </Switch>
     
    </div>
  );
}

export default App;
