import createRequestAction from 'utils/createRequestAction';
import { handleActions } from 'redux-actions';
import produce from 'immer';

export const loginActions = createRequestAction('LOGIN');

const initialState = {
    loginSuccess: false,
    loginError: '',
    result: [],
    type: '',
};

const reducer = handleActions(
    {
        [loginActions.REQUEST]: (state, _action) => state,
        [loginActions.SUCCESS]: (state, action) => {
            return produce(state, (draft) => {
                draft.loginSuccess = action.payload.result.loginSuccess;
                draft.result = action.payload.result.result;
                draft.loginError = action.payload.result.loginError;
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