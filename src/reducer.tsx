import {combineReducers} from 'redux';
import {Action} from 'redux-actions';

export interface IRootState {
    app: IAppState;
    counter: ICounterState;
}

export interface IAppState {
    isOpenDrawer: boolean;
}

export interface ICounterState {
    count: number;
}

const appInitialState: IAppState = { isOpenDrawer: false};
const counterInitialState: ICounterState = { count: 0 };

export const app = (state = appInitialState, action: Action<undefined>) => {
    const newState = Object.assign({}, state);
    switch (action.type) {
        case 'TOGGLE_DRAWER':
            newState.isOpenDrawer = !newState.isOpenDrawer;
            return newState;
        default:
            return state;
    }
};

export const counter = (state = counterInitialState, action: Action<undefined>) => {
    const newState = Object.assign({}, state);
    switch (action.type) {
        case 'INC':
            newState.count++;
            return newState;
        case 'DEC':
            newState.count--;
            return newState;
        default:
            return state;
    }
};

export const reducer = combineReducers({app, counter});
