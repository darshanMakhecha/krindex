import React, { useMemo } from 'react';
import { Button } from 'react-native-elements';
import { TouchableOpacity, StyleSheet, useColorScheme } from 'react-native';
import { Fonts, SF, SH, SW, Colors, widthPercent } from '../../utils';

function Buttons(props) {
  const theme = useColorScheme();
  const isDarkTheme = theme === 'dark';
  const {
    title,
    onPress,
    buttonStyle,
    disable,
    buttonTextStyle,
    icon,
    spacedImages,
    linearGradientProps,
    ViewComponent,
  } = props;
  const styles = useMemo(
    () =>
      StyleSheet.create({
        buttonStyle: {
          backgroundColor: Colors.theme_backgound,
          borderRadius: SH(7),
          // width: widthPercent(90),
          alignSelf: 'center',
          marginTop: 10,
          marginHorizontal: SW(80),
          width: widthPercent(70)
        },
        buttonTextStyle: {
          color: Colors.White_text_color,
          fontFamily: Fonts.Montserrat_Medium,
          fontSize: SF(12),
          fontWeight: '600',
          lineHeight: SH(24),
          textTransform: "uppercase"
        },
        buttonViewStyle: {
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: spacedImages ? 'space-around' : 'center',
          width: '100%',
        },
        LeftImageViewStyle: {
          marginVertical: SW(5),
        },
      }),
    [disable, spacedImages],
  );

  return (
    <TouchableOpacity>
      <Button
        title={title}
        onPress={onPress}
        icon={icon}
        ViewComponent={ViewComponent}
        linearGradientProps={linearGradientProps}
        buttonStyle={[styles.buttonStyle, { ...buttonStyle }]}
        titleStyle={[styles.buttonTextStyle, { ...buttonTextStyle }]}
      />
    </TouchableOpacity>
  );
}
export default Buttons;
