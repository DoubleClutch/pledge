
import React, { Component } from 'react';
import $ from "jquery";
import style from './PledgeInfo.css';
// import style from './../main.css';
// import './../main.css';

const date = new Date(); // temporary work around

class PledgeInfo extends Component {
  constructor(props) {
    super(props);
    this.state = {}
  }

  // componentDidMount() {
  //   this.testUpdateState();
  // }
  componentDidMount() {
    this.getData();
  }

  getData() {
    $.ajax({
      type: "GET",
      url: '/6',
      contentType: 'application/json',
      success: (data) => {
        console.log('raw data: ', JSON.parse(data))
        let info = JSON.parse(data).pledgeInfo;
        console.log('successful GET from server', info);
        info = JSON.parse(info);
        this.setState({
          pledgeInfo: info
        });
      },
      error: (error) => {
        console.error('There was an error with the POST request', error);
      }
    })
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
      console.log('pledgeInfo props', this.props)
      return (

        <div className={style.pledgeInfoContainer}>
          <div><p className={style.pledgeInfoNumber}><span>${this.state.pledgeInfo.pledgeTotal}</span></p></div>
          <div><p className={style.pledgeInfo}>pledged of ${this.state.pledgeInfo.pledgeGoal} goal</p></div>
          <div><p className={style.pledgeInfoNumber}>{this.state.pledgeInfo.backers}</p></div>
          <div><p className={style.pledgeInfo}>backers</p></div>
          <div><p className={style.pledgeInfoNumber}>{this.state.pledgeInfo.daysToGo}</p></div>
          <div><p className={style.pledgeInfo}>days to go</p></div>
          <div><button className={style.pledgeInfoProjectBtn} >Back this project</button></div>
          <div><button className={style.pledgeInfoRemindBtn} ><i className="fa fa-heart"></i> Remind me</button></div>
          <div><p className={style.pledgeInfoTimeStamp}><span>All or nothing.</span> This project will only be funded if it reaches its goal by {this.state.pledgeInfo.timeStamp}</p></div>
        </div>
      )
    } else {
      return null;
    }
  }
}


export default PledgeInfo;