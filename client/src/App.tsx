import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import { Button, Grid } from 'semantic-ui-react'
import Home from './components/Home';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Profile from './components/profile/Profile';
import LeftNav from './components/leftNav/LeftNav';
import MessageExampleIcon from './components/shared/Messsage';

function App() {

  return (
    <div className="App">
      <MessageExampleIcon />
      <BrowserRouter >
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/profile" element={<Profile />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
