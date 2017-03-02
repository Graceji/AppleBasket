import handler from './handler';
import {
  EATEAPPLE,
  BEGIN_PICK_APPLE,
  DONE_PICK_APPLE,
  FAIL_PICK_APPLE
} from '../constants/actionTypes';

const initialState = {
  isFetching: false
};

export default handler(initialState, {
})