import { useNavigation } from "@react-navigation/native";
import { Text, TouchableOpacity, View } from "react-native"
import styles from "../utils/stylesheet";
import InputComponent from "../components/InputComponent";
import { useState } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { getAuth, signInWithEmailAndPassword } from '@react-native-firebase/auth';
import Toast from 'react-native-toast-message';

const resetForm = {
    email: "",
    password: ""
}
const Login = () => {
    const navigation = useNavigation();
    const [formData, setFormData] = useState({ ...resetForm })
    const [loading, setLoading] = useState(false)

    const onPressHandle = () => {
        navigation.navigate("Signup")
    }



    const changeInputHandle = (key, value) => {
        // const userData = text
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
        signInWithEmailAndPassword(getAuth(), email, password)
            .then(async () => {
                // setLoading(false)
                const stringifyData = JSON.stringify(formData);
                await AsyncStorage.setItem("@user-data", stringifyData);
                console.log('User account created & signed in!', stringifyData);
                setFormData({ ...resetForm })
                // ToastAndroid.LONG("Signed Up Successfully!!")
                Toast.show({
                    type: 'success',
                    text1: 'Logged In Successfully!!',
                    //   text2: `Hi ${formData.username}👋`
                });
                navigation.navigate("Dashboard")
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
                    // ToastAndroid.LONG('That email address is invalid!');
                    Toast.show({
                        type: 'error',
                        text1: 'That email address is invalid!',
                        //   text2: 'Please Login! 👋'
                    });
                }

                if (error.message) {
                    Toast.show({
                        type: "error",
                        text1: error.message,
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
            <Text style={styles.heading}>Login</Text>
            <InputComponent value={formData.email} required placeholder="Enter Email" inputHandle={(text) => changeInputHandle("email", text)} inputLabel="Email" />
            <InputComponent value={formData.password} secureTextEntry={true} required placeholder="Enter Password" inputHandle={(text) => changeInputHandle("password", text)} inputLabel="Password" />

            <TouchableOpacity disabled={loading} style={[styles.button, styles.buttonbackgroundColor, loading ? styles.loading : {}]} onPress={submitHandle}><Text style={styles.buttonText}>{
                loading ? "Loading..." : "Login"
            }</Text>
            </TouchableOpacity>

            <View>
                <Text style={styles.buttonPara}>Don't have an Account?</Text><TouchableOpacity onPress={onPressHandle}>
                    <Text style={styles.buttonPara}>Signup Now.</Text>
                </TouchableOpacity>
            </View>


        </View>
    )
}

export default Login;