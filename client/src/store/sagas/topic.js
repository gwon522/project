import { takeEvery } from 'redux-saga/effects';
import { topicActions } from 'store/modules/topic';
import createRequestSaga from 'utils/createRequestSaga';
import topicAPI from 'store/apis/topic';


const saga = createRequestSaga(topicActions, topicAPI);

export default function* topicList() {
    yield takeEvery(topicActions.REQUEST, saga);
}