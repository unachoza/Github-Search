// import React from 'react';
// import 'Components/Search/FormInput/FormInput.styles.css';

// const FormInput = () => {
//   return (
//     <>
//       <div className="label">FormInput</div>
//       <input type="text" />
//     </>
//   );
// };

// export default FormInput;
import React from 'react';

const FormInput = ({ children, ...props }) => <input {...props}{children}/>;

export default FormInput;
