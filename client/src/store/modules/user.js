import createRequestAction from 'utils/createRequestAction';
import { handleActions } from 'redux-actions';
import produce from 'immer';

export const loginActions = createRequestAction('LOGIN');
export const logoutActions = createRequestAction('LOGOUT');

const initialState = {
    loginSuccess: false,
    token: '',
    u_id: '',
    loginError: '',
    text: '',
    type: ''
};

const reducer = handleActions(
    {
        [loginActions.REQUEST]: (state, _action) => state,
        [loginActions.SUCCESS]: (state, action) => {
            return produce(state, (draft) => {
                draft.loginSuccess = action.payload.result.loginSuccess;
                draft.token = action.payload.result.token;
                draft.text = action.payload.result.text;
                draft.u_id = action.payload.result.u_id;
            });
        },
        [loginActions.FAILURE]: (state, action) => {
            return produce(state, (draft) => {
                draft.loginError = action.payload.error;
            });
        },
        [logoutActions.REQUEST]: (state, _action) => state,
        [logoutActions.SUCCESS]: (state, action) => {
            return produce(state, (draft) => {
                draft.loginSuccess = false;
                draft.token = '';
                draft.text = '로그아웃 되었습니다.';
                draft.u_id = '';
            })
        },
        [logoutActions.FAILURE]: (state, action) => {
            return produce(state, (draft) => {
                draft.loginError = '';
            });
        }
    },
    initialState,
);

export default reducer;