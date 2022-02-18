import { useNavigation } from '@react-navigation/core'
import React, { useState } from 'react'
// Importing components from react-native library.
import { SafeAreaView, StyleSheet, TextInput, Text, TouchableOpacity, View } from "react-native";
import Logo from '../components/Logo'
import { theme } from '../config/colors'

const ResetPassword = () => {
  const [email, setEmail] = useState('')
 
  const navigation = useNavigation()

  const handleSend = () => {
    console.info('Şifre gönderildi');
    navigation.navigate("Login");
  }

  return (
    // Using react-natives built in components.
    <SafeAreaView>
      <View style={styles.container}>
        <Logo/>
        <TextInput
              placeholder="Email"
              value={email}
              onChangeText={text => setEmail(text)}
              style={styles.input}
        />
        <TouchableOpacity style={styles.button} onPress={handleSend}>
          <Text style={styles.buttonText}>Send Password</Text>
        </TouchableOpacity>
        </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: "20%"
  },
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },
  button: {
    alignItems: "center",
    backgroundColor: theme.colors.primary,
    padding: 10,
    margin: 20
  },
  buttonText: {
    color: theme.colors.lightText,
    fontWeight: '700',
    fontSize: 16,
  },
});

export default ResetPassword;

