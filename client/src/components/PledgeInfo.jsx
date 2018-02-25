import React from 'react';
import style from './../main.css';
const date = new Date(); // temporary work around

let PledgeInfoComponentReady = false;

class PledgeInfo extends React.Component {
  constructor(props) {
    super(props);
    // this.props.setReady = this.props.setReady.bind(this)
    this.state = {
      // pledgeInfo: {}
      // pledgeInfo: this.props.info
      // pledgeInfo: {
      //   pledgeTotal: '10,420',
      //   pledgeGoal: '7,500',
      //   backers: 352,
      //   daysToGo: 18,
      //   timeStamp: date.toString()
      // }
    }
  }
  componentWillMount() {
    // this.setState({
    //   pledgeInfo: this.props.info
    // })
    this.testUpdateState();
  }
  // componentWillMount() {
  //   this.setState({
  //     pledgeInfo: this.props.info
  //   });
  //   if (this.props.setReady && this.state.pledgeInfo) {
  //     this.props.setReady();
  //   }
  // }
  // componentDidMount() {
  //   // if (this.state.pledgeInfo) {
  //     PledgeInfoComponentReady = true
  //   // }
  // }
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
     }, 500)
   }
  
  render() {
    // console.log(this.props)
    if (this.state.pledgeInfo) {
      return (
        <div className='pledge-info-container'>
          <div><p className='pledge-info-number'><span>${this.state.pledgeInfo.pledgeTotal}</span></p></div>
          <div><p className='pledge-info'>pledged of ${this.state.pledgeInfo.pledgeGoal} goal</p></div>
          <div><p className='pledge-info-number'>{this.state.pledgeInfo.backers}</p></div>
          <div><p className='pledge-info'>backers</p></div>
          <div><p className='pledge-info-number'>{this.state.pledgeInfo.daysToGo}</p></div>
          <div><p className='pledge-info'>days to go</p></div>
          <div><button className='pledge-info-project-btn' >Back this project</button></div>
          <div><button className='pledge-info-remind-btn' >Remind me</button></div>
          <div><p className='pledge-info-time-stamp'><span>All or nothing.</span> This project will only be funded if it reaches its goal by {this.state.pledgeInfo.timeStamp}</p></div>
        </div>
      )
    } else {
      return null;
    }
  }
}
// if (PledgeInfoComponentReady) {
  // window.PledgeInfo = PledgeInfo;
// }


export default PledgeInfo;