import React from 'react';
import './App.css';
import Header from 'Components/Banners/Header.component';
import Footer from 'Components/Banners/Footer.component';
import Form from 'Components/Search/Form/Form.component';
import ResultList from 'Components/Results/ResultList/ResultList.component';

const App = () => {
  return (
    <>
      <Header />
      <h1 className="title">Github Repository Search</h1>
      <div className="App search-container">
        <Form />
        <div>
          <hr className="division-line" />
          <p className="results-below-text default-text">
            Please enter query and click SEARCH button above, results appear here
          </p>
        </div>
        <ResultList />
      </div>
      <Footer />
    </>
  );
};

export default App;
