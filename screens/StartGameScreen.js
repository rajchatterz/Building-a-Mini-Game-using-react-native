import { View, TextInput, StyleSheet,Alert } from "react-native";
import { useState } from "react";
import PrimaryButton from "../component/PrimaryButton";

function StartGameScreen({onPickNumber}) {
    const [enteredNumber, setEnteredNumber] = useState()
    function numberInputHandler(inputText) {
        setEnteredNumber(inputText)
    }
    function resetInput(){
        setEnteredNumber('')
    }
    function confirmInputHandler() {
        const chosenNumber = parseInt(enteredNumber)
        if (isNaN(chosenNumber) || chosenNumber <= 1 || chosenNumber >= 99) {
            Alert.alert("Invalid number!",
                "Number has to be a number between 1 to 99",
                [{text:'Okay',style:'destructive',onPress:resetInput}]
            )
            return; 
        }
        if (typeof(onPickNumber) === 'function') {
            onPickNumber(chosenNumber)
        }
    }

    return (
        <View style={styles.inputContainer}>
            <TextInput onChangeText={numberInputHandler} style={styles.numberInput} value={enteredNumber} maxLength={2} keyboardType="number-pad" autoCapitalize="none" autoCorrect={false} />
            <View style={styles.button}>
                <PrimaryButton onPress={confirmInputHandler}>Confirm</PrimaryButton>
                <PrimaryButton onPress={resetInput}>Reset</PrimaryButton>
            </View>
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
        backgroundColor: '#4e0329',
        elevation: 100,
        shadowColor: 'black',
        shadowOffset: { width: 2, height: 10 },
        shadowOpacity: 0.1,
        flexDirection: 'column',
        gap: 20,
        alignItems: 'center',
        
        
    },
    button: {
        flexDirection: 'row'
        
    },
    numberInput: {
        height: 50,
        width:50,
        fontSize: 32,
        borderBottomColor: '#ddb52f',
        borderBottomWidth: 2,
        color: '#ddb52f',
        textAlign: 'center',
        fontWeight: 'bold',
        
    }
})