import { StyleSheet, Text, View,Dimensions } from "react-native"

function NumberContainer({children}) { 
    return (
        <View style={styles.container}>
            <Text style={styles.numberText}>{children}</Text>
        </View>
    )
}

export default NumberContainer

const deviceWidth = Dimensions.get('window').width;
const styles = StyleSheet.create({
    container: {
        borderWidth: 3,
        borderColor: '#f6d51b',
        borderRadius: 20,
        padding: deviceWidth <380 ?12:24,
        margin: 24,
        alignItems: 'center',
        justifyContent:'center'
    },
    numberText: {
        color: '#fac936',
        fontSize:26
    }
})