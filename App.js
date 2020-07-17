import { StatusBar } from "expo-status-bar";
import React, {useState} from "react";
import Self from "./components/self";
import Play from "./components/play";
import Living from "./components/living";
import Work from "./components/work";
import AddAchievement from "./components/add-achievement";
import { StyleSheet, Text, ScrollView, SafeAreaView } from "react-native";
import Constants from 'expo-constants';

export default function App() {

  const [achievements, setAchievements] = useState([
    {achievement: 'I have gone for a walk today', category: 'Self'},
    {achievement: 'I have done more than 30 mins exercise', category: 'Self'},
    {achievement: 'I have done more than an hour exercise', category: 'Self'},
    {achievement: 'I have meditated', category: 'Self'},
    {achievement: 'I had a nice bath', category: 'Self'},
    {achievement: 'Filed expenses', category: 'Work'},
    {achievement: 'Set out of office email', category: 'Work'},
    {achievement: 'Didn\'t steal any pens', category: 'Work'},
    {achievement: 'Booked holiday', category: 'Work'},
    {achievement: 'Won employee of the month', category: 'Work'},
    {achievement: 'Mario Kart', category: 'Play'},
    {achievement: 'Monopoly', category: 'Play'},
    {achievement: 'Chess', category: 'Play'},
    {achievement: 'Darts', category: 'Play'},
    {achievement: 'Lots and lots of television', category: 'Play'},
    {achievement: 'Paid bills', category: 'Living'},
    {achievement: 'Cleaned kitchen', category: 'Living'},
    {achievement: 'Waterd plants', category: 'Living'},
    {achievement: 'Vaccumed house', category: 'Living'},
    {achievement: 'Taken out rubbish', category: 'Living'},
  ]);

  const addAchievement = (achievement, category) => {
    setAchievements((prevItems) => {
      return [{achievement, category}, ...prevItems];
      
    });
    console.log(achievements);
  }

  return (
    <SafeAreaView style={styles.container}>
    <ScrollView style={styles.scrollView}>
      <Text>Got This</Text>
      <Text>Hello</Text>
      <AddAchievement addAchievement={addAchievement}/>
      <Self />
      <Play />
      <Living />
      <Work />
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
