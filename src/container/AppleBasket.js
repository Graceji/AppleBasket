import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import actions from '../action/appleAction';
import AppleItem from '../component/AppleItem';

class AppleBasket extends Component {
  calculateStatus() {
    let status = {
      appleNow: {
        quantity: 0,
        weight: 0
      },
      appleEaten: {
        quantity: 0,
        weight: 0
      }
    };
    this.props.appleBasket.apples.forEach(apple => {
      let selector = apple.isEaten ? 'appleEaten' : 'appleNow';
      status[selector].quantity ++;
      status[selector].weight += apple.weight;
    });
    return status;
  }

  getAppleItem(apples) {
    let data = [];
    apples.forEach(apple => {
      if (!apple.isEaten) {
        data.push(<AppleItem
                    apple={apple}
                    key={apple.id}
                    eatApple={this.props.actions.eatApple}
                  />);
      }
      if (!data.length) data.push(<div>空空如也！</div>)
    })
    return data;
  }

  render() {
    let { appleBasket, actions } = this.props;
    let { apples, isPicking } = appleBasket;
    let status = this.calculateStatus();
    let {
      appleNow: {quantity: notEatenQuantity, weight: notEatenWeight},
      appleEaten: {quantity: eatenQuantity, weight: eatenWeight}
    } = status;

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
              {notEatenQuantity}个苹果， {notEatenWeight}克
            </div>
          </div>
          <div className="section">
            <div className="head">
              已吃掉
            </div>
            <div className="cotent">
              {eatenQuantity}个苹果， {eatenWeight}克
            </div>
          </div>
        </div>
        <div className="appleList">
          <div className="empty-tip">
            {this.getAppleItem(apples)}
          </div>
        </div>
        <div className="btn-div">
          <button onClick={actions.pickApple}>
            摘苹果
          </button>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  appleBasket: state.appleBasket
});

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators(actions, dispatch)
});

export default connect(mapStateToProps, mapDispatchToProps)(AppleBasket);
// export default AppleBasket;