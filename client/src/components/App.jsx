import React from 'react';
import {render} from 'react-dom';
import PledgeInfo from './PledgeInfo.jsx'
import PledgeSupport from './PledgeSupport.jsx';

let PledgeInfoComponentReady = false;
const date = new Date(); // temporary work around

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      pledgeSupportAmounts: ['this cool thing', 'or maybe jsut another bag'],
      // pledgeSupportAmounts: {
      //   pledgeAmount: 25,
      //   description: {
      //     title: 'We will give you cool stuff',
      //     body: 'The spefic thing is this...'
      //   },
      //   deliveryDate: 'Some date',
      //   shipsTo: 'anywhere in the US',
      //   backers: 12
      // } // these will be replaced with objects containing necessary information
      PledgeInfoComponentReadyState: false

    };
  }

  pledgeInfoComponentReadyState() {
    this.setState({
      PledgeInfoComponentReadyState: true
    });
  }
    
  render () {
    console.log('index.jsx state', this.state)
    // render(<PledgeInfo/>, document.getElementById('pledge-info'));
    // if (this.state.PledgeInfoComponentReadyState) {
    //   PledgeInfoComponentReady = this.state.PledgeInfoComponentReadyState;
    // }
    // return null
    return (
      <div>
        <PledgeInfo setReady={this.pledgeInfoComponentReadyState.bind(this)} info={{
          pledgeTotal: '12,420',
          pledgeGoal: '7,500',
          backers: 352,
          daysToGo: 18,
          timeStamp: date.toString()
        }}/>
        {/* <PledgeSupport pledgeSupportAmounts={this.state.pledgeSupportAmounts}/> */}
      </div>
    )
  }
}



// render(<App/>, document.getElementById('pledge-info-app'));

// if (PledgeInfoComponentReady) { 
//   render(<PledgeInfo/>, document.getElementById('pledge-info'));
// }

// consider a callback that would wait for the compnent to be populated with information before it gets added to the window
// window.PledgeInfo = PledgeInfo;
// console.log(PledgeInfoComponentReady)
setInterval(() => {console.log(PledgeInfoComponentReady);if (PledgeInfoComponentReady) {
    window.PledgeInfo = PledgeInfo;
  }}, 500)
// if (PledgeInfoComponentReady) {
//   window.PledgeInfo = PledgeInfo;
// }
// // window.PledgeSupport = PledgeSupport;

export default App;
// export default PledgeInfoComponentReady;