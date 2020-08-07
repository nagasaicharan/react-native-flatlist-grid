import React from 'react';
import {Image, Text, StyleSheet, Pressable} from 'react-native';
const ImageView = ({imageObj, isGridView, onPressItem = () => {}}) => {
  return (
    <Pressable
      onPress={() => {
        onPressItem();
      }}
      style={[
        isGridView ? styles.gridViewStyle : null,
        styles.containerStyles,
      ]}>
      <Image style={styles.imageStyle} source={{uri: imageObj.url}}></Image>
      <Text style={styles.textStyle}>{imageObj.title}</Text>
    </Pressable>
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
