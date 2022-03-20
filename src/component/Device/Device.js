import React from 'react';
import DiviceDetail from '../DeviceDetaile/DiviceDetail';

const Device = (props) => {
  return (
    <div>
      <h2>I have :{props.name}</h2>
      <DiviceDetail></DiviceDetail>
    </div>
  );
};

export default Device;