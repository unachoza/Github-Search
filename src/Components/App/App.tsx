import React from 'react';
import 'Components/App/App.css';
import Header from 'Components/Banners/Header.component';
import Footer from 'Components/Banners/Footer.component';
import MainPage from 'Page/Main.page';

const App: React.FC = () => {
  return (
    <>
      <Header />
      <MainPage />
      <Footer />
    </>
  );
};

export default App;
