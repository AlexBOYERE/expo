import {Image, StyleSheet, Text, View, Pressable} from 'react-native';

import { faker } from '@faker-js/faker';

export default function Home({navigation, route: {params}}) {
    return (
        <View style={styles.container}>
            <Image
                style={styles.mainLogo}
                source={require('../../assets/images/quizz.jpg')}
            />
            <Pressable style={[styles.pressable, styles.bgBlue]} onPress={() => console.log('home : ' + params.userName) }>
                <Text style={styles.colorWhite}>Dumper Username</Text>
            </Pressable>
            <Text style={styles.title}>Bienvenue { params.userName } dans Quizz Game !</Text>
            <Pressable style={[styles.pressable, styles.bgBlue]}>
                <Text style={styles.colorWhite}>Commencer</Text>
            </Pressable>
            <Pressable style={[styles.pressable, styles.bgGreen]}>
                <Text style={styles.colorWhite}>Classement</Text>
            </Pressable>
            <Pressable style={[styles.pressable, styles.bgGrey]} onPress={() =>
                navigation.navigate('Options', {'userName': params.userName})
            }>
                <Text style={styles.colorWhite}>Options</Text>
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