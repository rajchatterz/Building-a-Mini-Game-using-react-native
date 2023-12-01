import { StyleSheet, Text, View } from "react-native"

function NumberContainer({children}) { 
    return (
        <View style={styles.container}>
            <Text style={styles.numberText}>{children}</Text>
        </View>
    )
}

export default NumberContainer

const styles = StyleSheet.create({
    container: {
        borderWidth: 3,
        borderColor: '#f6d51b',
        borderRadius: 20,
        padding: 20,
        margin: 24,
        alignItems: 'center',
        justifyContent:'center'
    },
    numberText: {
        color:'#fac936'
    }
})