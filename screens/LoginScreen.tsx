import { StackScreenProps } from '@react-navigation/stack';
import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, TouchableOpacity, View, TextInput } from 'react-native';
import { IconButton, Checkbox } from 'react-native-paper';
import {Picker} from '@react-native-community/picker';
import jwtDecode from 'jwt-decode';
import axios from 'axios';
import {apiConfig} from '../config/config';
import setTokenHook from '../hooks/storeToken'
import getTokenHook from '../hooks/getToken'

import { RootStackParamList } from '../types';

export default function LoginScreen({
  navigation,
}: StackScreenProps<RootStackParamList, 'NotFound'>) {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [role, setRole] = useState('customer')
  const [pickerVisibility, setPickerVisibility] = useState(false)
  const [toggleRemember, setToggleRemember] = useState(false)
  useEffect(() => {
    checkSession()
  },[])

  const login = () => {
    let client = axios.create({
      baseURL: `${apiConfig.baseUrl}`,
      headers: { 
         Accept: 'application/json'
      },
    });
    client.post('/session/login',{
      username: username,
      password: password,
     }).then((res) => {
       navigation.navigate('root')
     }).catch((err) => {
       alert('Error login')
     })
  }

  const setToken = () => {
    setTokenHook(username)
  }

  const checkSession = () => {
    getTokenHook().then((token) => {
      try {
        let decodedToken = token ? jwtDecode(token) : null
      } catch (e) {

      }
    })
  }
  
  const roleMapping = () => {
    switch(role) {
      case 'customer':
        return 'Pembeli'
      case 'tailor':
        return 'Penjahit'
    }
  }

  return (
    <View style={styles.container}>
      <View style={styles.formContainer}>
        <Text style={styles.title}>Sign In</Text>
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
        <Text style={styles.headingFirst}>Masuk sebagai</Text>
        <TouchableOpacity style={styles.selectView} onPress={() => setPickerVisibility(!pickerVisibility)}>
          <Text style={styles.selectText}>{`${roleMapping()}`}</Text>
          <IconButton
            icon="chevron-down"
            size={20}
            onPress={() => setPickerVisibility(!pickerVisibility)}
          />
        </TouchableOpacity>  
        {pickerVisibility ? 
          (
            <Picker
              selectedValue={role}
              style={styles.picker}
              onValueChange={(itemValue, itemIndex) =>
                setRole(itemValue)
              }
              mode='dialog'
            >
              <Picker.Item label="Pembeli" value="customer" />
              <Picker.Item label="Penjahit" value="tailor" />
            </Picker>
          ) : (<View />)
        }
        <View style={{flexDirection: "row", justifyContent: 'space-between'}}>
          <TouchableOpacity style={styles.rememberContainer} onPress={() => {setToggleRemember(!toggleRemember)}}>
            <Checkbox
              status={toggleRemember ? 'checked' : 'unchecked'}
              onPress={() => {
                setToggleRemember(!toggleRemember);
              }}
              color="#edd59e"
            />
            <Text style={styles.rememberText}>Remember me</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.rememberContainer} onPress={() => {setToggleRemember(!toggleRemember)}}>
            <Text style={styles.rememberText}>Forgot your Password?</Text>
          </TouchableOpacity>
        </View>
        <TouchableOpacity onPress={() => login()} style={styles.loginTouchable}>
          <Text style={styles.linkText}>Sign In &amp; Continue</Text>
        </TouchableOpacity>
        <Text style={{fontSize: 20, textAlign: 'center', color:'#BBCACD', marginTop: 30}}>OR</Text>
        <View style={{flexDirection: "row", justifyContent: 'center'}}>
          <View style={{backgroundColor: '#4267B2', borderRadius: '100%', marginRight: 10}}>
            <IconButton
              icon="facebook"
              size={50}
              onPress={() => {}}
              color='white'
            />
          </View>
          <View style={{backgroundColor: '#1C9DEB', borderRadius: '100%', marginLeft: 10}}>
            <IconButton
              icon="twitter"
              size={50}
              onPress={() => {}}
              color='white'
            />
          </View>
        </View>
      </View>
      
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
  },
  formContainer: {
    padding: 20,
    width: '100%',
  },
  rememberContainer: {
    flexDirection:'row',
  },
  title: {
    fontSize: 40,
    fontWeight: 'bold',
    textAlign: 'left',
  },
  headingFirst: {
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'left',
  },
  loginTouchable: {
    marginTop: 15,
    paddingVertical: 15,
    backgroundColor: '#edd59e',
    width: '100%',
    borderRadius: 30,
    paddingTop: 20,
    paddingBottom: 20,
  },
  linkText: {
    fontSize: 14,
    color: 'white',
    textAlign: 'center',
  },
  loginInput: {
    height: 40,
    borderColor: '#F6F7F9',
    borderWidth: 1 ,
    marginTop: 10,
    paddingLeft: 10,
    paddingRight: 10,
    backgroundColor: '#F6F7F9',
    width: '100%',
    borderRadius: 20,
  },
  selectView: {
    height: 40,
    borderColor: '#F6F7F9',
    borderWidth: 1 ,
    marginTop: 10,
    paddingLeft: 10,
    paddingRight: 10,
    backgroundColor: '#F6F7F9',
    width: '100%',
    borderRadius: 20,
    flexDirection:'row',
    justifyContent: 'space-between'
  },
  selectText: {
    fontSize: 14,
    color: 'black',
    textAlign: 'left',
    marginTop: 10,
  },
  rememberText: {
    fontSize: 14,
    color: '#BBCACD',
    textAlign: 'left',
    marginTop: 10,
  },
  picker: {
    width: '100%'
  },
  rememberCheckbox: {
    borderColor: 'black',
    borderWidth: 1,
  }
});

