import { TextInput, View,StyleSheet,Alert } from "react-native"
import PrimaryButton from "../component/PrimaryButton"
import { useState } from "react"
function StartGameScreen() {
    const [enteredNumber, setEnteredNumber] = useState('');
    
    function numberInputHandler(enteredText) {
        setEnteredNumber(enteredText)
    }
    function resetInputHandler() {
        setEnteredNumber('')
    }
    function confirmInputHandler() {
        const chosenNumber = parseInt(enteredNumber);

        if (isNaN(chosenNumber) || chosenNumber<=0|| chosenNumber>99)
         {
            Alert.alert('Invalid Number!','Number has to be a nuber between 1 and 99',[{text:'Okay',style:'destructive',onPress:{resetInputHandler}}])
        }
    }
    return (
        <View style={styles.inputContainer}>
            <TextInput style={styles.numberInput} maxLength={2} value={enteredNumber} onChangeText={numberInputHandler} keyboardType="number-pad" />
            <View style={styles.primaryButton}>
                <PrimaryButton >Reset</PrimaryButton>
                <PrimaryButton onPress={confirmInputHandler}>Confirm</PrimaryButton>
            </View>
        </View>
    )
}
export default StartGameScreen
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
    numberInput: {
        height: 50,
        width:50,
        fontSize: 32,
        borderBottomColor: '#f5a51b',
        borderBottomWidth: 2,
        color: '#e9ca4b',
        marginVertical: 8,
        fontWeight: 'bold',
        textAlign: 'center',
        
    },
    primaryButton: {
        flexDirection: 'row',
        gap:10,
        marginTop:20,
    }
})