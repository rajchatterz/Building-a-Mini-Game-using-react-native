import { useState } from "react"
import { Text, StyleSheet, View } from "react-native"
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

function GameScreen({ userNumber }) {
    const initialGuess= generateRandomBetween(1,100,userNumber)
    const [currentGuess, setCurrentGuess] = useState(initialGuess)
    
    return (
        <View style={styles.container}>
            <Title>Opponent's Guess</Title>
            <NumberContainer>{ currentGuess}</NumberContainer>
            <View>
                <Text>Higher or Lower</Text>
                <View>
                    <PrimaryButton>+</PrimaryButton>
                    <PrimaryButton>-</PrimaryButton>
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