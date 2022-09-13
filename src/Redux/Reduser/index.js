import { combineReducers } from 'redux';
import { categoryReducer } from './Categary.reduser';
export const rootReducer = combineReducers({
    Category: categoryReducer
})