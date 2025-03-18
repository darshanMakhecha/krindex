import { Appearance, Dimensions, useColorScheme } from 'react-native';
import { moderateScale } from 'react-native-size-matters'


export function normalize(size) {
  return moderateScale(size)
}

export const height = Dimensions.get("window").height;

export const IsDevice = () => {
  const DEVICE_WIDTH = Dimensions.get('window').width;
  const relativeWidth = num => (DEVICE_WIDTH * num) / 100;

  if (relativeWidth(100) < 513) {
    return true;
  } else {
    return false;
  }
};

export default function getThemeMode() {
  return useColorScheme();
}