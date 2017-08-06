import { createAction } from 'redux-actions';

export const INC = 'INC';
export const DEC = 'DEC';

export const increment = createAction(INC);
export const decrement = createAction(DEC);
