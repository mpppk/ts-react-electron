import {ActionCreator} from 'react-redux';
import {ActionCreatorsMapObject} from 'redux';
import {Action, ActionFunction0, createAction} from 'redux-actions';

export const INC = 'INC';
export const DEC = 'DEC';

export class AppActionCreator implements ActionCreatorsMapObject {
    [key: string]: ActionCreator<any>;

    constructor(
        public increment: ActionFunction0<Action<void>>,
        public decrement: ActionFunction0<Action<void>>,
    ) {}

}

export const appActionCreator = new AppActionCreator(createAction(INC), createAction(DEC));
