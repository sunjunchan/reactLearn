import { SETLOGINUSERTYPE } from "../action/loginUserAction"
const initialState = null

// eslint-disable-next-line import/no-anonymous-default-export
export default (state = initialState, { type, payload }) => {
  switch (type) {

    case SETLOGINUSERTYPE:
    return payload

  default:
    return state
  }
}

