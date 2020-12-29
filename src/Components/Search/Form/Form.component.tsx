import React from 'react';
import { inputParams } from 'Types/Types';
import FormInput from 'Components/Search/FormInput/FormInput.component';
import 'Components/Search/Form/Form.styles.css';

const Form = () => {
  return (
    <>
      <form className="containerSearch">
        <div id="left-col" className="column">
          <FormInput />
          <FormInput />
        </div>
        <div id="right-col" className="column">
          <FormInput />
          <FormInput />
        </div>
      </form>
      <input id="submit" type="submit" />
    </>
  );
};

export default Form;

// handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
//   e.preventDefault();
//   debugger;
//   const { query, license, fork, stars, loading } = this.state;

//   this.setState({ loading: true });
//   fetchGithub(query, license, fork, stars, loading)
//     .then((res) => res.json())
//     .then((data) => {
//       this.setState({
//         isResponseLoaded: true,
//         data: data.items,
//         loading: false,
//       });
//     });

//   this.showResults();
// };
