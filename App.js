import { View, Text, StyleSheet, ImageBackground,SafeAreaView, Platform } from "react-native";
import { useEffect, useState } from "react";
import StartGameScreen from "./screens/StartGameScreen";
import GameScreen from "./screens/GameScreen";
import { LinearGradient } from 'expo-linear-gradient';
import GameOverScreen from "./screens/GameOverScreen";
import { useFonts } from 'expo-font'
// import AppLoading from "expo-app-loading";
const App = () => {
  const [userNumber, setUserNumber] = useState();

  const [gameIsOver, seGameIsOver] = useState(true)
  const [guessRounds, setGuessRounds] = useState(0)

  const [fontloaded] = useFonts({
    'open-sans':require('./assets/font/OpenSans-Regular.ttf'),
    'open-sans-bold':require('./assets/font/OpenSans-Bold.ttf')
  })
  function startNewGameHandler() {
    setUserNumber(null)
    setGuessRounds(0)
  
  }

  
  function pickedNumberHandler(pickedNumber) {
    setUserNumber(pickedNumber)
    seGameIsOver(false)
    
  }

  let screen = <StartGameScreen onConfirmNumber={ pickedNumberHandler} />
  
  if (userNumber) {
    screen = <GameScreen userNumber={ userNumber} onGameOver={gameOverHandler} />
  }
  if (gameIsOver && userNumber) {
    screen = <GameOverScreen roundNumber={guessRounds } userNumber={ userNumber} onstartNewGame={startNewGameHandler } />
  }
  function gameOverHandler() {
    seGameIsOver(true)
  }

  return (
    <LinearGradient colors={['#857d8b', '#b58bd6', '#220d42']} style={styles.rootScreen}>
      <ImageBackground source={require('./assets/Images/background.png')} resizeMode="cover" style={styles.rootScreen} imageStyle={styles.backgroundImage}>
        <SafeAreaView style={styles.screenView}>
          {screen}

        </SafeAreaView>
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
  },
  screenView: {
    paddingTop:Platform.OS==="android"?35:0
  }

})