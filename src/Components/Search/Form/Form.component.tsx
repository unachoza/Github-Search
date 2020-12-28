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
