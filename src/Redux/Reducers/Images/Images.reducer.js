import {types} from './Images.types';

const INITIAL_STATE = {
  imagesData: [],
};

export default (state = INITIAL_STATE, action) => {
  const {payload = {}} = action;
  switch (action.type) {
    case types.ADD_IMAGES_DATA:
      return {...state, imagesData: payload};
    case types.REMOVE_DATA:
      return INITIAL_STATE;
    default:
      return state;
  }
};
