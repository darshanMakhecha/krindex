import React, { useMemo } from 'react';
import propTypes from 'prop-types';
import { View, StyleSheet, useColorScheme } from 'react-native';
import { SF, SH, SW, Fonts, Colors, fontPercent } from '../../utils';
import { Input } from 'react-native-elements';
import Typography from './Typography';
import AppColors from '../../utils/AppColors';

function Inputs({
  title,
  placeholder,
  titleStyle,
  inputStyle,
  onChangeText,
  value,
  placeholderTextColor,
  inputprops,
  placeholderStyle,
  onBlur,
  onFocus,
  inputType,
  autoFocus,
  secureTextEntry,
  maxLength,
  leftIcon = {},
  rightIcon = {},
  errorMessage = '',
  disabled = false,
  required = false,
  containerStyle,
  onEndEditing,
  inputContainerStyle,
  numberOfLines,
  errors,
  touched,
  errTitle,
  mainContainerStyle,
  multiline,
  textAlignVertical,
}) {
  const theme = useColorScheme();
  const isDarkTheme = theme === 'dark';

  const styles = useMemo(
    () =>
      StyleSheet.create({
        container: { width: '100%', ...containerStyle, marginBottom: SH(0) },
        inputContainerStyle: {
          borderBottomWidth: SH(0),
          width: '100%',
          ...inputContainerStyle,
        },
        input_style: {
          width: '100%',
          borderColor: "#EDEDED",
          borderRadius: 8,
          fontSize: SF(12),
          fontWeight: '600',
          marginBottom: SH(0),
          fontFamily: Fonts.Montserrat_Medium,
          color: Colors.black_text_color,
          paddingVertical: SH(8),
          paddingHorizontal: SH(10),
          paddingBottom: SH(2),
          backgroundColor: "#F9F9F9",
          // backgroundColor: Colors.backgound_white,
          //borderRadius: SH(7),
          paddingTop: SH(4),
          borderWidth: SH(1),
          textAlign: 'left',
          ...inputStyle,
        },
        labelStyle: {
          width: '100%',
          fontSize: SF(13),
          color: Colors.gray_text_color,
          fontFamily: Fonts.Montserrat_Regular,
          // textTransform: title == "GST Number" ? "capitalize" : "none",
          paddingHorizontal: SW(5),
          ...titleStyle,
          fontWeight: '500',
          paddingVertical: SH(2),
          marginTop: SH(4)
        },
        placeholderStyle: {
          fontSize: SF(10),
          color: AppColors.red,
          fontFamily: Fonts.Montserrat_Medium,
        },
        errorStyle: {
          color: Colors.theme_backgound,
          fontFamily: Fonts.Montserrat_Medium,
          height: 0,
        },
      }),
    [title, titleStyle, inputStyle, Colors],
  );
  return (
    <View style={[styles.container, mainContainerStyle]}>
      <Input
        label={title + (required ? ' *' : '')}
        placeholder={placeholder}
        onChangeText={onChangeText}
        leftIcon={leftIcon}
        placeholderTextColor={"#888888"}
        rightIcon={rightIcon}
        numberOfLines={numberOfLines}
        errorMessage={errorMessage}
        // placeholderStyle={styles.placeholderStyle}
        disabled={disabled}
        onFocus={() => onFocus()}
        onBlur={onBlur}
        autoFocus={autoFocus}
        keyboardType={!inputType ? 'default' : inputType}
        secureTextEntry={secureTextEntry}
        value={value}
        selectionColor={Colors.theme_backgound}
        maxLength={maxLength}
        {...inputprops}
        multiline={multiline}
        textAlignVertical={textAlignVertical}
        errorStyle={styles.errorStyle}
        inputStyle={styles.input_style}
        // editable={editable}
        labelStyle={styles.labelStyle}
        inputContainerStyle={[styles.inputContainerStyle, inputContainerStyle]}
        onEndEditing={e => onEndEditing(e)}
      />
      {errors && touched && (
        <Typography
          title={errTitle}
          txtStyle={{
            color: 'red',
            fontSize: fontPercent(1.7),
            fontFamily: Fonts.Poppins_Regular,
            width: '93%',
            alignSelf: 'center',
          }}
        />
      )}
    </View>
  );
}

Inputs.defaultProps = {
  title: '',
  placeholder: '',
  titleStyle: {},
  inputStyle: {},
  onChangeText: () => { },
  onFocus: () => { },
  onBlur: () => { },
  value: '',
  textprops: {},
  inputprops: {},
  inputType: null,
  autoCompleteType: '',
  onEndEditing: () => { },
};

Inputs.propTypes = {
  title: propTypes.string,
  autoCompleteType: propTypes.string,
  placeholder: propTypes.string,
  titleStyle: propTypes.shape({}),
  inputStyle: propTypes.shape({}),
  onChangeText: propTypes.func,
  value: propTypes.string,
  textprops: propTypes.object,
  inputprops: propTypes.object,
  onFocus: propTypes.func,
  onBlur: propTypes.func,
  inputType: propTypes.any,
  onEndEditing: propTypes.func,
};

export default Inputs;
