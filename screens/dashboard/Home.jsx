import { useNavigation } from "@react-navigation/native"
import { Button, Text, View } from "react-native"

const Home = () => {
    const navigation = useNavigation();

    const onPressHandle = () => {
        navigation.navigate('Profile')
    }
    // const onPressDashboard= () => {
    //       navigation.navigate('Dashboard')
    // }
    return(
        <View>
            <Text>Home Screen</Text>
            {/* <Button title="Go to Dashboard" onPress={onPressDashboard}/> */}
            <Button title="Go to Profile" onPress={onPressHandle}/>
        </View>
    )
}
export default Home;