import { View,Text,Pressable,StyleSheet } from "react-native"
function PrimaryButton(props) {
    function pressHandler() {
        console.log("Prees")
    }
    return (
        <View style={styles.buttonOuterContainer}>
            <Pressable style={({preesed})=>preesed ? [styles.buttonInnerContainer,styles.preesed] :styles.buttonInnerContainer }  onPress={pressHandler} android_ripple={{color:'#640233'}}>
                <Text style={styles.buttonText}>{ props.children}</Text>
                </Pressable>
            </View>
    )
}
export default PrimaryButton
const styles = StyleSheet.create({
    buttonOuterContainer: {
        borderRadius: 29,
        margin: 4,
        overflow: 'hidden'
    },
    buttonInnerContainer: {
        backgroundColor: '#72063c',
        // borderRadius: 28,
        paddingVertical: 8,
        paddingHorizontal: 16,
        shadowColor: 'black',
        elevation: 2,
        width: 100,
        height: 40,
        justifyContent:'center'
    },
    buttonText: {
        color: 'white',
        textAlign: 'center',
        fontWeight:'900'

    },
    preesed: {
        opacity:0.75
    }
})