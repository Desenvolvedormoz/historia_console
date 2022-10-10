import { StyleSheet } from "react-native";

const estilos = StyleSheet.create({
    container: {
        justifyContent: 'center',
        alignItems: 'center',
        padding: 20,
    },

    img: {
        width: 340,
        height:240,
        marginBottom: 20
    },
    texto: {
        fontSize: 22,
        fontWeight: 'bold',
        alignItems: 'center',
        marginBottom: 20
    },
    textCorpo: {
        marginBottom: 25,
    },
    
    containerPai: {
       flexDirection: 'row',
       justifyContent: 'space-between',
       flexWrap: 'wrap',
    },

    containerFilho: {
        minWidth: 150,
        backgroundColor: 'rgb(0,128,64)',
        marginBottom: 10,
        alignItems: 'center',
        paddingVertical: 20,
        paddingHorizontal: 10,
        flex: 1,
        borderWidth: 1,
        borderColor: '#939393',
        borderRadius: 5,
        marginHorizontal: 10
    },

    imageIcon: {
        width: 60,
        height: 60,
        marginBottom: 5
    },
    cardTexto: {
        textAlign: 'center',
        textTransform:'uppercase',
        lineHeight: 20
    },
    containerVermelho: {
        minWidth: 150,
        backgroundColor: '#a70c40ee',
        marginBottom: 10,
        alignItems: 'center',
        paddingVertical: 20,
        paddingHorizontal: 10,
        flex: 1,
        borderWidth: 1,
        borderColor: '#939393',
        borderRadius: 5,
        marginHorizontal: 10
    },
    containerPlayStation: {
        minWidth: 150,
        backgroundColor: 'rgb(7,66,208)',
        marginBottom: 10,
        alignItems: 'center',
        paddingVertical: 20,
        paddingHorizontal: 10,
        flex: 1,
        borderWidth: 1,
        borderColor: '#939393',
        borderRadius: 5,
        marginHorizontal: 10
    }
})
export default estilos;