import React, { Component } from 'react';
import AppleStatus from '../components/AppleStatus';
import AppleList from '../components/AppleList';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import actions from '../actions';

class AppleBasket extends Component {
  getAppleStatus(apples) {
    const totalWeight = apples
                          .reduce((current, next) => ({weight: current.weight + next.weight}))
                          .weight;
    let eatenWeight = 0;
    let eatenLen = 0;

    apples.forEach(apple => {
      if (apple.isEaten) {
        eatenWeight += apple.weight;
        eatenLen += 1;
      }
    });

    const leftWeight = totalWeight - eatenWeight;
    const leftLen = apples.length - eatenLen;

    return {
      eaten: {
        len: eatenLen,
        weight: eatenWeight
      },
      notEaten: {
        len: leftLen,
        weight: leftWeight
      }
    }
  }

  getAppleLists() {
    const { appleBasket, actions } = this.props;
    const notEatenApples = appleBasket.apples.filter(apple => !apple.isEaten);
    if (notEatenApples.length) {
      return notEatenApples.map(apple => <AppleList
                                          key={apple.id}
                                          apple={apple}
                                          eatApple={actions.eatApple}
                                        />)
    }
    return <div>空空如也</div>
  }

  render() {
    const { appleBasket, actions } = this.props;
    const { eaten, notEaten } = this.getAppleStatus(appleBasket.apples);
    return (
      <div className="appleBasket">
        <div className="appleBasket__Header">
          苹果篮子
        </div>
        <div className="appleBasket__Status">
          <AppleStatus text="当前" appleStatus={notEaten} />
          <AppleStatus text="已吃掉" appleStatus={eaten} />
        </div>
        <div className="appleBasket__Lists">
          {this.getAppleLists()}
        </div>
        <div className="appleBasket__Fetch">
          <button onClick={actions.pickApple}>
            摘苹果
          </button>
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    appleBasket: state.appleBasket,
  }
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(actions, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(AppleBasket);

