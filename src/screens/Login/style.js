import { StyleSheet } from 'react-native';
import { IsDevice, normalize } from '../../utils/Normalize';
import Colors from '../../utils/Colors';


export default StyleSheet.create({

    imageStyle: {
        width: IsDevice() ? normalize(500) : normalize(400),
        height: IsDevice() ? normalize(500) : normalize(400),
        resizeMode: "contain",
        marginBottom: 10,
    },
    card: {
        padding: normalize(20),
        alignItems: "center",
        width: "100%",
    },
    headingText: {
        color: Colors.Black,
        fontSize: IsDevice() ? normalize(30) : normalize(33),
    },
    button: {
        backgroundColor: Colors.Blue,
        paddingVertical: normalize(12),
        paddingHorizontal: normalize(20),
        borderRadius: 10,
        width: "100%"
    },
    buttonText: {
        color: Colors.White,
        fontSize: IsDevice() ? normalize(16) : normalize(19),
        fontWeight: "bold",
    },
    buttonContent: {
        alignSelf: "center",
    },
    container: {
        width: '90%',
        alignItems: 'center',
        padding: 20,
        borderRadius: 20,
    },

});
