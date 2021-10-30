import { StatusBar } from 'expo-status-bar';
import React, {useState} from 'react';
import { StyleSheet, Text, View } from 'react-native';
import CustomTextInput from "./components/CustomTextInput/index.js";

export default function App() {
  const [ email, setEmail ] = useState("");
  const [ password, setPassword ] = useState("");
  const [ confirmpassword, setConfirmpassword ] = useState("");
  const [ name, setName ] = useState("");
  const [ dob, setDob ] = useState("");
  const [ breed, setBreed ] = useState("");
  const [ favoritetoy, setFavoritetoy ] = useState("");

  return (
    <View style={styles.container}>
      <CustomTextInput
        label="email ID"
        placeholder="example@abc.com"
        value={email}
        callback={
          (value) => {
            setEmail(value)
          }
        }
      />
      <CustomTextInput
        label="Password"
        placeholder="*********"
        password={true}
        value={password}
        callback={
          (value) => {
            setPassword(value)
          }
        }
      />
      <CustomTextInput
        label="Confirm Password"
        placeholder="*********"
        passwordsMismatch = {password !== confirmpassword}
        password={true}
        value={confirmpassword}
        callback={
          (value) => {
            setConfirmpassword(value);
          }
        }
      />
      <CustomTextInput
        label="Pet's name"
        placeholder="Fluffy"
        value={name}
        callback={
          (value) => {
            setName(value)
          }
        }
      />
      <CustomTextInput
        label="Pet's Date of Birth"
        placeholder="01/01/2020"
        value={dob}
        callback={
          (value) => {
            setDob(value)
          }
        }
      />
      <CustomTextInput
        label="Pet's Breed"
        placeholder="Labrador"
        value={breed}
        callback={
          (value) => {
            setBreed(value)
          }
        }
      />
      <CustomTextInput
        label="What's your pet's favorite toy?"
        placeholder="Dog Bone"
        value={favoritetoy}
        callback={
          (value) => {
            setFavoritetoy(value)
          }
        }
      />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'flex-start',
    marginLeft: 50,
    justifyContent: 'center',
  },
});
