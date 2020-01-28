import React from 'react';
import Landing from './landing'
import Contato from './contato'
import Tcc from './tcc'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

function App(){

  return(
    <Router>
      <Switch>
        <Route path="/" exact component={Landing} />
        <Route path="/contato" component={Contato} />
        <Route path="/tcc" component={Tcc} />
      </Switch>
    </Router>
  );
}

export default App;