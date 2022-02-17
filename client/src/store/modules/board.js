import createRequestAction from 'utils/createRequestAction';
import { handleActions } from 'redux-actions';
import produce from 'immer';

export const boardActions = createRequestAction('BOARD');

const initialState = {
    boardSuccess: false,
    boardError: '',
    result: [],
    type: '',
};

const reducer = handleActions(
    {
        [boardActions.REQUEST]: (state, _action) => state,
        [boardActions.SUCCESS]: (state, action) => {
            return produce(state, (draft) => {
                draft.boardSuccess = true;
                draft.result = action.payload.result;
            });
        },
        [boardActions.FAILURE]: (state, action) => {
            return produce(state, (draft) => {
                draft.boardError = action.payload.error;
            });
        },
    },
    initialState,
);

export default reducer;
