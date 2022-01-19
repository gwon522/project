import { createAction, handleActions } from 'redux-actions'
import produce from 'immer';

export const START_LOADING = 'START_LOADING';
export const END_LOADING = 'END_LOADING';

export const startLoading = createAction(START_LOADING);
export const endLoading = createAction(END_LOADING);

const initialState = {};

//로딩 표현위한 로딩 리듀서
const reducer = handleActions(
    {
        [START_LOADING]: (state, action) => {
            return produce(state, draft => {
                draft[action.payload.type] = true;
            });
        },
        [END_LOADING]: (state, action) => {
            return produce(state, draft => {
                draft[action.payload.type] = false;
            });
        }
    },
    initialState
);

export default reducer;