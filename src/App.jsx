import React from 'react';
import Navbar from './Components/Navbar';
import Home from './Components/Home';
import About from './Components/About';

const App = () => {
  return (
    <div>
      <Navbar></Navbar>

      <main>
        <div id='home'>
          <Home></Home>
        </div>

        <div>
          <About></About>
        </div>
      </main>
    </div>
  );
};

export default App;