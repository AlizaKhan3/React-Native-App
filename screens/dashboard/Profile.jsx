import { useNavigation } from "@react-navigation/native";
import { Button, Text, View } from "react-native"
import AsyncStorageComponent from "../../components/AsyncStorageComponent"
import ImagePickerComponent from "../../components/ImagePickerComponent"
const Profile = () => {
    const navigation = useNavigation();
    const onPressHandle = () => {
        navigation.navigate("About")
    }

    return (
        <View>
            <Text>Profile Screen</Text>
            <AsyncStorageComponent/>
            {/* <ImagePickerComponent/> */}
            {/* <Button title="Go Back" onPress={() => navigation.goBack()} /> */}
            <Button title="Go to About" onPress={onPressHandle}/>
        </View>
    )
}
export default Profile;