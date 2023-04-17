import {Text, View} from 'react-native';

export default function Play({navigation, route: {params}}) {
    return(
        <View style={styles.container}>
            <Text style={styles.title}>Bienvenue {params.userName} dans Quizz Game !</Text>
        </View>
    )
}