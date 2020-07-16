import { StatusBar } from "expo-status-bar";
import React from "react";
import Self from "./components/self";
import Play from "./components/play";
import { StyleSheet, Text, ScrollView, SafeAreaView } from "react-native";
import Constants from 'expo-constants';

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
    <ScrollView style={styles.scrollView}>
      <Text>Got This</Text>
      <Text>Hello</Text>
      <Self />
      <Play />
      <StatusBar style="auto" />
    </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: Constants.statusBarHeight,
  },
  scrollView: {
    backgroundColor: 'white',
  },
});
