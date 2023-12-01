import { StyleSheet, Text } from "react-native"
function Title({children}) {
    return (
        <Text style={styles.title}>{ children}</Text>
    )
 }
export default Title
const styles = StyleSheet.create({
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