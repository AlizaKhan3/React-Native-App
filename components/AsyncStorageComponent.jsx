import { Alert, Text, TouchableOpacity, View } from "react-native";
import styles from "../utils/stylesheet";
import AsyncStorage from '@react-native-async-storage/async-storage';


const AsyncStorageComponent = () => {
    const setDataHandle = async () => {

        const userObj = {
            username: "Aliza Khan",
            totalQuantity: 1000,
            theme: "dark",
        }
        const userObjectStringify = JSON.stringify(userObj);


        try {
            await AsyncStorage.setItem("@user-data", userObjectStringify)
            await AsyncStorage.setItem("@theme", userObj.theme)

            Alert.alert("Data stored successfully!")

        } catch (e) {
            console.log(e.message)
            Alert.alert("Error")
        }
    }

    const getDataHandle = async () => {
        try {
            const getUserData = await AsyncStorage.getItem("@user-data");
            
            if (getUserData !== null) {
                const parseData = JSON.parse(getUserData)
                console.log("user-->", parseData)
            }
            console.log(getUserData);
        } catch (error) {
            Alert.alert("Failed to get data")
        }
    }

    const removerUserDataHandle = async () => {
        try {
            await AsyncStorage.removeItem("@user-data")
        } catch (error) {
            Alert.alert("Failed to remove data")

        }
    }

    const clearUserDataHandle = async () => {
        try {
            await AsyncStorage.clear()
        } catch (error) {
            Alert.alert("Failed to remove data")

        }
    }
    return (
        <View>
            <Text>Async Storage</Text>
            <View style={{gap:15}}>
                <TouchableOpacity onPress={setDataHandle} style={styles.button} >
                    <Text style={styles.buttonText}>
                        SET Data
                    </Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={getDataHandle} style={styles.button} >
                    <Text style={styles.buttonText}>
                        GET Data
                    </Text>
                </TouchableOpacity> <TouchableOpacity onPress={clearUserDataHandle} style={styles.button} >
                    <Text style={styles.buttonText}>
                        CLEAR Data
                    </Text>
                </TouchableOpacity> <TouchableOpacity onPress={removerUserDataHandle} style={styles.button} >
                    <Text style={styles.buttonText}>
                        REMOVE Data
                    </Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

export default AsyncStorageComponent;