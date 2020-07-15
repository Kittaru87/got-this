import { StatusBar } from "expo-status-bar";
import React from "react";
import Fitness from "./components/fitness";
import { StyleSheet, Text, View } from "react-native";

export default function App() {
  return (
    <View style={styles.container}>
      <Text>Got This</Text>
      <Text>Hello</Text>
      <Fitness />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
