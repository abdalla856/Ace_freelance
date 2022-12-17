
import Users from './user'
import Blogs from './blog'
import Bills from './bill'
import {combineReducers} from 'redux';
export default combineReducers({
    Users :Users,
    Blogs :Blogs ,
    Bills :Bills
})