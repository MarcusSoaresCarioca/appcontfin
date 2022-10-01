import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },

    divForm: {
        flex: 4,
        backgroundColor: '#506266',
        paddingTop: 20,
    },

    divInput1: {
        alignItems: 'flex-start',
        justifyContent: 'center',
        width: 240,
        height: 80,
        backgroundColor: '#7FF08C',
        margin: 10,
        borderRadius: 10,
        flexDirection:'row'

    },

    divInput2: {
        alignItems: 'flex-start',
        justifyContent: 'center',
        width: 240,
        height: 80,
        backgroundColor: '#EB4A4A',
        margin: 10,
        borderRadius: 10,
        flexDirection:'row'

    },

    txtinput: {
        fontSize: 28,
        textAlign: 'center',
        justifyContent: 'center',
        fontWeight: 'bold',
    },

    divIcon: {
        flex: 1,
    },

    divFinanceiro: {
        flex: 1,
        backgroundColor: '#000',
        alignItems: 'center',
        justifyContent: 'center',

        borderTopStartRadius: 100,
        borderTopEndRadius: 100,


    },

    txtfinanceiro: {
        color: '#fff',
        fontSize: 20,
        fontWeight: 'bold'
    },

    divResult: {
        flex: 4
    }
})

export default styles;