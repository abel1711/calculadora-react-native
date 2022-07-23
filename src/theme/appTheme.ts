import { StyleSheet } from "react-native";


export const styles = StyleSheet.create({
    fondo:{
        flex: 1,
        backgroundColor: 'black',
    },
    calculadoraContainer:{
        flex: 1,
        justifyContent: 'flex-end',
        paddingHorizontal: 20,
    },
    resultado: {
        color: 'white',
        textAlign: 'right',
        fontSize: 60,
        marginBottom: 10
    },
    resultadoPequeno: {
        color: 'rgba(255,255,255,.5)',
        textAlign: 'right',
        fontSize: 30,
    },
    fila: {
        flexDirection: 'row',
        justifyContent: 'center',
        marginBottom: 18,
        paddingHorizontal: 10,
    },
    boton: {
        height: 80,
        width: 80,
        backgroundColor: '#2d2d2d',
        borderRadius: 100,
        justifyContent: 'center',
        marginHorizontal: 10,
    },
    botonTexto: {
        textAlign: 'center',
        padding: 10,
        fontSize: 30,
        color: 'white',
        fontWeight: '300'
    },
})