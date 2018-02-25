import React from 'react';
import style from './../main.css';
import PledgeSupportAmount from './PledgeSupportAmount.jsx'

class PledgeSupport extends React.Compnent {
  constructor(props) {
    super(props);
    state = {};
  }
  
  render() {
    return (
      <div className='pledge-support-contaner' >
          <h1>Support</h1>
          <div className='pledge-support-make-pledge-component'>
  
          </div>
  
          {props.pledgeSupportAmounts.map((pledge, index) => (
              <PledgeSupportAmount value={pledge} key={index} />
          ))}
  
      </div>
    );
  }
}

export default PledgeSupport;