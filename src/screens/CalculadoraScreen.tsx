import React, {useState} from 'react';
import {View, Text} from 'react-native';
import {styles} from '../theme/appTheme';
import {BotonCalc} from '../components/BotonCalc';

export const CalculadoraScreen = () => {
  const [numeroAnterior, setNumeroAnterior] = useState('0');
  const [numero, setNumero] = useState('100');

  const limpiar = () => {
    setNumeroAnterior('0');
    setNumero('0');
  };

  const armarNumero = (texto: string) => {
    if (numero === '0') {
      setNumero(texto);
    } else {
      setNumero(numero + texto);
    }
  };
  return (
    <View style={styles.calculadoraContainer}>
      <Text style={styles.resultadoPequeno}>{numeroAnterior}</Text>
      <Text style={styles.resultado} numberOfLines={1} adjustsFontSizeToFit>
        {numero}
      </Text>
      <View style={styles.fila}>
        <BotonCalc texto="C" color="#a5a5a5" accion={limpiar} />
        <BotonCalc texto="+/-" color="#a5a5a5" accion={limpiar} />
        <BotonCalc texto="%" color="#a5a5a5" accion={limpiar} />
        <BotonCalc texto="/" color="#fd9f07" accion={limpiar} />
      </View>
      <View style={styles.fila}>
        <BotonCalc texto="7" accion={armarNumero} />
        <BotonCalc texto="8" accion={armarNumero} />
        <BotonCalc texto="9" accion={armarNumero} />
        <BotonCalc texto="X" color="#fd9f07" accion={limpiar} />
      </View>
      <View style={styles.fila}>
        <BotonCalc texto="4" accion={armarNumero} />
        <BotonCalc texto="5" accion={armarNumero} />
        <BotonCalc texto="6" accion={armarNumero} />
        <BotonCalc texto="-" color="#fd9f07" accion={limpiar} />
      </View>
      <View style={styles.fila}>
        <BotonCalc texto="1" accion={armarNumero} />
        <BotonCalc texto="2" accion={armarNumero} />
        <BotonCalc texto="3" accion={armarNumero} />
        <BotonCalc texto="+" color="#fd9f07" accion={limpiar} />
      </View>
      <View style={styles.fila}>
        <BotonCalc texto="0" ancho accion={armarNumero} />
        <BotonCalc texto="." accion={armarNumero} />
        <BotonCalc texto="=" color="#fd9f07" accion={limpiar} />
      </View>
    </View>
  );
};
