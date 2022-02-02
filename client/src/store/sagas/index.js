import { all, call } from 'redux-saga/effects'
import topic from './topic';


export default function* rootSaga() {
    yield all([call(topic)]);
}