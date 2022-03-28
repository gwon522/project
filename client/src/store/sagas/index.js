import { all, call } from 'redux-saga/effects'
import topic from './topic';
import user from './user';
import board from './board';

export default function* rootSaga() {
    yield all([call(topic), call(user), call(board)]);
}