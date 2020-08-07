import React from 'react';
import {View, Image, Text, StyleSheet} from 'react-native';
const ImageView = ({imageObj, isGridView}) => {
  return (
    <View
      style={[
        isGridView ? styles.gridViewStyle : null,
        styles.containerStyles,
      ]}>
      <Image style={styles.imageStyle} source={{uri: imageObj.url}}></Image>
      <Text style={styles.textStyle}>{imageObj.title}</Text>
    </View>
  );
};
const styles = StyleSheet.create({
  containerStyles: {
    marginBottom: 10,
  },
  gridViewStyle: {
    flex: 1 / 3,
  },
  textStyle: {
    padding: 10,
  },
  imageStyle: {width: '100%', height: 100},
});

export default ImageView;
