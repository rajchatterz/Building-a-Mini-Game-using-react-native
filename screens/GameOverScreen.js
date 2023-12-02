import { View,Text, Image, StyleSheet } from "react-native"
import Title from "../component/ui/Title"
import PrimaryButton from "../component/ui/PrimaryButton"

function GameOverScreen({roundNumber,userNumber,onstartNewGame}) {
    return (
        <View style={styles.container} 
        >
            <Title>Game over</Title>
            <View  style={styles.imageContainer}>
                <Image style={styles.imageStyle} 
                resizeMode="cover"
                 source={require('../assets/Images/success.png')}/>
            </View>
            <Text style={styles.summeryText}>Your Phone Needed <Text style={styles.highlightedText}>{roundNumber}</Text> rounds to guess the number <Text style={styles.highlightedText}>{ userNumber}</Text></Text>
            <PrimaryButton onPress={onstartNewGame}>Start new Game</PrimaryButton>
        </View>
    ) 
 }

export default GameOverScreen

const styles = StyleSheet.create({
    container: {
        
        justifyContent: 'center',
        alignItems: 'center',
        gap:10
    },
    imageContainer: {
        width: 300,
        height: 300,
        borderRadius: 150,
        borderWidth: 3,
        borderColor: 'black',
        overflow: 'hidden',
        margin:36,
    
    },
    imageStyle: {
        width: '100%',
        height:'100%'
    },
    summeryText: {
        fontFamily: 'open-sans',
        fontSize: 24,
        textAlign: 'center',
        marginVertical:10
    },
    highlightedText: {
        fontFamily: 'open-sans-bold',
        color: 'red',
        fontSize: 24,
    }
})