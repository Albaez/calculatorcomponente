import React from 'react';
import { View } from 'react-native';
import CalculatorComponent from './src/screen/calculatorcomponent';


const App = () => {
  return (
    <View>
      <CalculatorComponent a={5} b={3} operation={1} />
      <CalculatorComponent a={10} b={2} operation={2} />
      <CalculatorComponent a={4} b={6} operation={3} />
      <CalculatorComponent a={8} b={0} operation={4} />
    </View>
  );
};

export default App;
