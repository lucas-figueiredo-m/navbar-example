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
    },

    pickerItemContainer: {
        width: width,
        height: height * 0.055,
        paddingHorizontal: width * 0.05,
        marginVertical: 2,
        backgroundColor: 'white',
        alignItems: 'center',
        justifyContent: 'center'
    },

    searchInput: {
        borderBottomWidth: 1,
        flex: 8
    },

    scrollContainer: {
        marginBottom: height * 0.10
    }
})