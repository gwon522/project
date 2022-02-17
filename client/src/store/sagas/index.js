import { all, call } from 'redux-saga/effects'
import topic from './topic';
import login from './login';
import board from './board';

export default function* rootSaga() {
    yield all([call(topic), call(login), call(board)]);
}