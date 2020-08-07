import React, {useEffect, useState} from 'react';
import {View} from 'react-native';
import {getImages} from '../Redux/Reducers/Images/Images.actions';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
const FlatListImage = ({getImages, imagesData}) => {
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    getImagesData();
  }, []);
  const getImagesData = async () => {
    setLoading(true);
    try {
      await getImages();
    } finally {
      setLoading(false);
    }
  };
  return <View></View>;
};
const mapStateToProps = (state) => ({...state.images});

const mapDispatchProps = (dispatch) => {
  return bindActionCreators({getImages}, dispatch);
};

export default connect(mapStateToProps, mapDispatchProps)(FlatListImage);
