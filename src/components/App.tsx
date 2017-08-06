import * as fs from 'fs';
import RaisedButton from 'material-ui/RaisedButton';
import * as React from 'react';
import * as injectTapEventPlugin from 'react-tap-event-plugin';
import {bindActionCreators} from 'redux';

import {connect} from 'react-redux';
import * as actionCreators from './actionCreators';

fs.readdir('.', (err, files) => {
    if (err) {
        throw err;
    }
});

// Needed for onTouchTap
// http://stackoverflow.com/a/34015469/988941
injectTapEventPlugin();

export interface IAppProps {
    app?: any;
    actions?: any;
}

class App extends React.Component<IAppProps, undefined> {

    constructor(props: IAppProps) {
        super(props);
    }

    public render() {
        // const { app: { count }, actions: { dispatch1, dispatch2 } } = this.props;

        const increment = (e: any) => this.props.actions.increment();
        const decrement = (e: any) => this.props.actions.decrement();

        return (
            <div>
                <h1>Count: {this.props.app.count}</h1>
                <RaisedButton label='Increment' onClick={increment} />
                <RaisedButton label='Decrement' onClick={decrement}/>
            </div>
        );
    }
}

function mapStateToProps(state: any) {
    return  { app: state.app };
}

function mapDispatchToProps(dispatch: any) {
    return { actions: bindActionCreators(actionCreators as any, dispatch) };
}

export default connect(mapStateToProps, mapDispatchToProps)(App as any);
