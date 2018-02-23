import React from 'react';
import style from './../main.css';
import PledgeSupportAmount from './PledgeSupportAmount.jsx'

const PledgeSupport = (props) => (
    <div className='pledge-support-contaner' >
      {/* {console.log(props)} */}
        <h1>Support</h1>
        <div className='pledge-support-make-pledge-component'>

        </div>

        {props.pledgeSupportAmounts.map((pledge, index) => (
            <PledgeSupportAmount value={pledge} key={index} />
        ))}

    </div>
);

export default PledgeSupport;