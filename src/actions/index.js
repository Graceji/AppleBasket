import {
  EATEAPPLE,
  BEGIN_PICK_APPLE,
  DONE_PICK_APPLE,
  FAIL_PICK_APPLE
} from '../constants/actionTypes';

let actions = {
  eatApple(appleId) {
    return {
      type: EATEAPPLE,
      payload: appleId
    }
  },
  beginPickApple() {
    return {
      type: BEGIN_PICK_APPLE
    }
  },
  failPickApple(errorText) {
    return {
      type: FAIL_PICK_APPLE,
      payload: new Error(errorText),
      error: true
    }
  },
  donePickApple(id, weight) {
    return {
      type: DONE_PICK_APPLE,
      payload: {
        weight,
        id
      }
    }
  },
  pickApple() {
    return (dispatch, getState) => {
      if (getState().appleBasket.isPicking) {
        return;
      }
      dispatch(actions.beginPickApple());
      fetch("https://hacker-news.firebaseio.com/v0/jobstories.json")
        .then(res => {
          if (res.status !== 200) dispatch(this.failPickApple(res.statusText));
          let weight = Math.floor(200 + Math.random() * 50);
          let apples = getState().appleBasket.apples.slice();
          const compare = (key) => {
            return (a, b) => b[key] - a[key]
          }
          const maxId = apples.sort(compare('id'))[0].id + 1;
          dispatch(actions.donePickApple(maxId, weight));
        })
        .catch(e => {
          dispatch(actions.failPickApple(e.statusText));
        })
    }
  },
}

export default actions;