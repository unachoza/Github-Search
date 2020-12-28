import React from 'react';
import { inputParams } from 'Types/Types';
import FormInput from 'Components/Search/FormInput/FormInput.component';
import 'Components/Search/Form/Form.styles.css';

const Form = () => {
  return (
    <>
      <form>
        <FormInput />
        <FormInput />
        <FormInput />
        <FormInput />
        <button>Submit</button>
      </form>
    </>
  );
};

export default Form;
