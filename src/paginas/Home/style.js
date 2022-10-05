import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#5D8679',
    },

    divTop: {
        flex: 0.8,
        flexDirection: 'row',

    },

    inputReceitas: {
        width: '80%',
        height: 60,
        borderRadius: 20,
        backgroundColor: '#BAE6BE',
        fontSize: 30,
        textAlign: 'center'
    },

    inputDespesas: {
        width: '80%',
        height: 60,
        borderRadius: 20,
        backgroundColor: '#D16762',
        fontSize: 30,
        textAlign: 'center'
    },

    divInputs: {
        flex: 2,
        alignItems: 'center',
        justifyContent: 'space-evenly'
    },

    divbtn: {
        flex: 1.4,
        alignItems: 'center',
        justifyContent: 'center'
    },

    divTitulo: {
        flex: 0.3,
        backgroundColor: '#000',
        borderTopLeftRadius: 50,
        borderTopRightRadius: 50,
        alignItems: 'center',
        justifyContent: 'center'
    },

    txtTitulo: {
        color: '#fff',
        fontSize: 24
    },

    divLista: {
        flex: 2,
        backgroundColor: '#fff',
        
    },

    itemListaReceita: {
        width:'90%',
        height:40,
        backgroundColor:'#BAE6BE',
        marginHorizontal:15,
        borderRadius:20,
        justifyContent:'space-around',
        alignItems:'center',
        flexDirection:'row',
        marginTop:8,
        
    },

    itemListaDespesa: {
        width:'90%',
        height:40,
        backgroundColor:'#D16762',
        marginHorizontal:15,
        borderRadius:20,
        justifyContent:'space-around',
        alignItems:'center',
        flexDirection:'row',
        marginTop:8,
        
    },

    txtTipo: {
        fontSize:20,
        
    },

    valorItem: {
        fontSize:21,
        fontWeight:'bold'
    }

})

export default styles;