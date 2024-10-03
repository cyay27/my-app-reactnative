import { View, Text, StyleSheet, Button, Animated } from 'react-native';
import { useState, useRef } from 'react';

export default function HomeScreen() {
  const [message, setMessage] = useState("Hello React Native");
  const animation = useRef(new Animated.Value(1)).current;

  const handlePress = () => {
    setMessage("Button Pressed!");
    Animated.spring(animation, {
      toValue: 1.5,
      friction: 3,
      useNativeDriver: true,
    }).start(() => {
      Animated.spring(animation, {
        toValue: 1,
        friction: 3,
        useNativeDriver: true,
      }).start();
    });
  };

  return (
    <View style={styles.viewContainer}>
      <Animated.Text style={[styles.message, { transform: [{ scale: animation }] }]}>
        {message}
      </Animated.Text>
      <Button title="Press Me" onPress={handlePress} />
    </View>
  );
}

const styles = StyleSheet.create({
  viewContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    gap: 8,
    backgroundColor: '#f0f0f0',
  },
  message: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 20,
  },
});
