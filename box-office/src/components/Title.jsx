import React from 'react';

// eslint-disable-next-line react/function-component-definition
const Title = ({ title, subtitle }) => {
  return (
    <div>
      <h1>{title}</h1>
      <p>{subtitle}</p>
    </div>
  );
};

export default Title;
