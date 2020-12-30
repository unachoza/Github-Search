import React from 'react';
import { FormInput } from 'UI/Search-UI/FormInput/FormInput.component';
import 'UI/Search-UI/Form/Form.styles.css';

interface UserInput {
  text: string;
  license: string;
  stars: string;
  forked: boolean;
  handleSubmit?: (e: React.FormEvent<HTMLFormElement>) => void;
  inputFunction?: (e: React.FocusEvent<HTMLInputElement>) => void;
}

const Form = (props: UserInput): JSX.Element => {
  return (
    <>
      <form className="containerSearch" onSubmit={props.handleSubmit}>
        <div id="left-col" className="column">
          <FormInput
            label="Text"
            className="input"
            typeOfInput="text"
            placeholder="Text"
            name="text"
            // inputFunction={(e: any) => props.inputFunction(e)}
            {...props}
          />
          <FormInput
            label="License"
            className="input"
            typeOfInput="text"
            placeholder="Lisence"
            name="license"
            // inputFunction={(e: any) => props.inputFunction(e)}
            {...props}
          />
        </div>
        <div id="right-col" className="column">
          <FormInput
            label="Stars"
            className="input"
            typeOfInput="text"
            placeholder="Stars"
            name="stars"
            // inputFunction={(e: any) => props.inputFunction(e)}
            {...props}
          />
          <FormInput
            label="Fork"
            className="input"
            typeOfInput="text"
            placeholder="Fork"
            name="fork"
            // inputFunction={(e: any) => props.inputFunction(e)}
            {...props}
          />
        </div>
        <input id="submit" type="submit" />
      </form>
    </>
  );
};

export default Form;
