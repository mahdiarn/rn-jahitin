import React, { useState, useEffect } from 'react';
import { StyleSheet, ListRenderItem } from 'react-native';

import EditScreenInfo from '../components/EditScreenInfo';
import { Text, View } from '../components/Themed';
import { RootStackParamList } from '../types';
import { StackScreenProps } from '@react-navigation/stack';
import { FlatList, TouchableOpacity } from 'react-native-gesture-handler';
import { SearchBar } from '../components/SearchBar';

interface Tailor {
  id: number;
  name: string;
  location: string;
  materials: string;
  rating: number;
  priceEstimated: number;
  typeOfWork: string;
}

let mockData: Array<Tailor>;
  mockData = [{
    id: 1,
    name: 'Jokowi',
    location: 'Bogor',
    materials: 'Kayu',
    rating: 3,
    priceEstimated: 5000,
    typeOfWork: 'Satuan',
  },
  {
    id: 2,
    name: 'Gibran',
    location: 'Solo',
    materials: 'Wol',
    rating: 4.5,
    priceEstimated: 15000,
    typeOfWork: 'Satuan',
  },
  {
    id: 3,
    name: 'Jan Ethes',
    location: 'Jakarta',
    materials: 'Katun',
    rating: 5,
    priceEstimated: 5000,
    typeOfWork: 'Grosiran',
  },
]; 

export default function MainScreen({
  navigation,
}: StackScreenProps<RootStackParamList, 'NotFound'>) {
  const [listOfTailor, setlistOfTailor] = useState<Tailor[]>([])
  const [query, setQuery] = useState<String>('');

  useEffect(() => {
    setlistOfTailor(mockData);
  }, [])

  const renderItem: ListRenderItem<Tailor> = ({ item }) => (
    <View style={styles.item}>
      <View style={{flex: 1, flexDirection: 'row', justifyContent: 'space-between', paddingLeft: 10}}>
        <Text style={styles.textLarge}>{item.name}</Text>
        <Text style={styles.textRating}>{item.rating}</Text>
        <Text style={styles.textLoc}>{item.location}</Text>
      </View>
      <View style={{flex: 1, flexDirection: 'row', justifyContent: 'space-between', paddingLeft: 10}}>
        <View style={{flex: 1, flexDirection: 'column-reverse', justifyContent: 'flex-start', paddingBottom: 30}}>
          <Text style={styles.textSmall}>{item.materials}</Text>
          <Text style={styles.textSmall}>{item.materials}</Text>
        </View>
        <TouchableOpacity
          style={styles.button}
          onPress={createOrder}
        >
          <Text style={styles.textLarge}>Pesan</Text>
        </TouchableOpacity>
      </View>
    </View>
  );

  const search = (text: string) => {
    setQuery(text);
  }

  const createOrder = () => {
    navigation.navigate('Order')
  }
  
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Hasil Pencarian</Text>
      <FlatList<Tailor>
        data={listOfTailor}
        renderItem={renderItem}
        keyExtractor={item => String(item.id)}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 22,
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
  textRating: {
    fontSize: 18,
    color: "#03A71A",
  },
  textLoc: {
    fontSize: 18,
  },
  textSmall: {
    fontSize: 16,
  },
  title: {
    textAlign: 'left',
    marginTop: 30,
    marginLeft: 10,
    fontSize: 32,
    color: '#000000',
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