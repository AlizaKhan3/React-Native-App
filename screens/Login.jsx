import { useNavigation } from "@react-navigation/native";
import { Button, Text } from "react-native"
import { View } from "react-native"
import Ionicons from "react-native-vector-icons/Ionicons";

const Login = () => {
    const navigation = useNavigation();
    const onPressHandle = () => {
        navigation.navigate("Signup")
    }

    const onPressHandleDashboard = () => {
        navigation.navigate("Dashboard")
    }

    return (

        <View>
            <Text>Login</Text>
            <Button title="Dashboard" onPress={onPressHandleDashboard} />
            <Text>Dont have a Account? <Button title="Signup" onPress={onPressHandle} />
            </Text>
        </View>
    )
}

export default Login;