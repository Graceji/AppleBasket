import React, { Component } from 'react';
import { connect } from 'react-redux';

class AppleBasket extends Component {
  render() {
    return (
      <div className="appleBasket">
        <div className="title">
          苹果篮子
        </div>
        <div className="status">
          <div className="section">
            <div className="head">
              当前
            </div>
            <div className="cotent">
              0 个苹果， 0 克
            </div>
          </div>
          <div className="section">
            <div className="head">
              已吃掉
            </div>
            <div className="cotent">
              2 个苹果， 0 克
            </div>
          </div>
        </div>
        <div className="appleList">
          <div className="empty-tip">

          </div>
        </div>
        <div className="btn-div">
          <button>
            摘苹果
          </button>
        </div>
      </div>
    );
  }
}

// export default connect()(AppleBasket);
export default AppleBasket;