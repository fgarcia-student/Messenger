import {UNAUTH_USER,SET_FRIEND_DATA} from '../constants/globals';

export default function(state={}, action) {
  switch (action.type) {
    case UNAUTH_USER:{
      return {...state, friendData: null}
    }
    case SET_FRIEND_DATA:{
      return {...state, friendData: action.payload}
    }
    default:{
      return state;
    }
  }
}
