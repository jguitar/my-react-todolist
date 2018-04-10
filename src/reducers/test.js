/* global expect, it, describe */

import { reducer, initialState } from '.';

describe('Reducer', () => {
  it('Should return the initial state when no action passed', () => {
    expect(reducer(undefined, {})).toEqual(initialState);
  });
});
