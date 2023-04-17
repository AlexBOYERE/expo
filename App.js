import { StatusBar } from 'expo-status-bar';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Home from './screens/Home';

const Routes = createNativeStackNavigator();

export default function App() {
    return (
        <NavigationContainer>
            <Routes.Navigator>
                <Routes.Screen name="Home" component={Home}/>
            </Routes.Navigator>
            <statusBar style="auto"/>
        </NavigationContainer>
    );
}