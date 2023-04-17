import {StatusBar} from 'expo-status-bar';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {faker} from '@faker-js/faker';

import Home from './screens/Home/Home';
import Options from './screens/Options/Options';

const Routes = createNativeStackNavigator();

const Username = faker.internet.userName();
export default function App() {
    return (
        <NavigationContainer>
            <Routes.Navigator>
                <Routes.Screen name="Home" component={Home} initialParams={{userName: Username}}/>
                <Routes.Screen name="Options" component={Options}/>
            </Routes.Navigator>
            <StatusBar style="auto"/>
        </NavigationContainer>
    );
}