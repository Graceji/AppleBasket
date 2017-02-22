import {
  BEGIN_PICK_APPLE
  DONE_PICK_APPLE
  FAIL_PICK_APPLE
  EAT_APPLE
} from '../action/action';

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

function appleBasketReducer(state = initialState, action) {
  switch (action.type) {
    case BEGIN_PICK_APPLE:
      
  }
}

export default appleBasketReducer;