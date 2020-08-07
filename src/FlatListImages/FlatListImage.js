import React, {useEffect, useState, Fragment} from 'react';
import {View, FlatList, ActivityIndicator} from 'react-native';
import {getImages} from '../Redux/Reducers/Images/Images.actions';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import ImageView from './SubComponents/ImageView';
import SwitchButton from './SubComponents/SwitchButton';
import ImageModal from './SubComponents/ImageModal';
const FlatListImage = ({getImages, imagesData}) => {
  const [loading, setLoading] = useState(false);
  const [isGridView, setIsGridView] = useState(false);
  const [modalImageObj, setModalImageObj] = useState({
    isVisible: false,
    imageUrl: '',
  });
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
  const renderimageObj = (imageObj = {}) => {
    return (
      <ImageView
        imageObj={imageObj}
        isGridView={true}
        onPressItem={() => {
          setModalImageObj({
            isVisible: true,
            imageUrl: imageObj.url,
          });
        }}></ImageView>
    );
  };
  return (
    <View style={{flex: 1}}>
      {!loading ? (
        <Fragment>
          <SwitchButton
            onChange={(value) => {
              setIsGridView(value);
            }}
            selected={isGridView}
            data={[
              {
                value: false,
                label: 'Veritical',
              },
              {
                label: 'Grid',
                value: true,
              },
            ]}
          />
          <FlatList
            data={imagesData}
            key={isGridView ? 'gridview' : 'vertical'}
            numColumns={isGridView ? 3 : 0}
            contentContainerStyle={{paddingTop: 20}}
            initialNumToRender={10}
            renderItem={({item}) => {
              return renderimageObj(item);
            }}
            removeClippedSubviews={true}
            keyExtractor={(item) => {
              return item.id.toString();
            }}></FlatList>
        </Fragment>
      ) : (
        <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
          <ActivityIndicator size="large" />
        </View>
      )}
      <ImageModal
        isVisible={modalImageObj.isVisible}
        imageUrl={modalImageObj.imageUrl}
        closeModal={() => {
          setModalImageObj({isVisible: false, imageUrl: ''});
        }}
      />
    </View>
  );
};
const mapStateToProps = (state) => ({...state.images});

const mapDispatchProps = (dispatch) => {
  return bindActionCreators({getImages}, dispatch);
};

export default connect(mapStateToProps, mapDispatchProps)(FlatListImage);
