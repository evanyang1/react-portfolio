import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom'
import Home from './components/views/Home'
import Portfolio from './components/views/Portfolio'
import About from './components/views/About'


function App() {
  return (
    <div>
      <BrowserRouter>
        <Route exact path="/" component={Home}/>
        <Route path="/portfolio" component={Portfolio} />
        <Route path="/about" component={About} />
      </BrowserRouter>
    </div>
  );
}

export default App;
