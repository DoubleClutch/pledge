import React from 'react';
import {render} from 'react-dom';
import StatefulComponent from './components/StatefulComponent.jsx';
import StatelessComponent from './components/StatelessComponent.jsx';
import style from './main.css';
import PledgeSupport from './components/PledgeSupport.jsx';

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
        <PledgeSupport pledgeSupportAmounts={this.state.pledgeSupportAmounts}/>
      </div>
    )
  }
}

render(<App/>, document.getElementById('app'));