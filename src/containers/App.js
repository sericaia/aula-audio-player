import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './App.css';
import SongListContainer from './SongListContainer';
import SongItemContainer from './SongItemContainer';

function App() {
  return (
    <div className="App">
      <Router>
        <Route exact path="/" component={SongListContainer} />
        <Route path="/songs/:id" component={SongItemContainer} />
      </Router>
    </div>
  );
}

export default App;
