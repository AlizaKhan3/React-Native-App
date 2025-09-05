import React from "react";
import { View, Text, Image, StyleSheet } from "react-native";

const Card = () => {
  return (
    <View style={styles.card}>
      <Image
        source={require("../assets/bg.jpg")}
        style={styles.cardImage}
        resizeMode="cover"
      />
      <View style={styles.cardContent}>
        <Text style={styles.cardTitle}>Background Image</Text>
      </View>
    </View>
  );
};

export default Card;

const styles = StyleSheet.create({
  card: {
    borderRadius: 12,
    backgroundColor: "pink",
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowRadius: 6,
    elevation: 3, // Android shadow
    margin: 10,
    overflow: "hidden",
  },
  cardImage: {
    width: "100%",
    height: 150,
  },
  cardContent: {
    padding: 10,
    alignItems: "center",
    justifyContent: "center",
  },
  cardTitle: {
    fontSize: 16,
    fontWeight: "600",
    color: "#333",
  },
});
