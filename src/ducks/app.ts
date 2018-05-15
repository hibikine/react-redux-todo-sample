import {Action} from "redux";

const UP = 'UP';
const DOWN = 'DOWN';
export const up = () => ({type: UP});
export const down = () => ({type: DOWN});
export interface State {
  value : number
}
const initialState = {
  value: 0
}

const reducer = (state : State = initialState, action : Action) : State => {
  switch (action.type) {
    case UP:
      return {
        value: state.value + 1
      }
    case DOWN:
      return {
        value: state.value - 1
      }
  }
  return state;
}
export default reducer;