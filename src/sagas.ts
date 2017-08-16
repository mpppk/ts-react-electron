import {Action, createAction} from 'redux-actions';
import {delay} from 'redux-saga';
import {all, call, put, takeEvery, takeLatest} from 'redux-saga/effects';
import {ActionType} from './actionCreators';

function* watchAsyncIncrement(): any {
    yield delay(1000);
    yield put(createAction(ActionType.INCREMENT)());
}

export function* watchIncrementAsync() {
    yield takeEvery(ActionType.ASYNC_INCREMENT, watchAsyncIncrement);
}

// single entry point to start all Sagas at once
export default function* rootSaga() {
    yield all([
        watchIncrementAsync(),
    ]);
}
