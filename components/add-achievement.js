import React, { useState } from "react";
import { StyleSheet, Text, TextInput, View, TouchableOpacity } from "react-native";

export default function AddAchievement(props) {

  
  const [achievement, setAchievement] = useState('');
  const [category, setCategory] = useState('');

  const onChangeAchievement = (text) => {
    setAchievement(text);
  };
  const onChangeCategory = (text) => {
    setCategory(text);
  };

  const showAchievement = achievement;
  const showCategory = category;

  
  return (
    
      <View style={styles.checkboxContainer}>
          <TextInput placeholder="Enter achievement" onChangeText={onChangeAchievement} style={styles.txtInput} multiline numberOfLines={4}></TextInput>
          <TextInput placeholder="Enter category" onChangeText={onChangeCategory} style={styles.txtInput}></TextInput>
          <TouchableOpacity style={styles.btn} onPress={() => props.addAchievement(achievement, category)}>
              <Text style={styles.btnText}>
                  Add Achievement
              </Text>
          </TouchableOpacity>
          <Text>{showAchievement}</Text>
          <Text>{showCategory}</Text>
      </View>
  );
}

const styles = StyleSheet.create({
 
    btn: {
        backgroundColor: '#c2bad8',
        padding: 9,
        margin: 5,
      },
      btnText: {
        color: 'darkslateblue',
        fontSize: 20,
        textAlign: 'center',
      },
      txtInput: {
          borderColor: 'black',
          borderWidth: 2,
          borderStyle: 'solid',
          fontSize: 18,
          padding: 10,
      }
});
