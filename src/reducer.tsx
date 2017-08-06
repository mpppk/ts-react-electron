import { combineReducers } from 'redux';

const appInitialState = { count : 0 };

export const app = (state = appInitialState, action: any) => {
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
