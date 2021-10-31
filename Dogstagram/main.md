# Dogstagram

Lets take this opportunity to build something useful from the knowledge we have gained. Coding is a creative process hence this document will only guide you with the project setup and steps based on the requirements of the application. However, a sample implementation of this can be found under  `Dogstagram/dogstagram`.

Let's get started with `Dogstagram - An Instagram for Dogs`

## Project Set Up

Set up a new React Native project using the command 

`expo init <name-of-app>`

To start tht application, navigate to the directory and run one of the following commands. 

    cd <name-of-app>

- `yarn start` will give ys the option to start ios android or web.

Or else, we can directly run

- `yarn android`
- `yarn ios`
- `yarn web`

Thereafter, the app can be run on an Android/ios simulator, emulator, or even on the device using the expo go app.



## Sign Up Form

1. The first step is to create a reusable custom component that gives our input field a label, and also a space for the user to provide their input. This component will be made up of some of React Native’s core components: View, Text, and TextInput. Your custom component should accept props for:
   - a label to identify what this particular component is for
   - a placeholder value to show before the input is provided
   - the actual value the component accepts & stores
   - a callback function to be called whenever the content of the TextInput is changed
  
2. Import the custom component in the `<App>` component, and create inputs for each of the following using the custom component you built in Step 1:
   - email
   - password
   - confirm password
   - pet's name
   - pet's date of birth
   - breed
   - favorite toy

3. Using the `useState()` hook from React, tie up all the custom input components to the state of the parent component i.e. `<App>`. Transform each of the components created into a controlled component by accordingly setting the value to `state` and calling the appropriate `setState()` in the `onChangeText` prop.

4. BONUS: Try to implement validation for password mismatch from the confirm password. When true, a small message indicating `passwords do not match.` should be visible.
   

This tutorial should help you get comfortable with the basics of mobile application development with `React Native`. Hope you enjoyed it :)