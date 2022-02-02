import createRequestAction from "utils/createRequestAction";
import { handleActions } from "redux-actions";
import produce from "immer";

export const topicActions = createRequestAction('TOPIC');

const initialState = {
    topicSuccess: false,
    topicError: '',
    result: [],
    type: '',
};

const reducer = handleActions(
    {
        [topicActions.REQUEST]: (state, action) => state,
        [topicActions.SUCCESS]: (state, action) => {
            return produce(state, draft => {
                draft.topicSuccess = true;
                draft.result = action.payload.result;
            });
        },
        [topicActions.FAILURE]: (state, action) => {
            return produce(state, draft => {
                draft.topicError = action.payload.error;
            });
        }
    },
    initialState,
);

export default reducer;