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
const ResultSingle = () => {
  return (
    <div className="result-container">
      <div className="results-sub-container" id="text">
        {/* <a href={html_url} target="_blank" className="blue-repo-text">
          {name} REPO AUTHOR: {owner.login}
          <span>{forkCheck(fork)}</span>
        </a> */}
        {/* <p className="grey-repo-description-text">{description}</p> */}
      </div>
      <div className="results-sub-container" id="star">
        <h6 className="text-title">Stars:</h6>
        {/* <p className="text-answer">{stargazers_count}</p> */}
      </div>
      <div className="results-sub-container" id="license">
        <h6 className="text-title">License:</h6>
        {/* <p className="text-answer">{license.name}</p> */}
      </div>
    </div>
  );
};
export default ResultSingle;
