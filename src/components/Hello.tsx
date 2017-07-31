import * as React from "react";
import RaisedButton from 'material-ui/RaisedButton';

import * as injectTapEventPlugin from 'react-tap-event-plugin';

// Needed for onTouchTap
// http://stackoverflow.com/a/34015469/988941
injectTapEventPlugin();

export interface HelloProps { compiler: string; framework: string;}

// 'HelloProps' describes the shape of props.
// State is never set so we use the 'undefined' type.
export class Hello extends React.Component<HelloProps, undefined> {
    render() {
        return <div>
            <h1>Hello from {this.props.compiler} and {this.props.framework}</h1>
            <RaisedButton label="Default" />
        </div>;
    }
}