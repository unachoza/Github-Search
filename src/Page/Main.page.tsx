import React, { Component } from 'react';
import 'Components/App/App.css';
import Form from 'UI/Search-UI/Form/Form.component';
import ResultList from 'UI/Results-UI/ResultList/ResultList.component';
import { RepoItem, inputParams } from 'Types/Types';

export interface State extends inputParams {
  isLoaded: boolean;
  data?: RepoItem[];
  name: string;
  owner: string;
  html_url: string;
  description: string;
  invalidInput: boolean;
  licenseList: [];
  icon: string;
}

class MainPage extends Component {
  state: any = {};
  render() {
    return (
      <>
        <h1 className="title">Github Repository Search</h1>
        <div className="App search-container">
          <Form {...this.state} />
          <div>
            <hr className="division-line" />
            <p className="results-below-text default-text">
              Please enter query and click SEARCH button above, results appear here
            </p>
          </div>
          <ResultList />
        </div>
      </>
    );
  }
}
export default MainPage;
