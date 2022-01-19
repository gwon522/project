
import { createAction, handleActions } from 'redux-actions';

// 나중에 기능구현

const LOGIN = 'auth/LOGIN';

export const LoginAction = createAction(LOGIN);

const initState = {};

const auth = handleActions(
    {
        [LOGIN]: (state, action) => state,
    },
    initState
);

export default auth;