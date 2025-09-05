import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Home from "../screens/dashboard/Home";
import About from "../screens/About";
import Contact from "../screens/dashboard/Notifications";
import Profile from "../screens/dashboard/Profile";
import Settings from "../screens/dashboard/Settings";
import Dashboard from "../screens/Dashboard";
import Login from "../screens/Login"
import Signup from "../screens/Signup";


const Stack = createNativeStackNavigator()

const Index = () => {
    return (
        < NavigationContainer >
            <Stack.Navigator>
                <Stack.Screen name="Login" component={Login} />
                <Stack.Screen name="Home" component={Home} />
                <Stack.Screen name="About" component={About} />
                <Stack.Screen name="Contact" component={Contact} />
                <Stack.Screen name="Settings" component={Settings} />
                <Stack.Screen name="Profile" component={Profile} />
                <Stack.Screen name="Dashboard" component={Dashboard} />
                <Stack.Screen name="Signup" component={Signup} />
            </Stack.Navigator>
        </NavigationContainer >
    )
}

export default Index;