import React from 'react';
import Navbar from './Components/Navbar';
import Home from './Components/Home';

const App = () => {
  return (
    <div>
      <Navbar></Navbar>

      <main>
        <div id='home'>
          <Home></Home>
        </div>
      </main>
    </div>
  );
};

export default App;