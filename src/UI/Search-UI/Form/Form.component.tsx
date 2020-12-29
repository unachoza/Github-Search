import React, { Component, MouseEventHandler } from 'react';
import { FormInput } from 'UI/Search-UI/FormInput/FormInput.component';
import 'UI/Search-UI/Form/Form.styles.css';

type InputProps = {
  name?: string | MouseEventHandler;
  value: string;
};

interface FormProps {
  label: string;
  className?: string | boolean | undefined;
  typeOfInput: string;
  placeholder?: string;
  name: string;
  error?: boolean;
  inputFunction?: (event: React.FocusEvent<HTMLInputElement>) => void;
  // inputFunction?: (event: React.FocusEvent<HTMLInputElement>) => void | MouseEventHandler<any>;
}

// formProperties: {
//   className: null,
//   typeOfInput: null,
//   name: 'text',
//   placeholder: 'Text',
//   inputFunction: null,
//   label: 'Text',
//   error: false,
// },
class Form extends Component<FormProps> {
  constructor(props: any) {
    super(props);
    this.state = {
      text: null,
      license: null,
      stars: null,
      forked: null,
    };
  }
  render() {
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      console.log('happenign', e.target, this.state);
      const { name, value } = e.target;
      this.setState({ [name]: value });
    };
    // const handleChange = (fieldName: keyof InputProps) => (e: React.ChangeEvent<HTMLInputElement>) => {
    //   this.setState({ ...this.state, [fieldName]: e.currentTarget.value });
    // };
    return (
      <>
        <form className="containerSearch">
          <div id="left-col" className="column">
            <FormInput
              label="Text"
              className="input"
              typeOfInput="text"
              placeholder="Text"
              name="text"
              inputFunction={(e: any) => handleChange(e)}
            />
            <FormInput
              label="License"
              className="input"
              typeOfInput="text"
              placeholder="Lisence"
              name="license"
              inputFunction={(e: any) => handleChange(e)}
            />
          </div>
          <div id="right-col" className="column">
            <FormInput
              label="Stars"
              className="input"
              typeOfInput="text"
              placeholder="Stars"
              name="stars"
              inputFunction={(e: any) => handleChange(e)}
            />
            <FormInput
              label="Fork"
              className="input"
              typeOfInput="text"
              placeholder="Fork"
              name="fork"
              inputFunction={(e: any) => handleChange(e)}
            />
          </div>
        </form>
        <input id="submit" type="submit" />
      </>
    );
  }
}

export default Form;
