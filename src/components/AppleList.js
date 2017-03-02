import React, { Component } from 'react';

class AppleList extends Component {
  render() {
    const { apple, eatApple } = this.props;
    return (
      <div>
        苹果 <span>{apple.id}</span>号
        <span>{apple.weight}</span>克
        <button onClick={eatApple.bind(this, apple.id)}>吃掉</button>
      </div>
    );
  }
}

export default AppleList;