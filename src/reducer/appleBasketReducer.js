import {
  BEGIN_PICK_APPLE,
  DONE_PICK_APPLE,
  FAIL_PICK_APPLE,
  EAT_APPLE,
} from '../action/actions';
import createReducer from './createReducer';

const initialState = {
  isPicking: false,
  newAppleId: 3,
  apples: [
    {
      id: 0,
      weight: 233,
      isEaten: false
    },
    {
      id: 1,
      weight: 235,
      isEaten: true
    },
    {
      id: 2,
      weight: 236,
      isEaten: false
    }
  ]
};

export default createReducer(initialState, {
  [BEGIN_PICK_APPLE](state, action) {
    return Object.assign({}, state, {isPicking: true});
  },
  [DONE_PICK_APPLE](state, action) {
    let newApple = {
      id: state.newAppleId,
      weight: action.payload,
      isEaten: false
    }
    return Object.assign({}, state, newApple);
  },
  [FAIL_PICK_APPLE](state, action) {
    return Object.assign({}, state, {isPicking: false});
  },
  [EAT_APPLE](state, action) {
    return Object.assign({}, state, {
      apples: state.apples.map(apple => {
        if (apple.id === action.payload) {
          return Object.assign({}, apple, {
            isEaten: true
          })
        }
        return apple
      })
    })
  }
})
