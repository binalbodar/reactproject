import { combineReducers } from 'redux';
import { addtocartReducer } from './Addtocart.reducer';
import { alertReduser } from './alert.reduser';
import { authReducer } from './auth.reducer';
import { cartReduser } from './Cart.reduser';
import { cartformReduser } from './Cartform.reduser';
import { categoryReducer } from './Categary.reduser';
import { ProductReduser } from './Product.reduser';
export const rootReducer = combineReducers({
    Category: categoryReducer,
    Product: ProductReduser,
    Cart: cartReduser,
    auth: authReducer,
    addtocart:addtocartReducer,
    alert: alertReduser,
    Cartform: cartformReduser
})