import React, {useState, useEffect, useMemo} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import HomeScreen from './src/screens/HomeScreen';
import RoomScreen from './src/screens/RoomScreen';
import SettingScreen from './src/screens/SettingScreen';
import ProfileScreen from './src/screens/ProfileScreen';
import AboutScreen from './src/screens/AboutScreen';
import {View, StyleSheet, ActivityIndicator} from "react-native";
import {createStackNavigator} from "@react-navigation/stack";
import SignInScreen from "./src/screens/SignInScreen";

const Stack = createStackNavigator();

function App() {
    const [isLoading, setIsLoading] = useState(true);
    const [userToken, setUserToken] = useState(null);

    const authContext = useMemo(() => ({
        signIn: () => {
            setUserToken('aaa');
            setIsLoading(false);
        },
        signOut: () => {
            setUserToken(null);
            setIsLoading(false);
        },
        signUp: () => {
            setUserToken('123');
            setIsLoading(false);
        },
    }));

    useEffect(() => {
        setTimeout(() =>{
            setIsLoading(false);
        }, 1000);
    }, []);

    if( isLoading ) {
        return(
            <View style = {styles.loading}>
                <ActivityIndicator size="large" color="#874356"/>
            </View>
        );
    }

    return (
            <NavigationContainer>
                <Stack.Navigator
                    initialRouteName="Login"
                    activeColor="#f0edf6"
                    inactiveColor="#3e2465"
                    barStyle={{
                        borderWidth: 0.5,
                        borderBottomWidth: 1,
                        backgroundColor: '#874356',
                        borderColor: 'transparent',
                        overflow: 'hidden',
                    }}
                >
                    <Stack.Screen
                        name="Home"
                        component={HomeScreen}
                        options={{headerShown:false}}
                    />
                    <Stack.Screen
                        name="Room"
                        component={RoomScreen}
                        options={{headerShown:false}}
                    />
                    <Stack.Screen
                        name="Login"
                        component={SignInScreen}
                        options={{headerShown:false}}
                    />
                    <Stack.Screen name="Settings" component={SettingScreen}/>
                    <Stack.Screen name="Profile" component={ProfileScreen}/>
                    <Stack.Screen name="About" component={AboutScreen}/>
                </Stack.Navigator>
            </NavigationContainer>
    );
}

export default App;

const styles = StyleSheet.create({
    container: {
        backgroundColor: "blue"
    },
    loading: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
})