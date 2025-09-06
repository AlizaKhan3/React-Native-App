import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Home from "../screens/dashboard/Home";
import About from "../screens/About";
import Notifications from "../screens/dashboard/Notifications";
import Profile from "../screens/dashboard/Profile";
import Settings from "../screens/dashboard/Settings";
import Dashboard from "../screens/Dashboard";
import Login from "../screens/Login"
import Signup from "../screens/Signup";
import { ScreenList } from "../utils/screenList";
import { useState, useEffect } from 'react';
import { View, Text } from 'react-native';
import { getAuth, onAuthStateChanged } from '@react-native-firebase/auth';
import styles from "../utils/stylesheet";

const Stack = createNativeStackNavigator()

const Index = () => {
    const [initializing, setInitializing] = useState(true);
    const [user, setUser] = useState();

    // Handle user state changes
    function handleAuthStateChanged(user) {
        setUser(user);
        if (initializing) setInitializing(false);
    }
    console.log("user", user)

    useEffect(() => {
        const subscriber = onAuthStateChanged(getAuth(), handleAuthStateChanged);
        return subscriber; // unsubscribe on unmount
    }, []);


    //Initializing App
    if (initializing) {
        return (
            <View style={[styles.containerflex, {backgroundColor:"white"}]}>
                <Text style={styles.heading}>Loading...</Text>
            </View>
        )
    };

    if (!user) {
        return (
            <View>
                <Text>Login</Text>
            </View>
        );
    }



    return (
        < NavigationContainer >
            <Stack.Navigator>
                {
                    ScreenList.map((screen) => {
                        return !!user === screen.authRequired ? <Stack.Screen
                            name={screen.name}
                            component={screen.component}
                            options={{
                                headerShown: screen.headerShown
                            }} />: null
                    })
                }
                {/* <Stack.Screen name="Signup" component={Signup} />
                <Stack.Screen name="Login" component={Login} />
                <Stack.Screen name="Home" component={Home} /> */}
                {/* <Stack.Screen name="About" component={About} />
                <Stack.Screen name="Contact" component={Notifications} />
                <Stack.Screen name="Settings" component={Settings} />
                <Stack.Screen name="Profile" component={Profile} />
                <Stack.Screen name="Dashboard" component={Dashboard} /> */}
            </Stack.Navigator>
        </NavigationContainer >
    )
}

export default Index;