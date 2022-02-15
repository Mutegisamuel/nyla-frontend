import logo from './logo.svg';
import './App.css';
import React from 'react'
import {BrowserRouter as Router, Route, Routes, Link} from 'react-router-dom';
import Header from './Components/header/header';
import Home from './Components/home/Home';
import Singleview from './Components/singleview/singleview';
import Viewall from './Components/Viewall/viewall';

function App() {
  return (
    <Router>
      <div className="App">
        <Header></Header>
        <Routes>
        <Route exact path='/'element={<Home/>}/>
        <Route path='/singleview'element={<Singleview/>}/>
        <Route path='/viewall'element={<Viewall/>}/>
               
        </Routes>
      </div>
    </Router>
  );
}

export default App;
