import { StyleSheet, Dimensions, StatusBar } from 'react-native';

const { width, height } = Dimensions.get('window');

export const styles = StyleSheet.create({
    root: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'white'
    },

    buttonContainer: {
        width: 200,
        height: 50,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'white',
        marginVertical: 10
    },

    textContainerStyle: {
        width: '50%',
        height: 55,
        marginTop: 5,
        backgroundColor: '#d9d9d9',
    },

    textStyle: {
        fontSize: 16
    },

    labelStyle: {
        letterSpacing: 0.5
    }
})