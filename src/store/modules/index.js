import { combineReducers } from 'redux';
import loading from './loading';
import auth from './auth'



//리듀서들 모음
export const rootReducer = combineReducers({
    loading,
    auth,

});
