import createRequestAction from 'utils/createRequestAction';
import { handleActions } from 'redux-actions';
import produce from 'immer';

export const homeActions = createRequestAction('Home');

const initialState = {
    homeSuccess: false,
    homeError: '',
    result: [],
    type: '',
};

const reducer = handleActions(
    {
        [homeActions.REQUEST]: (state, action) => state,
        [homeActions.SUCCESS]: (state, action) => {
            return produce(state, (draft) => {
                draft.homeSuccess = true;
                draft.result = action.payload.result;
            });
        },
        [homeActions.FAILURE]: (state, action) => {
            return produce(state, (draft) => {
                draft.homeError = action.payload.error;
            });
        },
    },
    initialState,
);

export default reducer;
