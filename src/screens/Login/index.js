import React from "react";
import { Image, Text, TouchableOpacity, View } from "react-native";
import ImageBackgroundComponent from "../../components/ImageBackground";
import styles from "./style";
import images from "../../utils/images";
import Colors from "../../utils/Colors";

const Login = () => {
    return (
        <ImageBackgroundComponent style={styles.background}>
            <View style={styles.container}>
                <Image source={images.ic_login} style={styles.imageStyle} resizeMode="contain" />
                <View style={styles.card}>
                    <Text style={styles.headingText}>{"Login with"}</Text>
                </View>
                <TouchableOpacity style={styles.button} onPress={() => { }}>
                    <View style={styles.buttonContent}>
                        <Text style={styles.buttonText}>{"Mobile number"}</Text>
                    </View>
                </TouchableOpacity>

                <TouchableOpacity style={[styles.button, { marginTop: 10, backgroundColor: Colors.White, borderWidth: 1, borderColor: Colors.Blue }]} onPress={() => { }}>
                    <View style={styles.buttonContent}>
                        <Text style={[styles.buttonText, { color: Colors.Blue }]}>{"Email id"}</Text>
                    </View>
                </TouchableOpacity>
            </View>
        </ImageBackgroundComponent >
    )
}

export default Login;