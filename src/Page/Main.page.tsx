import React, { Component, useState } from 'react';
import 'Components/App/App.css';
import Form from 'UI/Search-UI/Form/Form.component';
import RepositoryList from 'UI/Results-UI/RepositoryList/RepositoryList.component';
import { Mutable } from 'type-fest';

interface UserInput {
  text: string;
  license: string;
  stars: string;
  forked: string;
  inputFunction?: (event: React.FocusEvent<HTMLInputElement>) => void;
}
type InputProps = {
  name: string;
  value: string;
  // MouseEventHandler
};
class MainPage extends Component<{}, UserInput> {
  state = {
    text: '',
    license: '',
    stars: '',
    forked: '',
  };
  render() {
    // const handleChange = (e) => {
    //   const { name, vale } = e.target;
    //   this.setState({[name]: value})
    // }
    const inputFunction = (e: React.ChangeEvent<HTMLInputElement>) => {
      const { name, value } = e.target;
      // @ts-ignore
      this.setState({ [name]: value });
    };
    return (
      <>
        <h1 className="title">Github Repository Search</h1>
        <div className="App search-container">
          <Form inputFunction={inputFunction} {...this.state} />
          <div>
            <hr className="division-line" />
            <p className="results-below-text default-text">
              Please enter query and click SEARCH button above, results appear here
            </p>
          </div>
          <RepositoryList />
        </div>
      </>
    );
  }
}
export default MainPage;

//// For extensible input function ///  setSTATE
// var o:{} = {}
// should be equivalent to

// var o:{[key:string]:any} = {}
