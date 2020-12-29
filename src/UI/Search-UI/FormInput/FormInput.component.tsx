import React, { MouseEventHandler } from 'react';
import 'UI/Search-UI/FormInput/FormInput.styles.css';

type InputProps = {
  name: string;
  value: string;
};

export interface FormState {
  typeOfInput: string;
  placeholder: string;
  inputValue: string;
  handleChange: React.FormEvent<any>;
}
declare namespace JSX {
  interface IntrinsicElements {
    [elemName: string]: any;
  }
}
export interface FormProps {
  label: string;
  className?: string | boolean | undefined;
  typeOfInput: string;
  placeholder?: string;
  inputValue: string;
  error?: boolean;
  inputFunction?: (event: React.FocusEvent<HTMLInputElement>) => void | MouseEventHandler<any>;
}

// export class FormLogic extends Component<FormState> {
//   constructor(props: any) {
//     super(props);
//     this.state = {
//       typeOfInput: null,
//       placeholder: null,
//       value: null,
//     };
//   }
//   render() {
//     const handleChange = (fieldName: keyof InputProps) => (
//       e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
//     ) => {
//       this.setState({ ...this.state, [fieldName]: e.currentTarget.value });
//     };
//     return (
//       <>
//         <h1>LOADING</h1>
//         {/* <FormInput handleChange={handleChange} /> */}
//       </>
//     );
//   }
// }

// export const FormInput = (props: {
//   typeOfInput: string;
//   handleFunction: React.FormEvent;
//   placeholder: string;
//   inputValue: string;
// }) => <input {...children} />;

export const FormInput = (props: FormProps) => {
  const { typeOfInput, inputFunction, placeholder, className, label } = props;
  return (
    <>
      <div className="default-text">{label}</div>
      <input
        className={typeof className === 'string' ? 'input' : className ? 'input-error' : 'input'}
        type={typeOfInput}
        placeholder={placeholder}
        onBlur={inputFunction}
      />
    </>
  );
};
