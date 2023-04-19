import {Text, StyleSheet, View, Pressable} from 'react-native';
import {useEffect, useState} from "react";

export default function Play() {
    const [response, setResponse] = useState('');
    const [color, setColor] = useState('grey');

    useEffect(() => {
        if (response !== '') {
            if (response === 'blanc') {
                setColor('green');
            } else {
                alert('Mauvaise réponse !')
            }
        }
    }, [response]);

    return (
        <View style={styles.container}>
            <Text>Score : 0</Text>
            <Text style={styles.title}>Quelle est la couleur du cheval blanc d'Henry IV ?</Text>
            <Pressable style={[styles.pressable]} onPress={() => setResponse('bleu')}>
                <Text style={styles.colorWhite}> Bleu </Text>
            </Pressable>
            <Pressable style={[styles.pressable, {backgroundColor: color}]} onPress={() => {
                setColor('green');
                setResponse('blanc')
            }}>
                <Text style={styles.colorWhite}> Blanc </Text>
            </Pressable>
            <Pressable id={'good'} style={[styles.pressable]} onPress={() => setResponse('rouge')}>
                <Text style={styles.colorWhite}> Rouge </Text>
            </Pressable>
            <Pressable style={[styles.pressable]} onPress={() => setResponse('jaune')}>
                <Text style={styles.colorWhite}> Jaune </Text>
            </Pressable>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        marginTop: 30,
    },

    title: {
        width: 350,
        fontSize: 30,
        fontWeight: 'bold',
        marginTop: 20,
    },

    pressable: {
        width: 350,
        height: 50,
        borderRadius: 5,
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 20,
        backgroundColor: 'grey',
    },

    colorWhite: {
        color: 'white',
    }
});