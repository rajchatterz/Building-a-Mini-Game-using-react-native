import { Text,StyleSheet, View } from "react-native"
import Title from "../component/Title"

function GameScreen({userNumber}) {
    return (
        <View style={styles.container}>
            <Title>Opponent's Guess</Title>
            {/* Guess */}
            <View>
                <Text>Higher or Lower</Text>
                <Text>{ userNumber}</Text>
                {/* + */}
                {/* - */}
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
        borderWidth: 2,
        borderColor:'#f2dd22'
    }
})