import {Image, StyleSheet, Text, View, Pressable} from 'react-native';
import {useFonts} from 'expo-font';
import {createIconSetFromIcoMoon} from '@expo/vector-icons';
import {faker} from '@faker-js/faker';

const Icon = createIconSetFromIcoMoon(
    require('../../assets/fonts/icomoon/selection.json'),
    'icoMoon',
    'icomoon.ttf');

export default function Home({navigation, route: {params}}) {
    const [fontsLoaded] = useFonts({
        icoMoon: require('../../assets/fonts/icomoon/icomoon.ttf'),
    });
    if (!fontsLoaded) {
        return null;
    }

    return (
        <View style={styles.container}>
            <Image
                style={styles.mainLogo}
                source={require('../../assets/images/quizz.jpg')}
            />
            <Text style={styles.title}>Bienvenue {params.userName} dans Quizz Game !</Text>
            <Pressable style={[styles.pressable, styles.textIcon, styles.bgBlue]} onPress={() =>
                navigation.navigate('Play', {'userName': params.userName})
            }>
                <Icon name={'dice'} size={20} color={'white'}/>
                <Text style={styles.colorWhite}>
                    Commencer
                </Text>
            </Pressable>
            <Pressable style={[styles.pressable, styles.textIcon, styles.bgGreen]}>
                <Icon name={'trophy'} size={20} color={'white'}/>
                <Text style={styles.colorWhite}>
                    Classement
                </Text>
            </Pressable>
            <Pressable style={[styles.pressable, styles.textIcon, styles.bgGrey]} onPress={() =>
                navigation.navigate('Options', {'userName': params.userName})
            }>
                <Icon name={'equalizer'} size={20} color={'white'}/>
                <Text style={styles.colorWhite}>
                    Options
                </Text>
            </Pressable>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        marginTop: 30,
    },

    mainLogo: {
        width: 350,
        height: 250,
    },

    pressable: {
        width: 350,
        height: 50,
        borderRadius: 5,
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 20,
    },

    title: {
        width: 350,
        fontSize: 30,
        fontWeight: 'bold',
        marginTop: 20,
    },

    textIcon: {
        justifyContent: 'center',
        alignItems: 'center',
    },

    bgBlue: {
        backgroundColor: 'blue',
    },

    bgGreen: {
        backgroundColor: 'green',
    },

    bgGrey: {
        backgroundColor: 'grey',
    },

    colorWhite: {
        color: 'white',
    }

});