import { useNavigation } from "@react-navigation/native";
import { Button, Text, View } from "react-native"

const About = () => {
    const navigation = useNavigation();
    const onPressHandle = () => {
        navigation.navigate("Settings")
    }

    return (
        <View>
            <Text>Profile Screen</Text>
            <Button title="Go Back" onPress={() => navigation.goBack()} />
            <Button title="Go to Settings" onPress={onPressHandle} />
        </View>
    )
}
export default About;