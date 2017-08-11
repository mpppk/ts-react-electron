import * as fs from 'fs';
import RaisedButton from 'material-ui/RaisedButton';
import * as React from 'react';
import * as injectTapEventPlugin from 'react-tap-event-plugin';
import {bindActionCreators} from 'redux';

import {connect, Dispatch} from 'react-redux';
import {
    BrowserRouter as Router,
    Link,
    Route,
} from 'react-router-dom';
import {Action, ActionFunction0} from 'redux-actions';
import {appActionCreator, AppActionCreator} from '../actionCreators';
import {IRootState} from '../reducer';

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
        this.counterComponent = this.counterComponent.bind(this);
        this.aboutComponent = this.aboutComponent.bind(this);
        this.incrementClickEvent = this.incrementClickEvent.bind(this);
        this.decrementClickEvent = this.decrementClickEvent.bind(this);
    }

    public render() {
        return (
            <Router>
                <div>
                    <ul>
                        <li><Link to='/'>Home</Link></li>
                        <li><Link to='/about'>About</Link></li>
                        <li><Link to='/counter'>Counter</Link></li>
                    </ul>

                    <Route exact={true} path='/' component={this.homeComponent}/>
                    <Route path='/about' component={this.aboutComponent}/>
                    <Route path='/counter' component={this.counterComponent}/>
                </div>
            </Router>
        );
    }

    private homeComponent() {
        return (
            <div>
                <h2>Home</h2>
            </div>
        );
    }

    private counterComponent() {
        return (
            <div>
                <h1>Count: {this.props.app.count}</h1>
                <RaisedButton label='Increment' onClick={this.incrementClickEvent} />
                <RaisedButton label='Decrement' onClick={this.decrementClickEvent} />
            </div>
        );
    }

    private aboutComponent() {
        return (
            <div>
                <h2>About</h2>
            </div>
        );
    }

    private incrementClickEvent(e: React.MouseEvent<{}>) {
        return this.props.actions.increment();
    }

    private decrementClickEvent(e: React.MouseEvent<{}>) {
        return this.props.actions.decrement();
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
