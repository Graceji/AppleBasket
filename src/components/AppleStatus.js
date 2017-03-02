import React, { Component } from 'react';

class AppleStatus extends Component {
  render() {
    const { text, appleStatus } = this.props;
    return (
      <div>
        <span>{text}</span>
        <span>{appleStatus.len} 个苹果</span>
        <span>{appleStatus.weight} 克</span>
      </div>
    );
  }
}

export default AppleStatus;