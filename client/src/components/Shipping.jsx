import React from 'react';
import style from './../css/shipping.css';

class Shipping extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    if (this.props.shipsTo === null) {
      return (
        <div>
        <div className={style.pledgeSupportShipping}>
            <div>
              <p className={style.pledgeSupportStaticInfoSmall}>ESTIMATED DELIVERY</p>
              {this.props.deliveryDate}
            </div>
            <p className={style.pledgeSupportStaticInfoSmall}> {this.props.backers} backers </p>
          </div>
        </div>
      )
    } else {
      return (
        <div>
          <div className={style.pledgeSupportShipping}>
            <div>
              <p className={style.pledgeSupportStaticInfoSmall}>ESTIMATED DELIVERY</p>
              {this.props.deliveryDate}
            </div>
            <div className={style.pledgeSupportShipsTo}>
              <p className={style.pledgeSupportStaticInfoSmall}>SHIPS TO</p>
              {this.props.shipsTo}
            </div>
            <p className={style.pledgeSupportStaticInfoSmall}> {this.props.backers} backers </p>
          </div>
        </div>
      )
    }
  }
};
  
  export default Shipping;