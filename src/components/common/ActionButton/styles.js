import { StyleSheet,
    Dimensions, StatusBar } from 'react-native';

const { width, height } = Dimensions.get('window');

export const styles = StyleSheet.create({
    root: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'white'
    },

    mainActionButton: {
        backgroundColor: 'red',
        width: 60,
        height: 60,
        borderRadius: 50,
        elevation: 50,
        alignItems: 'center',
        justifyContent: 'center',
        position: 'absolute',
        bottom: 35,
        right: 35
    }
})