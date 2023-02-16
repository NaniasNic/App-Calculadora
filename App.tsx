import react, { useState } from "react";
import { SafeAreaView, TextInput } from 'react-native';

import { styles } from "./styles/styles";

import { Keypad } from './components/Keyboard/Keypad';

export default function App() {
  const [input, setInput] = useState('');

  const handleClick = (value) => {
    setInput(input + value);
  };

  const handleEqual = () => {
    setInput(eval(input).toString());
  };

  const handleClear = () => {
    setInput("")
  };

  return (
    <SafeAreaView style={styles.container}>
      <TextInput 
        style={styles.display}
        value={input}
        editable={false}
      />

      <Keypad 
        handleClick={handleClick}
        handleEqual={handleEqual}
        handleClear={handleClear}
      />
    </SafeAreaView>
  );
};