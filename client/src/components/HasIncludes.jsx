import React from 'react';
import Includes from './Includes.jsx'
import style from './hasIncludes.css';

class HasIncludes extends React.Component {
  render() {
    if (this.props.hasIncludes !== null  && this.props.hasIncludes.length) {
      return (
        <div>
          <p className={style.pledgeSupportIncludes}>INLCUDES:</p>
          <ul>
            {this.props.hasIncludes.map((item, index) =>(
              <Includes value={item} key={index}/>
            ))}
          </ul>
        </div>
      )
    } else {
      return null;
    }
  }
};

export default HasIncludes;