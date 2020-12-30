import React from 'react';
import RepositorySingle from 'UI/Results-UI/RepositorySingle/RepositorySingle.component';

const RepositoryList = () => (
  // const ResultsList = (props: ResultsProps): JSX.Element => (
  <div>
    <RepositorySingle />
    <RepositorySingle />
    <RepositorySingle />
    {/* {props.data.map((item: RepoItem, i: number) => (
      // if I don't use "any" for data in interface ResultsProps, typescript underlines props.data and says "object is possibly undefined"
      
      <RepositorySingle key={i} everything={item} />
    ))} */}
  </div>
);

export default RepositoryList;
