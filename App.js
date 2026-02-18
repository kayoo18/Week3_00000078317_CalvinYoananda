import React, { useState } from 'react';
import { TextInput, StyleSheet, View } from 'react-native';
import Counter from './Components/Counter';
import Profile from './Components/Profile';

export default function App() {
  const [count, setCount] = useState(0);
  const [name, setName] = useState('');
  const [showProfile, setShowProfile] = useState(false);

  const handleIncrement = () => {
    setCount(count + 1);
  };

  const handleDecrement = () => {
    setCount(count - 1);
  };

  const handlePassValue = () => {
    setShowProfile(true);
  };

  return (
    <View style={styles.container}>
      <Counter
        value={count}
        handleIncrement={handleIncrement}
        handleDecrement={handleDecrement}
        handlePassValue={handlePassValue}
      />

      <TextInput
        placeholder="input your name here"
        style={styles.input}
        value={name}
        onChangeText={setName}
      />

      {showProfile && (
        <Profile name={name} age={count} />
      )}

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
    input: {
    borderWidth: 1,
    padding: 10,
    width: 200,
    marginTop: 20,
  },
});
