import React, { Component, MouseEventHandler } from 'react';
import { FormInput } from 'UI/Search-UI/FormInput/FormInput.component';
import 'UI/Search-UI/Form/Form.styles.css';
import { Mutable } from 'type-fest';

interface FormProps {
  label?: string;
  className?: string | boolean | undefined;
  typeOfInput?: string;
  placeholder?: string;
  name?: string;
  error?: boolean;
}

interface UserInput {
  text: string;
  license: string;
  stars: string;
  forked: string;
  inputFunction: (event: React.FocusEvent<HTMLInputElement>) => void;
}

const Form = (props: UserInput | Mutable<UserInput>): JSX.Element => {
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
      </form>
      <input id="submit" type="submit" />
    </>
  );
};

export default Form;
