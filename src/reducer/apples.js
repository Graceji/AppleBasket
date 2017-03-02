import handler from './handler';
import {
  EATEAPPLE,
  BEGIN_PICK_APPLE,
  DONE_PICK_APPLE,
  FAIL_PICK_APPLE
} from '../constants/actionTypes';

const initialState = {
  isFetching: false,
  apples: [
    {
      id: 1,
      weight: 200,
      isEaten: false
    },
    {
      id: 2,
      weight: 300,
      isEaten: false
    },
    {
      id: 3,
      weight: 400,
      isEaten: false
    }
  ]
};

export default handler(initialState, {
  [EATEAPPLE](state, action) {
    let changeState = state.apples.slice();
    let eatAppleItem = changeState.find(apple => apple.id === action.payload);
    eatAppleItem.isEaten = true;
    return Object.assign({}, state, {apples: changeState});
  },
  [BEGIN_PICK_APPLE](state, action) {
    return Object.assign({}, state, {
      isFetching: true
    })
  },
  [FAIL_PICK_APPLE](state, action) {
    return state
  },
  [DONE_PICK_APPLE](state, action) {
    let newApple = {
      id: action.payload.id,
      weight: action.payload.weight,
      isEaten: false
    };
    const addApple = state.apples.concat(newApple);
    return Object.assign({}, state, { apples: addApple});
  }
});