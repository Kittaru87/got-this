import { StatusBar } from "expo-status-bar";
import React from "react";
import Checkbox from "./checkbox";
import { StyleSheet, Text, View } from "react-native";

export default function Fitness() {
  return (
    <View style={styles.container}>
      <Text h2>Fitness</Text>
      <Checkbox label="I have gone for a walk today" />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
