import React from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer'
import Routes from './Routes/Routes'

function App() {
  return (
    <React.Fragment>
      <Navbar />
        <Routes />
      <Footer />
    </React.Fragment>
  );
}

export default App;
