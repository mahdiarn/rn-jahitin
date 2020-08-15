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
      <Text style={styles.title}>Jahitin</Text>
      <View style={styles.buttonsContainer}>
        <View style={styles.buttonItemContainer}>
            <TouchableOpacity onPress={() => navigation.navigate('Login')} style={styles.loginTouchable}>
                <Text style={styles.loginText}>Sign In</Text>
            </TouchableOpacity>
        </View>
        <View style={styles.buttonItemContainer}>
            <TouchableOpacity onPress={() => navigation.navigate('Register')} style={styles.registerTouchable}>
                <Text style={styles.registerText}>Sign Up</Text>
            </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#edd59e',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  buttonsContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  buttonItemContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  title: {
    fontSize: 100,
    fontWeight: 'bold',
    color: '#fff'
  },
  loginTouchable: {
    marginTop: 15,
    paddingVertical: 15,
    backgroundColor: '#EDAC9E',
    width: '100%',
    borderRadius: 20,
  },
  registerTouchable: {
    marginTop: 15,
    paddingVertical: 15,
    backgroundColor: '#fff',
    width: '100%',
    borderRadius: 20,
  },
  loginText: {
    fontSize: 14,
    color: '#fff',
    textAlign: 'center',
  },
  registerText: {
    fontSize: 14,
    color: '#EDAC9E',
    textAlign: 'center',
  },
});

