import { StyleSheet, Dimensions } from 'react-native';

const { width, height } = Dimensions.get('screen');

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },

    shaderView: {
        flex: 1,
        backgroundColor: 'black',
    },

    pickerContainer: {
        height: 100,
        width: 80,
        zIndex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },

    listContainer: {
        width: width,
        backgroundColor: 'white',
        position: 'absolute',
        zIndex: 3,
        
    },

    searchContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginHorizontal: width * 0.05,
        marginBottom: height * 0.01
    }
})