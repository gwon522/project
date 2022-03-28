import { takeEvery } from 'redux-saga/effects';
import { loginActions } from 'store/modules/user';
import createRequestSaga from 'utils/createRequestSaga';
import { LoginAPI } from 'store/apis/user';

const saga = createRequestSaga(loginActions, LoginAPI);

export default function* login() {
    yield takeEvery(loginActions.REQUEST, saga);
}