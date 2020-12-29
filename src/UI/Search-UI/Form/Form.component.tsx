import React, { Component, MouseEventHandler } from 'react';
import { inputParams } from 'Types/Types';
import { FormInput } from 'UI/Search-UI/FormInput/FormInput.component';
import 'UI/Search-UI/Form/Form.styles.css';

type InputProps = {
  name?: string | MouseEventHandler;
  value: string;
};

export interface FormProps {
  label: string;
  className?: string | boolean | undefined;
  typeOfInput: string;
  placeholder?: string;
  inputValue: string;
  error?: boolean;
  inputFunction?: (event: React.FocusEvent<HTMLInputElement>) => void | MouseEventHandler<any>;
}
class Form extends Component<FormProps> {
  constructor(props: any) {
    super(props);
    this.state = {
      typeOfInput: null,
      placeholder: null,
      value: null,
      label: null,
      className: null,
      error: false,
      inputValue: null,
      inputFunction: null,
    };
  }
  render() {
    const handleChange = (fieldName: keyof InputProps) => (
      e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | any>
    ) => {
      this.setState({ ...this.state, [fieldName]: e.currentTarget.value });
    };
    return (
      <>
        <form className="containerSearch">
          <div id="left-col" className="column">
            <FormInput
              label="text"
              className="input"
              typeOfInput="input"
              placeholder="Text"
              inputValue="hold"
              inputFunction={(input) => (e: any) => handleChange(e)}
            />
            <FormInput
              label="text"
              className="input"
              typeOfInput="input"
              placeholder="Text"
              inputValue="hold"
              inputFunction={(input) => (e: any) => handleChange(e)}
            />
          </div>
          <div id="right-col" className="column">
            <FormInput
              label="text"
              className="input"
              typeOfInput="input"
              placeholder="Text"
              inputValue="hold"
              inputFunction={(input) => (e: any) => handleChange(e)}
            />
            <FormInput
              label="text"
              className="input"
              typeOfInput="input"
              placeholder="Text"
              inputValue="hold"
              inputFunction={(input) => (e: any) => handleChange(e)}
            />
          </div>
        </form>
        <input id="submit" type="submit" />
      </>
    );
  }
}

export default Form;
