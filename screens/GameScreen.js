import { useState,useEffect } from "react"
import { Text, StyleSheet, View, Alert } from "react-native"
import { Ionicons } from '@expo/vector-icons'
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
            <View style={styles.btnContainer}>
                <Text style={{color:'white',fontSize:20}}>Higher or Lower</Text>
                <View style={styles.buttonContainer}>
                    <PrimaryButton onPress={nextGuessHandler.bind(this,'greater')}><Ionicons name="md-add" size={24} color="white"/></PrimaryButton>
                    <PrimaryButton onPress={nextGuessHandler.bind(this,'lower')}><Ionicons name="md-remove" size={24} color="white"/></PrimaryButton>
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
    },
    buttonContainer: {
        flexDirection:'row'
    },
    btnContainer: {
        margin: 30, 
        paddingHorizontal: 30,
        paddingVertical: 20,
        borderRadius: 10,
        justifyContent: 'center',
        alignItems: 'center',
        gap: 20,
        
        backgroundColor:'#66458f'
    }
})