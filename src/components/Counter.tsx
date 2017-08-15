import RaisedButton from 'material-ui/RaisedButton';
import * as React from 'react';
import {connect, Dispatch} from 'react-redux';
import {bindActionCreators} from 'redux';
import {Action, ActionFunction0} from 'redux-actions';
import {appActionCreator, AppActionCreator} from '../actionCreators';
import {ICounterState, IRootState} from '../reducer';

export interface ICounterProps {
    count?: number;
    actions?: {
        increment(): ActionFunction0<Action<void>>;
        decrement(): ActionFunction0<Action<void>>;
    };
}

export class Counter extends React.Component<ICounterProps, undefined> {
    constructor(props: ICounterProps) {
        super(props);
        this.incrementClickEvent = this.incrementClickEvent.bind(this);
        this.decrementClickEvent = this.decrementClickEvent.bind(this);
    }

    public render() {
        return (
            <div>
                <h1>Count: {this.props.count}</h1>
                <RaisedButton label='Increment' onClick={this.incrementClickEvent} />
                <RaisedButton label='Decrement' onClick={this.decrementClickEvent} />
            </div>
        );
    }

    private incrementClickEvent(e: React.MouseEvent<{}>) {
        if (typeof(this.props.actions) !== 'undefined') {
            return this.props.actions.increment();
        }
    }

    private decrementClickEvent(e: React.MouseEvent<{}>) {
        if (typeof(this.props.actions) !== 'undefined') {
            return this.props.actions.decrement();
        }
    }
}

function mapStateToProps(state: IRootState) {
    return  state.counter;
}

function mapDispatchToProps
<TDispatchProps extends {actions: AppActionCreator}, T>(dispatch: Dispatch<any>) {
    return { actions: bindActionCreators<AppActionCreator>(appActionCreator, dispatch) };
}

// tslint:disable-next-line variable-name
export const ConnectedCounter = connect<ICounterState, {actions: AppActionCreator}, ICounterProps>
(mapStateToProps, mapDispatchToProps)(Counter as any);
