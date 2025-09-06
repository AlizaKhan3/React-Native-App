import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    button:{
        paddingHorizontal: 20,
        paddingVertical: 3,
        width:"fitContent",
        borderRadius:10
    },
    buttonbackgroundColor:{
        backgroundColor:"purple",

    },
    buttonText:{
        color:"white",
        fontWeight: "bold",
        fontSize:18,
        textAlign:"center"
    },
    buttonPara:{
        color:"red",
        fontWeight: "bold",
        textDecorationLine:"underline",
        fontSize:12,
        textAlign:"center",
        textDecorationColor:"green"
    },
    inputField :{
        borderColor: "grey",
        borderWidth: 1,
        borderRadius: 15,
        paddingHorizontal: 10,
        paddingVertical: 15,
        color:"black"
    },
    fullWidth:{
        width: "100%"
    },
    containerflex:{
        justifyContent: "center",
        alignItems:"center",
        flex: 1,
        paddingHorizontal: 20,
        gap:15
    },
    heading :{
        fontWeight:"bold",
        color:"purple",
        fontSize:30,
    },
    loading:{
        opacity: 0.5
    }
})

export default styles;