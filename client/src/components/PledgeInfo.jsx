import React from 'react';
// import style from './../main.css';
const date = new Date(); // temporary work around

class PledgeInfo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {}
  }

  componentDidMount() {
    this.testUpdateState();
  }

  testUpdateState () {
    setTimeout(()=>{
      this.setState({
      pledgeInfo: {
        pledgeTotal: '10,420',
        pledgeGoal: '7,500',
        backers: 352,
        daysToGo: 18,
        timeStamp: date.toString()
      }
      })
    }, 250);
  }
  
  render() {
    if (this.state.pledgeInfo) {
      return (
        <div className='container-fluid pledge-info-container'>
          <div className='row justify-content-start pledge-info-number'><p><span>${this.state.pledgeInfo.pledgeTotal}</span></p></div>
          <div className='row justify-content-start pledge-info'><p>pledged of ${this.state.pledgeInfo.pledgeGoal} goal</p></div>
          <div className='row justify-content-start pledge-info-number'><p>{this.state.pledgeInfo.backers}</p></div>
          <div className='row justify-content-start pledge-info'><p>backers</p></div>
          <div className='row justify-content-start pledge-info-number'><p>{this.state.pledgeInfo.daysToGo}</p></div>
          <div className='row justify-content-start pledge-info'><p>days to go</p></div>
          <div className='row justify-content-start'><button className='col-12 pledge-info-project-btn'>Back this project</button></div>
          <div className='row justify-content-start' ><button className='col-6 pledge-info-remind-btn'><i class="fa fa-heart"></i> Remind me</button></div>
          <div className='row justify-content-start pledge-info-time-stamp'><p><span>All or nothing.</span> This project will only be funded if it reaches its goal by {this.state.pledgeInfo.timeStamp}</p></div>
        </div>
      )
    } else {
      return null;
    }
  }
}


export default PledgeInfo;