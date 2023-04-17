import {Image, StyleSheet, Text, View, Pressable, TextInput, Button} from 'react-native';
import React, {useState, useEffect} from 'react';
import {launchImageLibraryAsync, MediaTypeOptions} from "expo-image-picker";

export default function Options({navigation, route: {params}}) {
    const [image, setImage] = useState(null);

    const getImage = async () => {
        let result = await launchImageLibraryAsync({
            mediaTypes: MediaTypeOptions.Images,
            allowsEditing: true,
            base64: true,
            aspect: [4, 3],
            quality: 1,
        });

        if (!result.canceled) {
            setImage(result.assets[0]);
        }
    };

    return (
        <View style={styles.container}>
            <Button title={'Montres nous ta boT intérieur'} onPress={getImage} />
            {image && <Image source={image} style={{width: 200, height: 200}} />}
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