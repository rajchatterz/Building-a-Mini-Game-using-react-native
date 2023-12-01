import { Text, View,Pressable,StyleSheet } from "react-native"

function PrimaryButton({ children,onPress }) {
    
    return (
            <View style={styles.buttonOuterContainer}>
                <Pressable style={({pressed})=> pressed ? [styles.container ,styles.pressed] : styles.container } onPress={onPress} android_ripple={{color:'#4b4a4c'}}>
                <Text style={styles.buttonText}> {children}</Text>
                </Pressable>
            </View> 
    )
}
export default PrimaryButton
const styles = StyleSheet.create({
    buttonOuterContainer: {
        backgroundColor: '#8661ad',
        margin: 4,
        overflow: 'hidden',
        borderRadius: 20,
    },
    container: {
        backgroundColor: '#8661ad',
        elevation: 100,
        shadowColor: '#938484',
        shadowOpacity: 0.95,
        shadowOffset: { width: 1, height: 2 },
        width: 110,
        height: 40,
        alignItems: 'center',
        justifyContent:'center'
    },
    buttonText: {
        color: 'white',
        fontSize: 18,
        fontWeight:'bold',
        textAlign: 'center',
        
    },
    pressed: {
        opacity:0.75
    }
   
})