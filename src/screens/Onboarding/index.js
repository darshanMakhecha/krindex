import React, { useRef, useState } from 'react';
import {
    Dimensions,
    FlatList,
    Image,
    Text,
    TouchableOpacity,
    View,
} from 'react-native';
import images from '../../utils/images';
import styles from './style';
import routes from '../../routes';
import ImageBackgroundComponent from '../../components/ImageBackground';
import { color } from 'react-native-elements/dist/helpers';
import Colors from '../../utils/Colors';
import getThemeMode from '../../utils/Normalize';

const data = [
    {
        id: 1,
        image: images.onboarding_st_1,
        title: 'Welcome to',
        title1: 'Krindex',
        description: 'Empowering farmers with smart financial solutions for a prosperous harvest.',
    },
    {
        id: 2,
        image: images.onboarding_st_2,
        title: 'Buyer and User are at ',
        title1: 'one place',
        description: 'Empowering farmers with smart financial solutions for a prosperous harvest.',
    },
    {
        id: 3,
        image: images.onboarding_st_3,
        title: 'Finance on your',
        title1: 'figure tips',
        description: 'Empowering farmers with smart financial solutions for a prosperous harvest.',
    },
];

const Onboarding = ({ navigation }) => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const mode = getThemeMode();
    const flatListRef = useRef(null);
    const { width } = Dimensions.get('screen');

    const onMomentumScrollEnd = (event) => {
        const contentOffsetX = event.nativeEvent.contentOffset.x;
        const index = Math.round(contentOffsetX / width);
        setCurrentIndex(index);
    };

    const scrollToIndex = (index) => {
        if (currentIndex < data?.length - 1) {
            setCurrentIndex(currentIndex + 1);
            if (flatListRef?.current) {
                flatListRef?.current?.scrollToIndex({
                    index: currentIndex + 1,
                    animated: true,
                });
            }
        }
        if (index == 2) {
            navigation.navigate(routes.LOGIN);
        }
    };


    const renderItem = ({ item, index }) => (
        <View style={styles.container}>
            <Image source={item.image} style={styles.imageStyle} resizeMode="contain" />
            <View style={styles.card}>
                <Text style={styles.title}>{item.title}</Text>
                <Text style={styles.title}>{item.title1}</Text>
                <Text style={styles.description}>{item.description}</Text>
                <TouchableOpacity style={styles.button} onPress={() => scrollToIndex(index)}>
                    <View style={styles.buttonContent}>
                        <Text style={styles.buttonText}>{index === 0 ? "Start" : ""}</Text>
                        <Image source={images.ic_arrow} style={[styles.arrowIcon, { marginLeft: index === 0 ? 10 : 0 }]} />
                    </View>
                </TouchableOpacity>
            </View>
        </View>
    );

    return (
        <ImageBackgroundComponent>
            <View style={{ flex: 1 }}>
                <FlatList
                    ref={flatListRef}
                    data={data}
                    renderItem={renderItem}
                    keyExtractor={(item) => item.id.toString()}
                    horizontal
                    showsHorizontalScrollIndicator={false}
                    pagingEnabled
                    scrollEventThrottle={16}
                    onMomentumScrollEnd={onMomentumScrollEnd}
                />
            </View>
        </ImageBackgroundComponent>
    );
};

export default Onboarding;
