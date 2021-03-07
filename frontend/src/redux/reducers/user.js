import { SAVE_EMAIL } from '../actions';

const INITIAL_STATE = {
  user: {
    email: 'example@email.com',
  },
};
export default function player(state = INITIAL_STATE, action) {
  switch (action.type) {
    case SAVE_EMAIL:
      return {
        ...state,
        user: {
          email: action.email,
        },
      };
    default:
      return state;
  }
}
