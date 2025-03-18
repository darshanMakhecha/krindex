import { StyleSheet } from 'react-native';
import { IsDevice, normalize } from '../../utils/Normalize';
import Colors from '../../utils/Colors';


export default StyleSheet.create({
  mainContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  },
  imageStyle: {
    width: IsDevice() ? normalize(300) : normalize(400),
    height: IsDevice() ? normalize(300) : normalize(400),
    resizeMode: "contain",
    marginBottom: "30%",
  },
  container: {
    alignItems: "center",
    justifyContent: "center",
    marginHorizontal: normalize(30)
  },
  card: {
    backgroundColor: Colors.Transparent,
    padding: normalize(20),
    borderRadius: normalize(15),
    alignItems: "center",
    width: "100%",
    position: "absolute",
    bottom: normalize(10),
    borderWidth: 1,
    borderColor: Colors.Light_gray_board,
  },
  title: {
    color: Colors.White,
    fontSize: IsDevice() ? normalize(24) : normalize(27),
  },
  description: {
    color: Colors.Light_gray,
    textAlign: "center",
    marginTop: normalize(10),
    marginBottom: normalize(20),
    fontSize: IsDevice() ? normalize(15) : normalize(18),
  },
  button: {
    backgroundColor: Colors.Blue,
    paddingVertical: normalize(12),
    paddingHorizontal: normalize(20),
    borderRadius: 10,
  },
  buttonText: {
    color: Colors.White,
    fontSize: IsDevice() ? normalize(16) : normalize(19),
    fontWeight: "bold",
  },
  buttonContent: {
    flexDirection: "row",
    alignItems: "center",
  },
  arrowIcon: {
    width: normalize(20),
    height: normalize(20),
    resizeMode: "contain",
  },

});
