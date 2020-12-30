import React, { MouseEventHandler } from 'react';
import 'UI/Search-UI/FormInput/FormInput.styles.css';

export interface FormProps {
  label: string;
  className?: string | boolean | undefined;
  typeOfInput: string;
  placeholder?: string;
  name: string;
  error?: boolean;
  inputFunction?: (event: React.FocusEvent<HTMLInputElement>) => void;
  // inputFunction?: (event: React.FocusEvent<HTMLInputElement>) => void | MouseEventHandler<any>;
}

export const FormInput = (props: FormProps) => {
  const { typeOfInput, inputFunction, placeholder, className, label, name } = props;
  console.log(props);
  return (
    <>
      <div className="default-text left">{label}</div>
      <input
        className={typeof className === 'string' ? 'input' : className ? 'input-error' : 'input'}
        type={typeOfInput}
        name={name}
        placeholder={placeholder}
        onBlur={inputFunction}
      />
    </>
  );
};
