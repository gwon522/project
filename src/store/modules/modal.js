
import { createAction, handleActions } from 'redux-actions';
import { produce } from 'immer';
export const SHOW_MODAL = "modal/SHOW_MODAL";
export const CLOSE_MODAL = "modal/CLOSE_MODAL";

export const showModal = createAction(SHOW_MODAL, text => ({ componentName: text }));
export const closeModal = createAction(CLOSE_MODAL);

const initialState = {
    show: false,
    componentName: null
};

const reducer = handleActions(
    {
        [SHOW_MODAL]: (state, action) => {
            return produce(state, draft => {
                draft.show = !state.show;
                draft.componentName = action.payload;
            });
        },
        [CLOSE_MODAL]: (state, action) => {
            return produce(state, draft => {
                draft.show = !state.show;
                draft.componentName = null;
            })
        }
    },
    initialState
)

export default reducer;