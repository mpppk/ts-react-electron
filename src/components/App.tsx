import * as fs from 'fs';
import * as React from 'react';
import {
    BrowserRouter as Router,
    Link,
    Route,
} from 'react-router-dom';
import * as injectTapEventPlugin from 'react-tap-event-plugin';
import {Action, ActionFunction0} from 'redux-actions';
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
    app?: {count: number};
    actions?: {
        increment(): ActionFunction0<Action<void>>;
        decrement(): ActionFunction0<Action<void>>;
    };
}

export default class App extends React.Component<IAppProps, undefined> {
    constructor(props: IAppProps) {
        super(props);
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

                    <Route exact={true} path='/' component={Home}/>
                    <Route path='/about' component={About}/>
                    <Route path='/counter' component={Counter}/>
                </div>
            </Router>
        );
    }
}
