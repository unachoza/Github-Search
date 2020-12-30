import React, { useEffect, useState } from 'react';

const MyComponent = () => {
  const [localData, setLocalData] = useState();

  useEffect(() => {
    someData().then((data) => {
      setLocalData(data);
    });
  }, []);

  return <div />;
};

export default MyComponent;
