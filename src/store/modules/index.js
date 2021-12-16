import { combineReducers } from 'redux';
import loading from './loading';
import auth from './auth'
import modal from './modal'


//리듀서들 모음
export const rootReducer = combineReducers({
    loading,
    auth,
    modal,
});
