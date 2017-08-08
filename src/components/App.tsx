import * as fs from 'fs';
import RaisedButton from 'material-ui/RaisedButton';
import * as React from 'react';
import * as injectTapEventPlugin from 'react-tap-event-plugin';
import {bindActionCreators} from 'redux';

import {connect, Dispatch} from 'react-redux';
import {Action, ActionFunction0} from 'redux-actions';
import {IRootState} from '../reducer';
import {appActionCreator, AppActionCreator} from './actionCreators';

fs.readdir('.', (err, files) => {
    if (err) {
        throw err;
    }
});

// Needed for onTouchTap
// http://stackoverflow.com/a/34015469/988941
injectTapEventPlugin();

export interface IAppProps {
    app?: {count: number};
    actions?: {
        increment(): ActionFunction0<Action<void>>;
        decrement(): ActionFunction0<Action<void>>;
    };
}

class App extends React.Component<IAppProps, undefined> {

    constructor(props: IAppProps) {
        super(props);
    }

    public render() {
        const increment = (e: React.MouseEvent<{}>) => this.props.actions.increment();
        const decrement = (e: React.MouseEvent<{}>) => this.props.actions.decrement();

        return (
            <div>
                <h1>Count: {this.props.app.count}</h1>
                <RaisedButton label='Increment' onClick={increment} />
                <RaisedButton label='Decrement' onClick={decrement} />
            </div>
        );
    }
}

function mapStateToProps(state: IRootState) {
    return  { app: state.app };
}

function mapDispatchToProps
<TDispatchProps extends {actions: AppActionCreator}, T>(dispatch: Dispatch<any>): TDispatchProps {
    return { actions: bindActionCreators<AppActionCreator>(appActionCreator, dispatch) } as TDispatchProps;
}

export default
connect<IRootState, {actions: AppActionCreator}, undefined>(mapStateToProps, mapDispatchToProps)(App as any);
