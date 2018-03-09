import React from 'react';
import IncludedItem from './IncludedItem.jsx'
import style from './../css/includes.css';

class Includes extends React.Component {
  render() {
    if (this.props.included !== null  && this.props.included.length) {
      return (
        <div>
          <h5 className={style.pledgeSupportIncludes}>INLCUDES:</h5>
          <ul>
            {this.props.included.map((item, index) =>(
              <IncludedItem value={item} key={index}/>
            ))}
          </ul>
        </div>
      )
    } else {
      return null;
    }
  }
};

export default Includes;