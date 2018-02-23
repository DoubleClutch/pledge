import React from 'react';
import style from './../main.css';
import PledgeSupportAmount from './PledgeSupportAmount.jsx'

const PledgeSupport = (props) => (
    <div className='pledge-support-contaner'>
        <h1>Support</h1>
        <div className='pledge-support-make-pledge-component'>

        </div>

        {props.pledgeSupport.pledgeSupportAmounts.map((pledge, index) => (
            <PledgeSupportAmount value={pledge} key={index} />
        ))}

    </div>
);

export default PledgeSupport;