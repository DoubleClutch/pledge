
import React, { Component } from 'react';
import $ from "jquery";
import style from './../css/pledgeInfo.css';

class PledgeInfo extends Component {
  constructor(props) {
    super(props);
    this.state = {}
  }

  componentDidMount() {
    if (this.props.id) {
      this.getData(this.props.id);
    } else {
      this.getData(8);
    }
  }

  getData(id) {
    $.ajax({
      type: "GET",
      url: '/pledge/' + id,
      contentType: 'application/json',
      success: (data) => {
        console.log('state:', this.state)
        console.log('props:', this.props)
        // console.log('raw data: ', data)
        
        if (typeof data === 'string') {
          
          let info = JSON.parse(data).pledgeInfo;
          // console.log('successful GET from server', info);
          info = JSON.parse(info);
          this.setState({
            pledgeInfo: info
          });
        }
      },
      error: (error) => {
        console.error('There was an error with the POST request', error);
      }
    })
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
      return (
        <div className={style.pledgeInfoContainer}>
          <p className={style.pledgeInfoNumber}> Loading... </p>
        </div>
      );
    }
  }
}


export default PledgeInfo;