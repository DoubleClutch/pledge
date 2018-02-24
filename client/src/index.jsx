import React from 'react';
import {render} from 'react-dom';
import StatefulComponent from './components/StatefulComponent.jsx';
import StatelessComponent from './components/StatelessComponent.jsx';
import PledgeInfo from './components/PledgeInfo.jsx'
import style from './main.css';
import PledgeSupport from './components/PledgeSupport.jsx';


const date = new Date(); // temporary work around

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      pledgeSupportAmounts: ['supportTest1', 'supportTest2'] // these will be replaced with objects containing necessary information
    };
  }
  
  render () {
    return (
      <div>
        <PledgeInfo info={{
          pledgeTotal: '10,420',
          pledgeGoal: '7,500',
          backers: 352,
          daysToGo: 18,
          timeStamp: date.toString()
        }}/>
        <PledgeSupport pledgeSupportAmounts={this.state.pledgeSupportAmounts}/>
      </div>
    )
  }
}

// export default App;

render(<App/>, document.getElementById('pledge-info'));