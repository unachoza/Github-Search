import React from 'react';
import './App.css';
import Header from 'Components/Banners/Header.component';
import Footer from 'Components/Banners/Footer.component';
import Form from 'Components/Search/Form/Form.component';

const App = () => {
  return (
    <>
      <Header />
      <div className="App search-container">Arianna will be creating a Github Search!</div>
      <Form />
      <Footer />
    </>
  );
};

export default App;
