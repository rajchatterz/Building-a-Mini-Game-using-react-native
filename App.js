import { View, Text, StyleSheet, ImageBackground } from "react-native";
import { useState } from "react";
import StartGameScreen from "./screens/StartGameScreen";
import { LinearGradient } from 'expo-linear-gradient';
const App = () => {
  const [userNumber, setUserNumber] = useState()
  
  function pickedNumberHandler(pickedNumber) {
    setUserNumber(pickedNumber)
  }
  return (
    <LinearGradient colors={['#857d8b', '#b58bd6', '#220d42']} style={styles.rootScreen}>
      <ImageBackground source={require('./assets/Images/background.png')} resizeMode="cover" style={styles.rootScreen} imageStyle={styles.backgroundImage}>
        <StartGameScreen/>
      </ImageBackground>
    </LinearGradient>
  )
}
export default App

const styles = StyleSheet.create({
  rootScreen: {

    flex:1
  },
  backgroundImage: {
    opacity:0.15
  }

})