import React from "react";
import { useState } from "react";
import StartGameScreen from "./screens/StartGameScreen";
import { View,SafeAreaView, StyleSheet, ImageBackground } from "react-native";
import GameScreen from "./screens/GameScreen";
import { LinearGradient } from "expo-linear-gradient";
const App = () => {
  const [userNumber, setUserNumber] = useState()
  
  function startGameHandler(pickedNum) {
    setUserNumber(pickedNum)
  }
  let screen =<StartGameScreen onPickNumber={startGameHandler}/>
  
  if (userNumber) {
    screen=<GameScreen/>
  }
  return (
    <LinearGradient colors={['#ddb53f', '#4e0329']} style={styles.rootScreen}>
      <ImageBackground source={require('./assets/Images/background.png')} resizeMode="cover" style={styles.rootScreen} imageStyle={styles.backGroundStyle}>
        <SafeAreaView style={styles.rootScreen}>

          {screen}
        </SafeAreaView>
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
