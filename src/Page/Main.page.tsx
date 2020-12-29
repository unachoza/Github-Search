import React, { Component } from 'react';
import 'Components/App/App.css';
import Form from 'Components/Search/Form/Form.component';
import ResultList from 'Components/Results/ResultList/ResultList.component';
import { ContainerState, UserInputs, Repositories, RepositoryDetails } from 'Types/Types';

// export interface ContainerState extends userInputs {
//   isResponseLoaded: boolean;
//   Repositories?: RepositoryDetails[];
//   name: string;
//   owner: string;
//   html_url: string;
//   description: string;
//   invalidInput: boolean;
//   licenseList: string[];
//   icon: string;
// }
// export interface UserInputs {
//   query: '';
//   stars: '';
//   selectedLicense: '';
//   fork: false;
//   responseLoading: false;
// }

type fetchedProps = {
  isResponseLoaded: boolean;
  repositories: string[];
};
class MainPage extends Component<{}, fetchedProps> {
  state: fetchedProps = {
    isResponseLoaded: false,
    repositories: [],
  };

  render() {
    const showResults = (): JSX.Element => {
      const { isResponseLoaded, repositories } = this.state;

      return isResponseLoaded && !repositories.length ? (
        <section>
          <hr className="division-line" />
          <p className="results-below-text default-text">SEARCH Results</p>
          <div className="no-results-message">Your Search returned no results</div>
        </section>
      ) : (
        <section>
          <hr className="division-line" />
          <p className="results-below-text default-text">SEARCH Results</p>
          <ResultList {...this.state} />
        </section>
      );
    };
    return (
      <>
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
      </>
    );
  }
}
export default MainPage;
// licenseList: ['', 'MIT', 'ISC', 'apache-2.0', 'gpl'],

// handleQuery = (e: React.FormEvent<HTMLInputElement>): void => {
//   this.setState({ userInputs.query: e.currentTarget.value });
// };

// validateStars = (e: React.FormEvent<HTMLInputElement>): string => {
//   let input: string = e.currentTarget.value;
//   let regEx: RegExp = /^[><=]?[=]?\d+/;
//   console.log(input);
//   input.match(regEx) ? this.setState({ invalidInput: false }) : this.setState({ invalidInput: true });

//   return (input = input.replace(/ /g, '').replace(/-/, '..'));
// };

// handleStarsInput = (e: React.FormEvent<HTMLInputElement>) => this.setState({ stars: this.validateStars(e) });

// handleDropDown = (e: React.FormEvent<HTMLSelectElement>): void => {
//   console.log('dropped down clicked');
//   this.setState({ license: e.currentTarget.value });
// };
// toggleFork = (): void =>
//   this.setState((prevState) => {
//     fork: !prevState.fork;
//   });

// handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
//   e.preventDefault();
//   debugger;
//   const { query, license, fork, stars, loading } = this.state;

//   this.setState({ loading: true });
//   fetchGithub(query, license, fork, stars, loading)
//     .then((res) => res.json())
//     .then((repositories) => {
//       this.setState({
//         isResponseLoaded: true,
//         repositories: repositories.items,
//         loading: false,
//       });
//     });

//   this.showResults();
// };
