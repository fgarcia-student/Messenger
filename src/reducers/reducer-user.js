import {REGISTER_USER, LOGIN_USER} from '../constants/globals';

export default function(state={},action) {
  switch (action.type) {
    case REGISTER_USER:{
      return action.payload;
    }
    case LOGIN_USER:{
      return action.payload.data;
    }
    default:{
      return state;
    }
  }
}
