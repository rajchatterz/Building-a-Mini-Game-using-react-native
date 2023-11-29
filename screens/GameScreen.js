import { View } from "react-native"
import { Text,StyleSheet } from "react-native"

const GameScreen = () => {
    return (
        <View style={styles.screen}>
            <Text style={styles.title}>Opponent's Guess</Text>
            {/* Guess */}
            <View>
                <Text>Higher or lower</Text>
            {/* + */}
            {/* - */}
            </View>
            <View>
                {/* View Log */}
            </View>
        
        </View>
    )
}

export default GameScreen

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        padding:50
    },
    title: {
        fontSize: 28,
        textAlign:'center',
        fontWeight: 'bold',
        color: '#ddb52f',
        borderWidth: 2,
        borderColor: '#ddb52f',
        padding:12
    }
})