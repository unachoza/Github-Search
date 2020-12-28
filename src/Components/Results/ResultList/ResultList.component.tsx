import React from 'react';
import ResultSingle from 'Components/Results/ResultSingle/ResultSingle.component';
// import "./Results.css";
// import "../../App.css";

// export interface ResultsProps {
//   query: string;
//   data?: RepoItem[] | any;

// }
// export interface RepoItem {
//   name: string;
//   owner: { login: string };
//   html_url: string;
//   description: string;
//   stargazers_count: number;
//   license: { name: string };
//   fork: boolean;

// }
const ResultsList = () => (
  // const ResultsList = (props: ResultsProps): JSX.Element => (
  <div>
    <ResultSingle />
    <ResultSingle />
    <ResultSingle />
    {/* {props.data.map((item: RepoItem, i: number) => (
      // if I don't use "any" for data in interface ResultsProps, typescript underlines props.data and says "object is possibly undefined"
      
      <ResultSingle key={i} everything={item} />
    ))} */}
  </div>
);

export default ResultsList;
