import React from 'react';
import style from './../main.css';
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
        pledgeSupportAmounts: ['test1', 'test2']
      })
    }, 250);
  }
  
  render() {
    if (this.state.pledgeSupportAmounts) {
      return (
        <div className='pledge-support-contaner' >
          <h1>Support</h1>
  
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