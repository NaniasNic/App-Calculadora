import { Text, TouchableOpacity, View } from "react-native";
import { styles } from "./styles";

export function Keypad({handleClick, handleEqual, handleClear}) {
  return (
    <View style={styles.container}>
      <TouchableOpacity 
        onPress={() => handleClick("7")}
        style={styles.button}
      >
        <Text style={styles.numbers}>7</Text>
      </TouchableOpacity>
      
      <TouchableOpacity 
        onPress={() => handleClick("8")}
        style={styles.button}
      >
        <Text style={styles.numbers}>8</Text>
      </TouchableOpacity>
      
      <TouchableOpacity 
        onPress={() => handleClick("9")}
        style={styles.button}
      >
        <Text style={styles.numbers}>9</Text>
      </TouchableOpacity>
      
      <TouchableOpacity 
        onPress={() => handleClick("/")}
        style={styles.button}
      >
        <Text style={styles.numbers}>/</Text>
      </TouchableOpacity>
      
      <TouchableOpacity 
        onPress={() => handleClick("4")}
        style={styles.button}
      >
        <Text style={styles.numbers}>4</Text>
      </TouchableOpacity>
      
      <TouchableOpacity 
        onPress={() => handleClick("5")}
        style={styles.button}
      >
        <Text style={styles.numbers}>5</Text>
      </TouchableOpacity>
      
      <TouchableOpacity 
        onPress={() => handleClick("6")}
        style={styles.button}
      >
        <Text style={styles.numbers}>6</Text>
      </TouchableOpacity>
      
      <TouchableOpacity 
        onPress={() => handleClick("*")}
        style={styles.button}
      >
        <Text style={styles.numbers}>*</Text>
      </TouchableOpacity>
      
      <TouchableOpacity 
        onPress={() => handleClick("1")}
        style={styles.button}
      >
        <Text style={styles.numbers}>1</Text>
      </TouchableOpacity>
      
      <TouchableOpacity 
        onPress={() => handleClick("2")}
        style={styles.button}
      >
        <Text style={styles.numbers}>2</Text>
      </TouchableOpacity>
      
      <TouchableOpacity 
        onPress={() => handleClick("3")}
        style={styles.button}
      >
        <Text style={styles.numbers}>3</Text>
      </TouchableOpacity>
      
      <TouchableOpacity 
        onPress={() => handleClick("-")}
        style={styles.button}
      >
        <Text style={styles.numbers}>-</Text>
      </TouchableOpacity>
      
      <TouchableOpacity 
        onPress={() => handleClick("0")}
        style={styles.button}
      >
        <Text style={styles.numbers}>0</Text>
      </TouchableOpacity>
      
      <TouchableOpacity
        onPress={() => handleEqual()} 
        style={styles.button}
      >
        <Text style={styles.numbers}>=</Text>
      </TouchableOpacity>
      
      <TouchableOpacity
        onPress={() => handleClear()} 
        style={styles.button}
      >
        <Text style={styles.numbers}>C</Text>
      </TouchableOpacity>
      
      <TouchableOpacity 
        onPress={() => handleClick("+")}
        style={styles.button}
      >
        <Text style={styles.numbers}>+</Text>
      </TouchableOpacity>
    </View>
  );
};