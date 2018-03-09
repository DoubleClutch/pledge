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
              <h5 className={style.pledgeSupportStaticInfoSmall}>ESTIMATED DELIVERY</h5>
              <h6>{this.props.deliveryDate}</h6>
            </div>
            <h5 className={style.pledgeSupportStaticInfoSmall}> {this.props.backers} backers </h5>
          </div>
        </div>
      )
    } else {
      return (
        <div>
          <div className={style.pledgeSupportShipping}>
            <div>
              <h5 className={style.pledgeSupportStaticInfoSmall}>ESTIMATED DELIVERY</h5>
              <h6>{this.props.deliveryDate}</h6>
            </div>
            <div className={style.pledgeSupportShipsTo}>
              <h5 className={style.pledgeSupportStaticInfoSmall}>SHIPS TO</h5>
              <h6>{this.props.shipsTo}</h6>
            </div>
            <h5 className={style.pledgeSupportStaticInfoSmall}> {this.props.backers} backers </h5>
          </div>
        </div>
      )
    }
  }
};
  
  export default Shipping;