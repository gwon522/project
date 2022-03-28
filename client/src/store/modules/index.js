import { combineReducers } from 'redux';
import loading from './loading';
import user from './user';
import topic from './topic';
import board from './board';



//리듀서들 모음
export const rootReducer = combineReducers({
    loading,
    user,
    topic,
    board
});
