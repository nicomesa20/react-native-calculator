import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  fondo: {
    flex: 1,
    backgroundColor: 'black',
    // paddingHorizontal: 20,
  },
  calculadoraContainer: {
    paddingHorizontal: 10,
    flex: 1,
    justifyContent: 'flex-end',
  },
  resultado: {
    color: 'white',
    fontSize: 60,
    textAlign: 'right',
    marginBottom: 10,
  },
  resultadoPequeno: {
    color: 'rgba(255, 255, 255, 0.5)',
    textAlign: 'right',
    fontSize: 30,
  },
  fila: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginBottom: 10,
    paddingHorizontal: 10,
  },
  boton: {
    height: 80,
    width: 80,
    backgroundColor: '#333',
    borderRadius: 100,
    justifyContent: 'center',
    marginHorizontal: 10,
  },
  botonTexto: {
    textAlign: 'center',
    color: 'white',
    fontSize: 30,
    fontWeight: 'bold',
  },
});
