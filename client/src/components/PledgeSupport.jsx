import React from 'react';
import style from './PledgeSupport.css';
import PledgeSupportAmount from './PledgeSupportAmount.jsx'

class PledgeSupport extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {
    this.testUpdateState();
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
              includes: ['Kickstarter-Exclusive Digital Wallpaper & Ringtone Set']
            },
            deliveryDate: 'Oct 2018',
            shipsTo: null,
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
            shipsTo: null,
            backers: 625
          }
        ]
      })
    }, 250);
  }
  
  render() {
    if (this.state.pledgeSupportAmounts) {
      return (
        <div className='container pledge-support-container' >
          <h1 className='pledge-support-main-title'>Support</h1>
  
          <div className='pledge-support-make-pledge-component'>
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