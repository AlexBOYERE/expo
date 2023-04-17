import {Image, StyleSheet, Text, View, Pressable, TextInput} from 'react-native';

export default function Options({navigation, route: {params}}) {
    console.log('Options : ' + params.userName);
    return (
        <View style={styles.container}>
            <TextInput
                style={styles.input}
                placeholder="Nom d'utilisateur"
                value={params?.userName || ''}
                keyboardType={'default'}
            />
            <Pressable style={[styles.pressable, styles.bgGreen]} onPress={
                () => navigation.navigate('Home')
            }>
                <Text style={styles.colorWhite}>Valider</Text>
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

    input: {
        width: 350,
        height: 50,
        borderRadius: 5,
        borderWidth: 1,
        borderColor: 'grey',
        marginTop: 20,
        paddingLeft: 10,
    },

    pressable: {
        width: 350,
        height: 50,
        borderRadius: 5,
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 20,
    },

    bgGreen: {
        backgroundColor: 'green',
    },

    colorWhite: {
        color: 'white',
    },
});