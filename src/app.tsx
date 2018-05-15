import * as React from 'react';
import {connect} from 'react-redux';
import {RootState} from './ducks/index';
import {Dispatch} from 'redux';
import {up, down} from './ducks/app';

interface Props {
  count : number
  up : () => any;
  down : () => any;
}
const App = (props : Props) => <div>
  <p>{props.count}</p>
  <button onClick={() => props.up()}>Up</button>
  <button onClick={() => props.down()}>Down</button>
</div>;
export default connect((state : RootState) => ({count: state.app.value}), (dispatch : Dispatch) => ({
  up: () => dispatch(up()),
  down: () => dispatch(down())
}))(App);