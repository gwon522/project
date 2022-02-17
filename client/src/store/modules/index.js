import { combineReducers } from 'redux';
import loading from './loading';
import login from './login';
import topic from './topic';
import board from './board';



//리듀서들 모음
export const rootReducer = combineReducers({
    loading,
    login,
    topic,
    board
});
