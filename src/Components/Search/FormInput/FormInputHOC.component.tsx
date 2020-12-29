import React, { Component } from 'react';
import Form from '../Form/Form.component';
import FormInput from 'Components/Search/FormInput/FormInput.component';

type InputProps = {
  name: string;
  value: string;
};

export interface FormState {
  typeOfInput: string;
  handleFunction: React.FormEvent<>;
}
const withData = (FormInput: any) => {
  class WithData extends Component<FormState> {
    constructor(props: any) {
      super(props);
      this.state = {
        typeOfInput: null,
        placeholder: null,
        value: null,
        handleFunction: null,
      };
    }

    render() {
      const handleChange = (fieldName: keyof InputProps) => (
        e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
      ) => {
        this.setState({ ...this.state, [fieldName]: e.currentTarget.value });
      };
      return (
        <>
          <h1>LOADING</h1>
          <FormInput handleChange={handleChange} {...this.state} />
        </>
      );
    }
  }

  return WithData;
};

export default withData;

// handleFormInput = (e: React.FormEvent<HTMLInputElement>): void => {
//   const {name : string, value :string }:  = e.target
//   this.setState({ [name]: value});
// };
