import { View, TextInput,StyleSheet } from "react-native";
import PrimaryButton from "../component/PrimaryButton";
function StartGameScreen() {
    return (
        <View style={styles.inputContainer}>
            <TextInput style={styles.numberInput} maxLength={2} keyboardType="number-pad" />
            <PrimaryButton>Reset</PrimaryButton>
            <PrimaryButton>confirm</PrimaryButton>
        </View>
    )

}
export default StartGameScreen

const styles = StyleSheet.create({
    inputContainer: {
        marginHorizontal: 20,
        borderRadius: 9,
        elevation:99,
        padding: 20,
        marginTop: 100,
        textAlign:'center',
        backgroundColor: '#72063c',
        elevation: 100,
        shadowColor: 'black',
        shadowOffset: { width: 2, height: 10 },
        shadowOpacity:0.1
    },
    numberInput: {
        height: 50,
        width:50,
        fontSize: 32,
        borderBottomColor: '#ddb52f',
        borderBottomWidth: 2,
        color: '#ddb52f',
        textAlign: 'center',
        fontWeight:'bold'
    }
})