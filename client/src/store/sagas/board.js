import { takeEvery } from 'redux-saga/effects';
import { boardActions } from 'store/modules/board';
import createRequestSaga from 'utils/createRequestSaga';
import boardListAPI from 'store/apis/board';


const saga = createRequestSaga(boardActions, boardListAPI);

export default function* boardList() {
    yield takeEvery(boardActions.REQUEST, saga);
}