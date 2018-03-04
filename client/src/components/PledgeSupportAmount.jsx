import React from 'react';
import style from './../css/pledgeSupportAmount.css';
import Includes from './Includes.jsx';
import Shipping from './Shipping.jsx';

const PledgeSupportAmount = (props) => (
  <div className={style.pledgeSupportAmountContainer}>
    
    <div className={style.pledgeSupportAmount}>
      <h1>Pledge ${props.value.pledgeAmount} or more</h1>
    </div>
    <div className={style.pledgeSupportDescription}>
      <h4>{props.value.pledgeDescription.title}</h4>
      <div className={style.hover}>
      <h3>Select this reward</h3>
    </div>
      <div>
        <p>{props.value.pledgeDescription.description}</p>
        <Includes included={props.value.pledgeDescription.includes}/>  
      </div>
      <Shipping shipsTo={props.value.shipsTo} deliveryDate={props.value.deliveryDate} backers={props.value.backers} />
    </div>
  </div>
);

export default PledgeSupportAmount;