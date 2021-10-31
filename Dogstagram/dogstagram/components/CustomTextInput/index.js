import React from "react";
import { View, Text, TextInput } from "react-native";

export default function CustomTextInput({label, placeholder, value, callback, password, passwordsMismatch}) {
  return (
    <View
      style ={
        {
          flex: 1, 
          justifyContent: 'start', 
        }
      }
    >
      <Text
        style = {
          {
            fontSize: 30
          }
        }
      >{label}</Text>
      <TextInput
        value={value}
        secureTextEntry={password}
        onChangeText={callback}
        placeholder={placeholder}
        style = {
          [{
            fontSize: 30, 
            backgroundColor: "#f0f0f0",
            borderRadius: 5,
            paddingLeft: 5,
            paddingRight: 5,
            width: 300
          }, passwordsMismatch && {borderBottomColor: "red", borderBottomWidth: 4}]
        }
      ></TextInput>
      { passwordsMismatch && (
        <Text
        style = {
          {
            fontSize: 11, 
            color: "red"
          }
        }
      >Passwords do not match.</Text>
      )}
    </View>
  );
};