import React from 'react';
import "./App.css";
import { Routes, Route} from 'react-router-dom';
import { Home } from './pages/Home';
import Roster from './pages/Roster';
import Media from './pages/Media';
import Join from './pages/Join';
import NoPage from './pages/NoPage';

//object array

function App() {
  return ( 
    <div className = 'App'>    
      <Routes>
          <Route index element={ <Home/> } />
          <Route path = "/home" element = { <Home/> }/>
          <Route path = "/roster" element = {<Roster />} />
          <Route path = "/media" element = {<Media />} />
          <Route path = "/join" element = {<Join />} />
          <Route path = "*" element = {<NoPage />} />
        </Routes>
    </div>
  );
}

export default App