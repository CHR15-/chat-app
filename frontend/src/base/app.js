import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";

import { Homepage } from '../components/homepage/home';
import { Chat } from '../components/chat/chat';
import { Navbar } from '../components/nav/navigation';
import { About } from '../components/about/about';

function App() {
  return (
      <Router>
        <Navbar/>
        <Route path="/" exact component={Homepage} />
        <Route path="/about/" component={About} />
        <Route path="/chat/" component={Chat} />
      </Router>
  );
}

export default App;
