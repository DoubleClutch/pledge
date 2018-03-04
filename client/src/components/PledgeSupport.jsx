import React from 'react';
import $ from "jquery";
import style from './../css/pledgeSupport.css';
import PledgeSupportAmount from './PledgeSupportAmount.jsx'

class PledgeSupport extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {
    if (this.props.id) {
      this.getData(this.props.id);
    } else {
      this.getData(8);
    }
  }

  getData(id) {
    $.ajax({
      type: "GET",
      url: '/pledge/' + id,
      contentType: 'application/json',
      success: (data) => {
        // console.log('raw data: ', JSON.parse(data))
        let info = JSON.parse(data).pledgeSupport;
        // console.log('successful GET from server', info);
        info = JSON.parse(info);
        this.setState({
          pledgeSupportAmounts: info
        });
      },
      error: (error) => {
        console.error('There was an error with the POST request', error);
      }
    })
  }

  render() {
    if (this.state.pledgeSupportAmounts) {
      return (
        <div className={style.pledgeSupportContainer}>
          <h1 className={style.pledgeSupportMainTitle}>Support</h1>

          <div className={style.pledgeSupportMakePledgeComponent}>
          <div >
            <h2>Make a Pledge without a reward</h2>
          </div>
            <div className={style.inputField}>
              <div className={style.currency}>$</div>
              <input placeholder='10'></input>
            </div>
          </div>

          {this.state.pledgeSupportAmounts.map((pledge, index) => (
              <PledgeSupportAmount value={pledge} key={index} />
          ))}

        </div>
      );
    } else {
      return (
        <div className={style.pledgeSupportContainer}>
          <h1 className={style.pledgeSupportMainTitle}>Loading...</h1>
        </div>
      );
    }
  }
}


export default PledgeSupport;
