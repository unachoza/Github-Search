import React from 'react';
// import { RepoItem } from './ResultsList';
import 'Components/Results/ResultSingle/ResultSingle.styles.css';

// const ResultSingle = ({
//   everything: { name, owner, html_url, description, stargazers_count, license, fork },
// }: {
//   everything: RepoItem;
// }): JSX.Element => {
//   const forkCheck = (fork: boolean) =>
//     fork && (
//       <div className="blue-repo-text" id="fork-button">
//         forked
//       </div>
//     );

type RepositoryDetails = {
  name: string;
  owner: { login: string };
  html_url: string;
  description: string;
  stargazers_count: number;
  license: { name: string };
  fork: boolean;
};
const ResultSingle = ({ ...item }) => {
  return (
    <div className="result-container">
      <div className="results-sub-container" id="text">
        <a href={item.html_url} target="_blank" className="blue-repo-text">
          {item.name} REPO AUTHOR: {item.owner.login}
          {/* <span>{forkCheck(item.fork)}</span> */}
        </a>
        <p className="grey-repo-description-text">{item.description}</p>
      </div>
      <div className="results-sub-container" id="star">
        <h6 className="text-title">Stars:</h6>
        <p className="text-answer">{item.stargazers_count}</p>
      </div>
      <div className="results-sub-container" id="license">
        <h6 className="text-title">License:</h6>
        <p className="text-answer">{item.license.name}</p>
      </div>
    </div>
  );
};
export default ResultSingle;
