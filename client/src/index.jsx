import React from 'react';
import {render} from 'react-dom';
import StatefulComponent from './components/StatefulComponent.jsx';
import StatelessComponent from './components/StatelessComponent.jsx';
import PledgeInfo from './components/PledgeInfo.jsx'
import style from './main.css';

const date = new Date();

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      pledgeInfo: {
        pledgeTotal: '10,420',
        pledgeGoal: '7,500',
        backers: 352,
        daysToGo: 18,
        timeStamp: date.toString()
      }
    };
  }
  
  render () {
    return (
      <div>
        <PledgeInfo pledgeInfo={this.state.pledgeInfo}/>
        {/* <h1> Up and running! </h1>
        <StatelessComponent />
        <StatefulComponent /> */}
      </div>
    )
  }
}

render(<App/>, document.getElementById('app'));