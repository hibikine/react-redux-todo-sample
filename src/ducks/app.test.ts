import reducer from './app';

test('app reducer', () => {
  const state = reducer(undefined, {type: null});
  expect(state).toEqual({value: 0});
  const uppedState = reducer(state, {type: 'UP'});
  expect(uppedState).toEqual({value: 1});
  const downedState = reducer(uppedState, {type: 'DOWN'});
  expect(downedState).toEqual({value: 0});
})