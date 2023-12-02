import { View,Text, Image, StyleSheet } from "react-native"
import Title from "../component/ui/Title"

function GameOverScreen() {
    return (
        <View style={styles.container} 
        >
            <Title>Game over</Title>
            <View  style={styles.imageContainer}>
                <Image style={styles.imageStyle} 
                resizeMode="cover"
                 source={require('../assets/Images/success.png')}/>
            </View>
            <Text>Your Phone Needed X rounds to guess the number Y</Text>
        </View>
    )
 }

export default GameOverScreen

const styles = StyleSheet.create({
    container: {
        
        justifyContent: 'center',
        alignItems:'center'
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
    }
})