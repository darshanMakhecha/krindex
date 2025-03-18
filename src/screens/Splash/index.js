import React, { useEffect } from 'react';
import { StyleSheet, Image, ImageBackground } from 'react-native';
import images from '../../utils/images';
import { normalize } from '../../utils/Normalize';
import routes from '../../routes';
import ImageBackgroundComponent from '../../components/ImageBackground';

const Splash = ({ navigation }) => {
  useEffect(() => {
    const timer = setTimeout(() => {
      navigation.replace(routes.ONBOARDING);
    }, 1500);

    return () => clearTimeout(timer);
  }, [navigation]);

  return (
    <ImageBackgroundComponent>
      <Image source={images.krindex_logo} style={{ height: normalize(200), width: normalize(200) }} resizeMode="contain" />
    </ImageBackgroundComponent>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 24,
    fontWeight: 'bold',
  },
});

export default Splash;
