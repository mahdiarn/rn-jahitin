import { StackScreenProps } from '@react-navigation/stack';
import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, TouchableOpacity, View, TextInput } from 'react-native';
import jwtDecode from 'jwt-decode';
import setTokenHook from '../hooks/storeToken'
import getTokenHook from '../hooks/getToken'

import { RootStackParamList } from '../types';

export default function LoginScreen({
  navigation,
}: StackScreenProps<RootStackParamList, 'NotFound'>) {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  useEffect(() => {
    checkSession()
  },[])

  const login = () => {
    // login
  }

  const setToken = () => {
    setTokenHook(username)
  }

  const checkSession = () => {
    getTokenHook().then((token) => {
      try {
        let decodedToken = jwtDecode(token)
      } catch (e) {

      }
    })
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Welcome!</Text>
      <TextInput
        style={styles.loginInput}
        onChangeText={text => setUsername(text)}
        value={username}
        placeholder={`Username`}
      />
      <TextInput
        style={styles.loginInput}
        onChangeText={text => setPassword(text)}
        value={password}
        placeholder={`Password`}
        textContentType="password"
        secureTextEntry
      />
      <TouchableOpacity onPress={() => login()} style={styles.loginTouchable}>
        <Text style={styles.linkText}>Login</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  loginTouchable: {
    marginTop: 15,
    paddingVertical: 15,
    backgroundColor: '#ddd',
    width: '100%'
  },
  registerTouchable: {
    marginTop: 15,
    paddingVertical: 15,
    width: '100%'
  },
  linkText: {
    fontSize: 14,
    color: '#2e78b7',
    textAlign: 'center',
  },
  loginInput: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1 ,
    marginTop: 10,
    paddingLeft: 10,
    paddingRight: 10,
  },
});

