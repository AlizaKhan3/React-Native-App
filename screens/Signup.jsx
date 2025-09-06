import { useNavigation } from "@react-navigation/native";
import { Text, ToastAndroid, TouchableOpacity, View } from "react-native"
import styles from "../utils/stylesheet";
import InputComponent from "../components/InputComponent";
import { useState } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { getAuth, createUserWithEmailAndPassword } from '@react-native-firebase/auth';
import Toast from 'react-native-toast-message';

const resetForm = {
    username: "",
    email: "",
    password: ""
}
const Signup = () => {
    const navigation = useNavigation();
    const [formData, setFormData] = useState({ ...resetForm })
    const [loading, setLoading] = useState(false)
    const onPressHandle = () => {
        navigation.navigate("Login")
    }

    const changeInputHandle = (key, value) => {
        return (
            setFormData((pre) => {
                return {
                    ...pre,
                    [key]: value
                }
            })
        )
    }
    console.log(formData);


    const submitHandle = async () => {
        setLoading(true)
        const { email, password } = formData;
        createUserWithEmailAndPassword(getAuth(), email, password)
            .then(async () => {
                // setLoading(false)
                const stringifyData = JSON.stringify(formData);
                await AsyncStorage.setItem("@user-data", stringifyData);
                console.log('User account created & signed in!', stringifyData);
                setFormData({ ...resetForm })
                // ToastAndroid.LONG("Signed Up Successfully!!")
                Toast.show({
                    type: 'success',
                    text1: 'Account Created Successfully!!',
                     text2: `Hi, ${formData.username} 👋`
                });
                navigation.navigate("Login")
            })
            .catch(error => {
                // setLoading(false)
                if (error.code === 'auth/email-already-in-use') {
                    Toast.show({
                        type: 'error',
                        text1: 'auth/email-already-in-use',
                        text2: 'Please Login! 👋'
                    });
                    // ToastAndroid.LONG('That email address is already in use!');
                }

                if (error.code === 'auth/invalid-email') {
                    ToastAndroid.LONG('That email address is invalid!');
                    Toast.show({
                        type: 'error',
                        text1: 'That email address is invalid!',
                        //   text2: 'Please Login! 👋'
                    });
                }

                // console.error(error);
            }).finally(() => {
                setLoading(false)
            });
    }
    return (
        <View style={styles.containerflex}>
            <Text style={styles.heading}>Signup</Text>
            <InputComponent value={formData.username} required placeholder="Enter Name" inputHandle={(text) => changeInputHandle("username", text)} inputLabel="Name" />
            <InputComponent value={formData.email} required placeholder="Enter Email" inputHandle={(text) => changeInputHandle("email", text)} inputLabel="Email" />
            <InputComponent value={formData.password} secureTextEntry={true} required placeholder="Enter Password" inputHandle={(text) => changeInputHandle("password", text)} inputLabel="Password" />

            <TouchableOpacity disabled={loading} style={[styles.button, styles.buttonbackgroundColor, loading ? styles.loading : {}]} onPress={submitHandle}>
                <Text style={styles.buttonText}>{
                    loading ? "Loading..." : "Signup"
                }</Text>
            </TouchableOpacity>

            <View>
                <Text style={styles.buttonPara}>Already have an Account?</Text><TouchableOpacity onPress={onPressHandle}>
                    <Text style={styles.buttonPara}>Login Now</Text>
                </TouchableOpacity>
            </View>

        </View>
    )
}

export default Signup;