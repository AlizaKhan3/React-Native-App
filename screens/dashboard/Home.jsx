import { useNavigation } from "@react-navigation/native"
import { Button, ScrollView, Text, View } from "react-native"
import Card from "../../components/Card"


const CatComponent = ({ catTitle }) => {
    return(
        <View style={{paddingHorizontal: 10, paddingVertical:10, borderRadius:5, backgroundColor:"purple", marginLeft:20 }}>
            <Text style={{color:"white", fontWeight:"500"}}>{catTitle}</Text>
        </View>
    )

}
const Home = () => {
    const categories = [
        {
            id: 1,
            name: "Gallery"
        },
        {
            id: 2,
            name: "Offers"
        },
        {
            id: 3,
            name: "Clothing"
        },
        {
            id: 4,
            name: "Crockery"
        },
        {
            id: 5,
            name: "Toys"
        },
        {
            id: 6,
            name: "Decoration"
        },
        {
            id: 7,
            name: "Makeup"
        },
        {
            id: 8,
            name: "Regular"
        },
    ]
    const navigation = useNavigation();

    const onPressHandle = () => {
        navigation.navigate('Profile')
    }
    // const onPressDashboard= () => {
    //       navigation.navigate('Dashboard')
    // }
    return (
        <View>
            <ScrollView horizontal={true} style={{marginVertical:10}}>{
                categories.map((category) => {
                    return <CatComponent catTitle={category.name} key={category.id}/>
                })
            }
            </ScrollView>
            <ScrollView style={{marginBottom:60}}>
                <Card />
                <Card />
                <Card />
                  <Card />  <Card />
                {/* <Button title="Go to Dashboard" onPress={onPressDashboard}/> */}
                <Button title="Go to Profile" onPress={onPressHandle} />
                <Card />
            </ScrollView>
        </View>
    )
}
export default Home;