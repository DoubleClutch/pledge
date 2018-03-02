import React from 'react';
import style from './PledgeSupportAmount.css';
import Includes from './Includes.jsx';

const PledgeSupportAmount = (props) => (
  <div className={style.pledgeSupportAmountContainer}>
    <div className={style.pledgeSupportAmount}>
      <h1>Pledge ${props.value.pledgeAmount} or more</h1>
    </div>
    <div className={style.pledgeSupportDescription}>
      <h4>{props.value.pledgeDescription.title}</h4>
      <div>
        <p>{props.value.pledgeDescription.description}</p>

        <Includes included={props.value.pledgeDescription.includes}/>
        
      </div>
    </div>

    <div className={style.pledgeSupportShipping}>
      <div>
        <p className={style.pledgeSupportStaticInfoSmall}>ESTIMATED DELIVERY</p>
        {props.value.deliveryDate}
      </div>
      <div className={style.pledgeSupportShipsTo}>
        <p className={style.pledgeSupportStaticInfoSmall}>SHIPS TO</p>
        {props.value.shipsTo}
      </div>
      <p className={style.pledgeSupportStaticInfoSmall}> {props.value.backers} backers </p>
    </div>
  </div>
);

export default PledgeSupportAmount;