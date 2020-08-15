import React from 'react';
import { StyleSheet, Image} from 'react-native';

import { Text, View } from '../components/Themed';
import { RootStackParamList } from '../types';
import { StackScreenProps } from '@react-navigation/stack';
import { TouchableOpacity } from 'react-native-gesture-handler';

export default function MainScreen({
  navigation,
}: StackScreenProps<RootStackParamList, 'NotFound'>) {
  const order = () => {
    navigation.navigate('ListOfOrder')
  }

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Image
          style={styles.tinyLogo}
          source={require('../assets/images/thumbs.png')}
        />
        <Text style={styles.title}>Pesanan Anda sedang diproses</Text>
      </View>
      <View style={styles.smallContainer}>
        <Text style={styles.textLarge}>Penjahit ABC</Text>
        <Text style={styles.textSmall}>XS: 0</Text>
        <Text style={styles.textSmall}>XS: 0</Text>
        <Text style={styles.textSmall}>S: 0</Text>
        <Text style={styles.textSmall}>M: 0</Text>
        <Text style={styles.textSmall}>L: 0</Text>
        <Text style={styles.textSmall}>XL: 0</Text>
        <Text style={styles.textSmall}>XXL: 0</Text>
        <Text style={styles.textLoc}>Lokasi Anda: Jalan ABC Bandung </Text>
      </View>
      <TouchableOpacity
        style={styles.button}
        onPress={order}
    >
        <Text style={styles.textLarge}>Ke Daftar Pesanan</Text>
    </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 22,
    backgroundColor: '#edd59e',
  },
  header: {
    paddingTop: 23,
    alignItems: 'center',
    backgroundColor: '#edd59e',
  },
  item: {
    padding: 10,
    margin: 10,
    borderRadius: 20,
  },
  textLarge: {
    fontSize: 24,
  },
  textSmall: {
    fontSize: 16,
    padding: 10
  },
  textLoc: {
    fontSize: 16,
    padding: 5
  },
  tinyLogo: {
    width: 50,
    height: 50,
  },
  title: {
    textAlign: 'left',
    marginTop: 30,
    marginLeft: 10,
    fontSize: 32,
    color: '#000000',
  },
  smallContainer: {
    marginTop: 30,
    marginLeft: 10,
    marginRight: 10,
    backgroundColor: '#ffffff',
    padding: 10,
  },
  button: {
    alignItems: "center",
    textAlignVertical: "bottom",
    backgroundColor: "#EDAC9E",
    color: "#000000",
    margin: 22,
    padding: 10,
    borderRadius: 20,
  },
});