import React from 'react';
import { Text, View } from 'react-native';


const CalculatorComponent = ({ a, b, operation }: { a: number, b: number, operation: number }) => {
  let result;

  switch (operation) {
    case 1:
      result = a + b;
      break;
    case 2:
      result = a - b;
      break;
    case 3:
      result = a * b;
      break;
    case 4:
      if (b !== 0) {
        result = a / b;
      } else {
        result = 'Error: división por cero';
      }
      break;
    default:
      result = 'Operación inválida';
  }

  return (
    <View>
      <Text>Resultado: {result}</Text>
    </View>
  );
};

export default CalculatorComponent;