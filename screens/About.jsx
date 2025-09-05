import { useNavigation } from "@react-navigation/native";
import { Button, Text, View } from "react-native"
import ImagePickerComponent from "../components/ImagePickerComponent"

const About = () => {
    const navigation = useNavigation();
    const onPressHandle = () => {
        navigation.navigate("Settings")
    }

    return (
        <View>
            <Text>ABOUT Screen</Text>
            <ImagePickerComponent />
            <Button title="Go Back" onPress={() => navigation.goBack()} />
            <Button title="Go to Settings" onPress={onPressHandle} />
        </View>
    )
}
export default About;