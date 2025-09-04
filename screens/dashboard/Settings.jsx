import { useNavigation } from "@react-navigation/native";
import { Button, Text, View } from "react-native"

const Settings = () => {
    const navigation = useNavigation();
    const onPressHandle = () => {
        navigation.navigate("Dashboard")
    }

    return (
        <View>
            <Text>Settings Screen</Text>
            <Button title="Dashboard" onPress={onPressHandle} />

        </View>
    )
}
export default Settings;