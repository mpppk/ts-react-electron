import {ActionMap, createActions} from 'redux-actions';

export enum ActionType {
    ASYNC_INCREMENT = 'ASYNC_INCREMENT',
    INCREMENT       = 'INCREMENT',
    DECREMENT       = 'DECREMENT',
    TOGGLE_DRAWER   = 'TOGGLE_DRAWER',
}

const actions: ActionMap<undefined, undefined> = {};
actions[ActionType.ASYNC_INCREMENT] = undefined;
actions[ActionType.INCREMENT]       = undefined;
actions[ActionType.DECREMENT]       = undefined;
actions[ActionType.TOGGLE_DRAWER]   = undefined;

export const appActionCreator = createActions(actions);
