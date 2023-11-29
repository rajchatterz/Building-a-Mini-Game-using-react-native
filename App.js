import React from "react";
import StartGameScreen from "./screens/StartGameScreen";
import { View, StyleSheet,ImageBackground } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
const App = () => {
  return (
    <LinearGradient colors={['#ddb53f', '#4e0329']} style={styles.rootScreen}>
      <ImageBackground source={require('./assets/Images/background.png')} resizeMode="cover" style={styles.rootScreen} imageStyle={styles.backGroundStyle}>
        <StartGameScreen/>
      </ImageBackground>

    </LinearGradient>
    
  )
}
export default App

const styles = StyleSheet.create({
  rootScreen: {
    flex: 1,
    
  },
  backGroundStyle: {
    opacity:0.25
  }
})
