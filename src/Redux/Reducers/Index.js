import ImageReducer from './Images/Images.reducer';
import {combineReducers} from 'redux';

export default combineReducers({images: ImageReducer});
