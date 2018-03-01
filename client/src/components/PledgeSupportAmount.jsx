import React from 'react';
import style from './PledgeSupportAmount.css';
import Includes from './Includes.jsx'

const PledgeSupportAmount = (props) => (
  <div className='pledge-support-amount-container'>
    <div className='pledge-support-amount'>
      <h1>Pledge ${props.value.pledgeAmount} or more</h1>
    </div>
    <div className='pledge-support-description'>
      <h2>{props.value.pledgeDescription.title}</h2>
      <div>
        <p>{props.value.pledgeDescription.description}</p>
        
        <h3>Includes:</h3>
        {props.value.pledgeDescription.includes.map((item, index) =>(
          <Includes value={item} key={index}/>
        ))}
      </div>
    </div>

    <div className='pledge-support-shipping'>
      <h3>ESTIMATED DELIVERY</h3>
      {props.value.deliveryDate}
      <h3>SHIPS TO</h3>
      {props.value.shipsTo}
      <h3> {props.value.backers} backers </h3>
    </div>
  </div>
);

export default PledgeSupportAmount;