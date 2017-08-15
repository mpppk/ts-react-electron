import {ActionCreator} from 'react-redux';
import {ActionCreatorsMapObject} from 'redux';
import {Action, ActionFunction0, createAction} from 'redux-actions';

enum ActionType {
    INC = 'INC',
    DEC = 'DEC',
    TOGGLE_DRAWER = 'TOGGLE_DRAWER',
}

export class AppActionCreator implements ActionCreatorsMapObject {
    [key: string]: ActionCreator<any>;

    constructor(
        public increment: ActionFunction0<Action<void>>,
        public decrement: ActionFunction0<Action<void>>,
        public toggleDrawer: ActionFunction0<Action<void>>,
    ) {}
}

export const appActionCreator = new AppActionCreator(
    createAction(ActionType.INC),
    createAction(ActionType.DEC),
    createAction(ActionType.TOGGLE_DRAWER),
);
