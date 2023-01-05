
import Users from './user'
import Blogs from './blog'
import Bills from './bill'
import Products from './product';
import Revewis from './review';
import Discounts from './discount';
import {combineReducers} from 'redux';
export default combineReducers({
    Users :Users,
    Blogs :Blogs ,
    Bills :Bills , 
    Products :Products,
    Reviews:Revewis , 
    Discounts:Discounts
})