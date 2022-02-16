import createRequestAction from 'utils/createRequestAction';
import { handleActions } from 'redux-actions';
import produce from 'immer';

export const loginActions = createRequestAction('LOGIN');

const initialState = {
    loginSuccess: false,
    token: '',
    id: '',
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
                draft.id = action.payload.result.id;
            });
        },
        [loginActions.FAILURE]: (state, action) => {
            return produce(state, (draft) => {
                draft.loginError = action.payload.error;
            });
        },
    },
    initialState,
);

export default reducer;