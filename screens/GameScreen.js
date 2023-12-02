import { useState,useEffect } from "react"
import { Text, StyleSheet, View,Alert } from "react-native"
import Title from "../component/ui/Title"
import NumberContainer from "../component/game/NumberContainer"
import PrimaryButton from "../component/ui/PrimaryButton"
function generateRandomBetween(min, max, exclude) {
    const random = Math.floor(Math.random() * (max - min)) + min
    if (random === exclude) {
        return generateRandomBetween(min,max,exclude)
    } else {
        return random
    }

}

let minBoundary = 1
let maxBoundary = 100
function GameScreen({ userNumber,onGameOver }) {
    const initialGuess= generateRandomBetween(1,100,userNumber)
    const [currentGuess, setCurrentGuess] = useState(initialGuess)

    useEffect(() => {
        if (currentGuess === userNumber) {
            onGameOver() 
        }
    },[currentGuess,userNumber,onGameOver ])
    function nextGuessHandler(direction) {
        if ((direction === 'lower' && currentGuess < userNumber) || (direction === 'greater' && currentGuess > userNumber)) {
            Alert.alert("Dont lie!,", " You know this is wrong", [{ text: 'Soory', style:'cancel'}])
            return
        }
        if (direction === 'lower') {
            maxBoundary=currentGuess
            
        }
        
        else {
            minBoundary=currentGuess+1
        }
        const newRandom = generateRandomBetween(minBoundary, maxBoundary, currentGuess)
        setCurrentGuess(newRandom)
    }
    return (
        <View style={styles.container}>

            <Title>Opponent's Guess</Title>
            <NumberContainer>{ currentGuess}</NumberContainer>
            <View>
                <Text>Higher or Lower</Text>
                <View>
                    <PrimaryButton onPress={nextGuessHandler.bind(this,'greater')}>+</PrimaryButton>
                    <PrimaryButton onPress={nextGuessHandler.bind(this,'lower')}>-</PrimaryButton>
                </View>
            </View>
            {/* <View>Log Rounds</View> */}
        </View>
    )
}
export default GameScreen

const styles = StyleSheet.create({
    container: { 
       padding:24
    },
    title: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#ddb52f',
        textAlign: 'center',
        padding: 20,
        borderWidth: 10,
        borderColor:'#f2dd22'
    }
})