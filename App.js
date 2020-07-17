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
    {achievement: 'I have gone for a walk today', category: 'Self', status: false},
    {achievement: 'I have done more than 30 mins exercise', category: 'Self', status: false},
    {achievement: 'I have done more than an hour exercise', category: 'Self', status: false},
    {achievement: 'I have meditated', category: 'Self', status: false},
    {achievement: 'I had a nice bath', category: 'Self', status: false},
    {achievement: 'Filed expenses', category: 'Work', status: false},
    {achievement: 'Set out of office email', category: 'Work', status: false},
    {achievement: 'Didn\'t steal any pens', category: 'Work', status: false},
    {achievement: 'Booked holiday', category: 'Work', status: false},
    {achievement: 'Won employee of the month', category: 'Work', status: false},
    {achievement: 'Mario Kart', category: 'Play', status: false},
    {achievement: 'Monopoly', category: 'Play', status: false},
    {achievement: 'Chess', category: 'Play', status: false},
    {achievement: 'Darts', category: 'Play', status: false},
    {achievement: 'Lots and lots of television', category: 'Play', status: false},
    {achievement: 'Paid bills', category: 'Living', status: false},
    {achievement: 'Cleaned kitchen', category: 'Living', status: false},
    {achievement: 'Waterd plants', category: 'Living', status: false},
    {achievement: 'Vaccumed house', category: 'Living', status: false},
    {achievement: 'Taken out rubbish', category: 'Living', status: false},
  ]);

  const addAchievement = (achievement, category) => {
    setAchievements((prevItems) => {
      return [{achievement, category, status: true}, ...prevItems];
      
    });
    console.log(achievements);
  }
  
  const calcTotal = () => {
    var total = 0;
    achievements.forEach(element => {
      if (element.status === true){
        total++;
      }
    });
    console.log(total);
    return total;
  };

  return (
    <SafeAreaView style={styles.container}>
    <ScrollView style={styles.scrollView}>
      <Text>Got This</Text>
      <Text>Hello</Text>  
      <Self />
      <Play />
      <Living />
      <Work />
      <AddAchievement addAchievement={addAchievement}/>
      <Text>Total: {calcTotal()}</Text>
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
