import React, { Component } from 'react';
import 'Components/App/App.css';
import Form from 'UI/Search-UI/Form/Form.component';
import RepositoryList from 'UI/Results-UI/RepositoryList/RepositoryList.component';
import { fetchGithub } from 'API/apiFetch';

interface UserInput {
  text: string;
  license: string;
  stars: string;
  forked: boolean;
  loading: boolean;
  repositories?: any[];
  inputFunction?: (e: React.FormEvent<HTMLFormElement>) => void;
  handleSubmit?: (e: React.FormEvent<HTMLInputElement>) => void;
}

class MainPage extends Component<{}, UserInput> {
  state = {
    text: '',
    license: '',
    stars: '',
    forked: false,
    loading: false,
    repositories: [],
  };
  render() {
    const inputFunction = (e: React.ChangeEvent<HTMLInputElement>) => {
      const { name, value } = e.target;
      // @ts-ignore
      this.setState({ [name]: value });
    };
    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
      console.log('cliced');
      e.preventDefault();
      const { text, license, forked, stars, loading } = this.state;
      this.setState({ loading: true });
      fetchGithub(text, license, forked, stars, loading)
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
          this.setState({
            repositories: data.items,
            loading: false,
          });
          //handling error here .catch(err => console.log(err))
        });

      // this.showResults();
    };
    return (
      <>
        <h1 className="title">Github Repository Search</h1>
        <div className="App search-container">
          <Form inputFunction={inputFunction} handleSubmit={handleSubmit} {...this.state} />
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
