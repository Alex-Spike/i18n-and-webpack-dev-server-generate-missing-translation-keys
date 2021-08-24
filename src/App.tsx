import React from 'react';
import Header from './Header'
import Sidebar from './Sidebar'
import Content from './Content'

import './App.css';

function App() {
  return (
    <div className="App">
      <Header />
      <div className="wrapper">
        <Sidebar />
        <Content />
      </div>
    </div>
  );
}

export default App;
