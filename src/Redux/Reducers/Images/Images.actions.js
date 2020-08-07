import {types} from './Images.types';
import {doGet} from '../../../Server';
import Globals from '../../../Utils/Globals';

export const actions = {
  /** Action for adding Image */
  addImages: (imageData) => (dispatch) => {
    dispatch({
      type: types.ADD_IMAGES_DATA,
      payload: imageData,
    });
  },
};

export const getImages = () => {
  return async (dispatch) => {
    try {
      let imageResponse = await doGet(Globals.GET_IMAGES);
      dispatch(actions.addImages(imageResponse));
      return imageResponse;
    } catch (error) {
      throw error;
    }
  };
};
