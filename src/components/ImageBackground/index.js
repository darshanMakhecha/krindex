import React from 'react';
import { ImageBackground, StyleSheet } from 'react-native';
import images from '../../utils/images';
import getThemeMode from '../../utils/Normalize';

const ImageBackgroundComponent = ({ source, style, children }) => {
  const colorScheme = getThemeMode();

  return (
    <ImageBackground source={source ?? (colorScheme === 'dark' ? images.dark_bg : images.light_bg)} style={[styles.imageBackground, style]}>
      {children}
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  imageBackground: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default ImageBackgroundComponent;
