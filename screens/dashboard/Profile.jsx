import { useNavigation } from "@react-navigation/native";
import { Button, Text, TouchableOpacity, View } from "react-native"
import AsyncStorageComponent from "../../components/AsyncStorageComponent"
import ImagePickerComponent from "../../components/ImagePickerComponent"
import { getAuth, signOut } from '@react-native-firebase/auth';
import styles from "../../utils/stylesheet";

const Profile = () => {
    const navigation = useNavigation();
    const onPressHandle = () => {
        navigation.navigate("About")
    }

    const logoutUser = () => {
        signOut(getAuth()).then(() => {
            Toast.show({
                type: 'success',
                text1: 'Logged Out successfully!',
                // text2: `Hi, ${formData.username} 👋`
            });
            navigation.navigate("Login")
        });
    }


    return (
        <View>
            <Text>Profile Screen</Text>
            <AsyncStorageComponent />
            {/* <ImagePickerComponent/> */}
            {/* <Button title="Go Back" onPress={() => navigation.goBack()} /> */}
            <Button title="Go to About" onPress={onPressHandle} />
            <TouchableOpacity style={styles.button} onPress={logoutUser}>
                <Text style={styles.buttonText}>Logout</Text>
            </TouchableOpacity>
        </View>
    )
}
export default Profile;