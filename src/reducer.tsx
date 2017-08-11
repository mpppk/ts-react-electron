import {combineReducers} from 'redux';
import {Action} from 'redux-actions';

export interface IRootState {
    app: {count: number};
}

const appInitialState = { count : 0 };

export const app = (state = appInitialState, action: Action<undefined>) => {
    switch (action.type) {
        case 'INC':
            return Object.assign({}, { count: state.count + 1 });
        case 'DEC':
            return Object.assign({}, { count: state.count - 1 });
        default:
            return state;
    }
};

export const reducer = combineReducers({app});
