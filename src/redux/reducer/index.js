
const initialState = {
  user: '',
  token: ''
}

export default function userReducer(state = initialState, action) {
  switch(action.type) {
    case 'user/save-token':
      return {
        ...state,
        token: action.payload
      }
    case 'user/save-user':
      return {
        ...state,
        user: action.payload
      }
    default:
      return state;
  }
}
