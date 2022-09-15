import { combineReducers } from 'redux';
import { categoryReducer } from './Categary.reduser';
import { ProductReduser } from './Product.reduser';
export const rootReducer = combineReducers({
    Category: categoryReducer,
    Product: ProductReduser
})