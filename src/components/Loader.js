import React from 'react';
import { ActivityIndicator, StyleSheet, View, Modal, Image } from 'react-native';
import AppColors from '../../utils/AppColors';
import { commonSty } from '../../commonSty/commonStyle';
import images from '../../image';
import { Colors, SH, SW } from '../../utils';

const Loader = ({ isVisible }) => {
  return (
    <>
      <Modal visible={isVisible} transparent={true} statusBarTranslucent>
        <View style={commonSty.modalContainer}>
          <View style={{
            paddingVertical: SH(13),
            paddingHorizontal: SW(17),
            borderRadius: 10,
            alignItems: 'center',
            justifyContent: 'center',
            backgroundColor: Colors.backgound_grey,
          }}>
            <Image source={images.logo} style={{ width: 50, height: 50, resizeMode: "contain" }} />
          </View>
          {/* <ActivityIndicator color={AppColors.black} size={60}  /> */}
        </View>
      </Modal>
    </>
  );
};

export default Loader;

const styles = StyleSheet.create({});
