import { View } from "react-native"
import { Text,StyleSheet } from "react-native"
import Title from "../component/Title"

const GameScreen = () => {
    return (
        <View style={styles.screen}>
            <Title>Openion option</Title>
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
    
})