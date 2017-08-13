import * as fs from 'fs';
import AppBar from 'material-ui/AppBar';
import Drawer from 'material-ui/Drawer';
import MenuItem from 'material-ui/MenuItem';
import * as React from 'react';
import {connect, Dispatch} from 'react-redux';
import {
    BrowserRouter as Router,
    Link,
    Route,
} from 'react-router-dom';
import * as injectTapEventPlugin from 'react-tap-event-plugin';
import {bindActionCreators} from 'redux';
import {Action, ActionFunction0} from 'redux-actions';
import {AppActionCreator, appActionCreator} from '../actionCreators';
import {IAppState, IRootState} from '../reducer';
import {About} from './About';
import Counter from './Counter';
import {Home} from './Home';

fs.readdir('.', (err, files) => {
    if (err) {
        throw err;
    }
});

// Needed for onTouchTap
// http://stackoverflow.com/a/34015469/988941
injectTapEventPlugin();

export interface IAppProps {
    isOpenDrawer: boolean;
    actions?: {
        toggleDrawer(): ActionFunction0<Action<void>>;
    };
}

class App extends React.Component<IAppProps, undefined> {
    constructor(props: IAppProps) {
        super(props);
        this.handleLeftIconButtonTouchTap = this.handleLeftIconButtonTouchTap.bind(this);
        this.handleClose = this.handleClose.bind(this);
        this.handleRequestChange = this.handleRequestChange.bind(this);
    }

    public render() {
        return (
            <Router>
                <div>
                    <AppBar
                        title='Title'
                        iconClassNameRight='muidocs-icon-navigation-expand-more'
                        onLeftIconButtonTouchTap={this.handleLeftIconButtonTouchTap}
                    />

                    <Drawer
                        docked={false}
                        width={200}
                        open={this.props.isOpenDrawer}
                        onRequestChange={this.handleRequestChange}
                    >
                        <MenuItem onTouchTap={this.handleClose}>
                            <Link className='menu-list' to='/'>Home</Link>
                        </MenuItem>
                        <MenuItem onTouchTap={this.handleClose}>
                            <Link className='menu-list' to='/about'>About</Link>
                        </MenuItem>
                        <MenuItem onTouchTap={this.handleClose}>
                            <Link className='menu-list' to='/counter'>Counter</Link>
                        </MenuItem>
                    </Drawer>

                    <Route exact={true} path='/' component={Home}/>
                    <Route path='/about' component={About}/>
                    <Route path='/counter' component={Counter}/>
                </div>
            </Router>
        );
    }

    private handleLeftIconButtonTouchTap() {
        this.props.actions.toggleDrawer();
    }

    private handleClose() {
        this.props.actions.toggleDrawer();
    }

    private handleRequestChange(_: boolean) {
        this.props.actions.toggleDrawer();
    }
}

function mapStateToProps(state: IRootState) {
    return  state.app;
}

function mapDispatchToProps
<TDispatchProps extends {actions: AppActionCreator}, T>(dispatch: Dispatch<any>) {
    return { actions: bindActionCreators<AppActionCreator>(appActionCreator, dispatch) };
}

export default
connect<IAppState, {actions: AppActionCreator}, undefined>(mapStateToProps, mapDispatchToProps)(App as any);
