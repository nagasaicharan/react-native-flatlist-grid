import React from 'react';
import {Modal, StyleSheet, View, Text, Image, Dimensions} from 'react-native';
import ImageZoom from 'react-native-image-pan-zoom';

const ImageModal = ({isVisible = false, closeModal = () => {}, imageUrl}) => {
  return (
    <Modal
      animationType="slide"
      transparent={true}
      visible={isVisible}
      onRequestClose={() => {
        closeModal();
      }}>
      <View style={styles.containerStyle}>
        <View style={styles.cardView}>
          <ImageZoom
            cropWidth={Dimensions.get('window').width - 50}
            cropHeight={'90%'}
            imageWidth={200}
            imageHeight={200}>
            <Image
              style={{width: '100%', height: '100%'}}
              source={{
                uri: imageUrl,
              }}
              resizeMode={'cover'}
            />
          </ImageZoom>
          <Text
            onPress={() => {
              closeModal();
            }}>
            Close Modal
          </Text>
        </View>
      </View>
    </Modal>
  );
};
const styles = StyleSheet.create({
  containerStyle: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  cardView: {
    margin: 20,
    backgroundColor: 'white',
    borderRadius: 20,
    paddingVertical: 35,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
});
export default ImageModal;
