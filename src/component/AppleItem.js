import React, { Component } from 'react';

class AppleItem extends Component {
  render() {
    return (
      <div className="appleItem">
        <div className="info">
          <div className="name">红苹果- 1号</div>
          <div className="weight">
            23克
          </div>
        </div>
        <div className="btn-div">
          <button>吃掉</button>
        </div>
      </div>
    );
  }
}

export default AppleItem;