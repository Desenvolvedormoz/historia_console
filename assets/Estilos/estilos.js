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
        justifyContent: "center",
        alignItems: 'center',
        width: "100%",
        marginBottom: 20
    },

    containerFilho: {
        width: 100,
        height: 100,
    }
})
export default estilos;