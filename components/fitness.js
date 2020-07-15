import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View, CheckBox } from "react-native";

export default function Fitness() {
  return (
    <View style={styles.container}>
      <Text h2>Fitness</Text>
      <Text>Hello</Text>
      <Text>new line</Text>
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
