import { combineReducers } from 'redux';
import { authReducer } from './auth.reducer';
import { cartReduser } from './Cart.reduser';
import { categoryReducer } from './Categary.reduser';
import { NextpageReduser } from './Nextpage.reducer';
import { ProductReduser } from './Product.reduser';
export const rootReducer = combineReducers({
    Category: categoryReducer,
    Product: ProductReduser,
    Cart: cartReduser,
    auth: authReducer,
    Nextpage: NextpageReduser
})