import React from 'react';
import $ from "jquery";
import style from './../css/pledgeSupport.css';
import PledgeSupportAmount from './PledgeSupportAmount.jsx'

class PledgeSupport extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  // componentDidMount() {
  //   this.testUpdateState();
  // }

  componentDidMount() {
    if (this.props.id) {
      this.getData(this.props.id);
    } else {
      this.getData(4);
    }
  }

  getData(id) {
    $.ajax({
      type: "GET",
      url: '/' + id,
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

  testUpdateState () {
    setTimeout(() => {
      this.setState({
        pledgeSupportAmounts: [
          {
            pledgeAmount: 5,
            pledgeDescription: {
              title: 'Heartbeat',
              description: 'I hear you! Receive my heartfelt thanks and an exclusive Once Upon A Coma backer wallpaper + ringtone set!',
              // includes: ['Kickstarter-Exclusive Digital Wallpaper & Ringtone Set']
              includes: null
            },
            deliveryDate: 'Oct 2018',
            shipsTo: 'Anywhere in the world',
            backers: 59
          },
          {
            pledgeAmount: 15,
            pledgeDescription: {
              title: 'Patient',
              description: 'Experience Pete’s strange coma in the digital copy of Once Upon A Coma on Steam, GOG, or GameJolt (Windows, Mac or Linux), plus early-access to the exclusive beta version of the game!',
              includes: [
                'Once Upon A Coma Digital Copy (Steam/GOG)',
                'Kickstarter-Exclusive Digital Wallpaper & Ringtone Set',
                'Once Upon A Coma Discord access!'
              ]
            },
            deliveryDate: 'Oct 2018',
            shipsTo: 'Anywhere in the world',
            backers: 625
          }
        ]
      })
    }, 250);
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
      return null;
    }
  }
}


export default PledgeSupport;
