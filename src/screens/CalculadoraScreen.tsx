import React from 'react';
import { Text, View } from 'react-native';
import { BotonCalc } from '../components/BotonCalc';
import { styles } from '../theme/appTheme';
import { useCalculadora } from '../hooks/useCalculadora';



export const CalculadoraScreen = () => {

    const {
        armarNumero,
        borrarUltimo,
        btnDividir,
        btnMultiplicar,
        btnRestar,
        btnSumar,
        calcular,
        limpiar,
        positivoNegativo,
        numero,
        numeroAnterior } = useCalculadora();

    return (
        <View style={styles.calculadoraContainer}>
            {
                (numeroAnterior !== '0') && (<Text style={styles.resultadoPequeno}>{numeroAnterior}</Text>)
            }

            <Text
                style={styles.resultado}
                numberOfLines={1}
                adjustsFontSizeToFit
            >{numero}</Text>

            {/* Fila de botonos */}
            <View style={styles.fila}>
                <BotonCalc texto='C' color='#9b9b9b' accion={limpiar} />
                <BotonCalc texto='+/-' color='#9b9b9b' accion={positivoNegativo} />
                <BotonCalc texto='DEL' color='#9b9b9b' accion={borrarUltimo} />
                <BotonCalc texto='/' color='#ff9427' accion={btnDividir} />
            </View>

            {/* Fila de botonos */}
            <View style={styles.fila}>
                <BotonCalc texto='7' accion={armarNumero} />
                <BotonCalc texto='8' accion={armarNumero} />
                <BotonCalc texto='9' accion={armarNumero} />
                <BotonCalc texto='X' color='#ff9427' accion={btnMultiplicar} />
            </View>

            {/* Fila de botonos */}
            <View style={styles.fila}>
                <BotonCalc texto='4' accion={armarNumero} />
                <BotonCalc texto='5' accion={armarNumero} />
                <BotonCalc texto='6' accion={armarNumero} />
                <BotonCalc texto='-' color='#ff9427' accion={btnRestar} />
            </View>

            {/* Fila de botonos */}
            <View style={styles.fila}>
                <BotonCalc texto='1' accion={armarNumero} />
                <BotonCalc texto='2' accion={armarNumero} />
                <BotonCalc texto='3' accion={armarNumero} />
                <BotonCalc texto='+' color='#ff9427' accion={btnSumar} />
            </View>

            {/* Fila de botonos */}
            <View style={styles.fila}>
                <BotonCalc texto='0' ancho accion={armarNumero} />
                <BotonCalc texto='.' accion={armarNumero} />
                <BotonCalc texto='=' color='#ff9427' accion={calcular} />
            </View>
        </View>
    )
}
