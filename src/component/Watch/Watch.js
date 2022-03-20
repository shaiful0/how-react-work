import React, { useState } from 'react';
import Display from '../Display/Display';

const Watch = () => {
  const [steps, setSteps] = useState(0);

  const increaseSteps = () =>{
    const newStepsCount = steps + 1;
    setSteps(newStepsCount);
  }

  return (
    <div style={{border:'2px solid black',margin:'5px'}}>
      <h2>This is my smart watch</h2>
      <h2>My Current Steps:{steps}</h2>
      <button onClick={increaseSteps}>Increase</button>
      <Display name="garmin" steps={steps}></Display>
      
    </div>
  );
};

export default Watch;