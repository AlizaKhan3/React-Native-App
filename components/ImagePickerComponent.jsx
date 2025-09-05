import { Image, ScrollView, Text, TouchableOpacity, View } from "react-native";
import { launchCamera, launchImageLibrary } from 'react-native-image-picker';
import styles from "../utils/stylesheet"
import { useState } from "react";

const ImagePickerComponent = () => {
    const [images, setImages] = useState([])

    const launchCameraHandle = async () => {
        const result = await launchCamera({ includeBase64: false, mediaType: "photo" })
        if (!result.didCancel) {
            const imageUri = result.assets[0].uri;
            setImages((prev) => {
                return [...prev, imageUri]
            })
        }
        console.log(result)
    }

    const launchGalleryHandle = async () => {
        const result = await launchImageLibrary({ includeBase64: false, mediaType: "photo", selectionLimit: 5 })
        if (!result.didCancel) {
            const imageUri = result.assets.map(({ uri }) => uri);
            setImages((prev) => {
                return [...prev, ...imageUri]
            })
        }
        console.log(result)
    }
    return (
        <View>
            <Text>Image Picker Component</Text>
            <TouchableOpacity onPress={launchCameraHandle} style={styles.button} >
                <Text style={styles.buttonText}>
                    launch Camera
                </Text>
            </TouchableOpacity>

            <TouchableOpacity onPress={launchGalleryHandle} style={styles.button} >
                <Text style={styles.buttonText}>
                    launch Gallery
                </Text>
            </TouchableOpacity>

            <ScrollView horizontal={true}>
                <View style={{ padding:10
                     ,flexDirection: "row", flexWrap: "wrap", gap: 15, justifyContent: "center", alignItems: "center" }}>
                    {
                        images.map((img) => {
                            return <Image source={{ uri: img }} alt="Image" height={150} width={150} resizeMode="cover" />
                        })
                    }
                </View>
            </ScrollView>
        </View>
    )
}

export default ImagePickerComponent;