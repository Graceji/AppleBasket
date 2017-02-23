import {
  BEGIN_PICK_APPLE,
  DONE_PICK_APPLE,
  FAIL_PICK_APPLE,
  EAT_APPLE,
} from './actions';

let actions = {
  pickApple: function() {
    return function(dispatch, getState) {
      if (getState().appleBasket.isPicking) {
        return;
      }

      dispatch(actions.beginPickApple());
      fetch('https://hacker-news.firebaseio.com/v0/jobstories.json')
        .then(res => {
          if (res.status != 200) dispatch(actions.failPickApple(res.statusText));

          let weight = Math.floor(200 + Math.random() * 50);
          dispatch(actions.donePickApple(weight));
        })
        .catch(e => {
          dispatch(actions.failPickApple(e.statusText));
        })
    }
  },
  beginPickApple: () => ({
    type: BEGIN_PICK_APPLE
  }),
  donePickApple(appleWeight) {
    return {
      type: DONE_PICK_APPLE,
      payload: appleWeight
    }
  },
  failPickApple(errMsg) {
    return {
      type: FAIL_PICK_APPLE,
      payload: new Error(errMsg),
      error: true
    }
  },
  eatApple(appleId) {
    return {
      type: EAT_APPLE,
      payload: appleId
    }
  }
};

export default actions;