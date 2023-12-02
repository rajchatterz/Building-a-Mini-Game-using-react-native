import { StyleSheet } from "react-native"
import { View } from "react-native"


function Card({children}) {
    return <View style={styles.inputContainer}>{ children}</View>
}
export default Card

const styles = StyleSheet.create({
    inputContainer: {
        justifyContent: 'center',
        alignItems:'center',
        padding: 16,
        marginTop: 100,
        backgroundColor: '#510472',
        marginHorizontal: 20,
        borderRadius: 8,
        elevation: 100,
        shadowColor: '#606060',
        shadowOpacity: 0.6,
        shadowOffset: { width: 1, height: 1 },
    },
})