import { takeEvery } from 'redux-saga/effects';
import { loginActions } from 'store/modules/login';
import createRequestSaga from 'utils/createRequestSaga';
import loginAPI from 'store/apis/login';


const saga = createRequestSaga(loginActions, loginAPI);

export default function* login() {
    yield takeEvery(loginActions.REQUEST, saga);
}