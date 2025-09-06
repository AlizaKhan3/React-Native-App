import { Text, View } from "react-native"
import { TextInput } from "react-native"
import styles from "../utils/stylesheet"

const InputComponent = ({ inputLabel, inputHandle, placeholder, ...props }) => {
    return (
        <View style={styles.fullWidth}>
            <Text style={{ fontWeight: 500, fontSize: 16, paddingLeft: 8, paddingBottom: 6 }}>{inputLabel}</Text>
            <TextInput style={styles.inputField} {...props} onChangeText={inputHandle} placeholder={placeholder} />
        </View>
    )
}
export default InputComponent
