import { TextInput, View,StyleSheet,Alert, Text } from "react-native"
import PrimaryButton from "../component/ui/PrimaryButton"
import { useState } from "react"
import Title from "../component/ui/Title";
import Card from "../component/ui/Card";
function StartGameScreen({onConfirmNumber}) {
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
            Alert.alert('Invalid Number!', 'Number has to be a nuber between 1 and 99', [{ text: 'Okay', style: 'destructive', onPress:resetInputHandler}])
        }
        onConfirmNumber(chosenNumber)
        
    }
    return (
            <View style={styles.rootContainer}>
          <Title>Guess My number</Title>   
            <Card>
                <Text style={styles.textInput}>Enter Number</Text>
            <TextInput style={styles.numberInput} maxLength={2} value={enteredNumber} onChangeText={numberInputHandler} keyboardType="number-pad" />
            <View style={styles.primaryButton}>
                <PrimaryButton onPress={confirmInputHandler}>Confirm</PrimaryButton>
                <PrimaryButton onPress={resetInputHandler}>Reset</PrimaryButton>
            </View>
            </Card>
        </View>
    )
}
export default StartGameScreen
const styles = StyleSheet.create({
    rootContainer: {
        marginTop: 100,
        alignItems:'center'
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
    },
    textInput: {
        color: 'white',
        fontSize: 20,
    }
})