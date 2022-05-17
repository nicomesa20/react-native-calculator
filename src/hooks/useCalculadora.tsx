/* eslint-disable curly */
import {useState, useRef} from 'react';
import {Operadores} from '../screens/CalculadoraScreen';

export const useCalculadora = () => {
  const [numeroAnterior, setNumeroAnterior] = useState('0');
  const [numero, setNumero] = useState('100');
  const ultimaOperacion = useRef<Operadores>();

  const limpiar = () => {
    setNumeroAnterior('0');
    setNumero('0');
  };

  const armarNumero = (texto: string) => {
    if (numero.includes('.') && texto === '.') return;
    if (numero.startsWith('0') || numero.startsWith('-0')) {
      if (texto === '.') setNumero(numero + texto);
      else if (texto === '0' && numero.includes('.')) setNumero(numero + texto);
      else if (texto !== '0' && !numero.includes('.')) setNumero(texto);
      else if (texto !== '0' && numero.includes('.')) setNumero(numero);
    } else {
      setNumero(numero + texto);
    }
  };

  const positivoNegativo = () => {
    if (numero[0] === '-') {
      setNumero(numero.replace('-', ''));
    } else {
      setNumero('-' + numero);
    }
  };

  const btnDelete = () => {
    if (numero.length === 1 || numero.startsWith('-')) {
      setNumero('0');
    } else {
      setNumero(numero.slice(0, -1));
    }
  };

  const cambiarNumPorAnterior = () => {
    if (numero.endsWith('.')) {
      setNumeroAnterior(numero.slice(0, -1));
    } else {
      setNumeroAnterior(numero);
    }
    setNumero('0');
  };

  const btnDividir = () => {
    cambiarNumPorAnterior();
    ultimaOperacion.current = Operadores.dividir;
  };

  const btnMultiplicar = () => {
    cambiarNumPorAnterior();
    ultimaOperacion.current = Operadores.multiplicar;
  };

  const btnRestar = () => {
    cambiarNumPorAnterior();
    ultimaOperacion.current = Operadores.restar;
  };

  const btnSumar = () => {
    cambiarNumPorAnterior();
    ultimaOperacion.current = Operadores.sumar;
  };

  const calcular = () => {
    const numeroAnteriorNum = Number(numeroAnterior);
    const numeroNum = Number(numero);

    switch (ultimaOperacion.current) {
      case Operadores.dividir:
        if (numeroNum === 0) {
          setNumero('Error');
        }
        setNumero(`${numeroAnteriorNum / numeroNum}`);
        break;
      case Operadores.multiplicar:
        setNumero(`${numeroAnteriorNum * numeroNum}`);
        break;
      case Operadores.restar:
        setNumero(`${numeroAnteriorNum - numeroNum}`);
        break;
      case Operadores.sumar:
        setNumero(`${numeroAnteriorNum + numeroNum}`);
        break;
      default:
        setNumero('Error');
        break;
    }
    setNumeroAnterior('0');
  };

  return {
    numeroAnterior,
    numero,
    limpiar,
    armarNumero,
    positivoNegativo,
    btnDelete,
    btnDividir,
    btnMultiplicar,
    btnRestar,
    btnSumar,
    calcular,
  };
};
