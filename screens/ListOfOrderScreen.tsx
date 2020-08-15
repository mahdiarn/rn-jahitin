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
  typeOfWork: string;
}

let mockData: Array<Tailor>;
  mockData = [{
    id: 1,
    name: 'Jokowi PKI',
    location: 'Bogor',
    materials: 'Kayu',
    typeOfWork: 'Satuan',
  },
  {
    id: 2,
    name: 'Gibran PKI',
    location: 'Solo',
    materials: 'Wol',
    typeOfWork: 'Satuan',
  },
  {
    id: 3,
    name: 'Jan Ethes PKI',
    location: 'Jakarta',
    materials: 'Katun',
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
      <Text style={styles.textLarge}>{item.name}</Text>
      <View style={{flex: 1, flexDirection: 'row', justifyContent: 'space-between'}}>
        <Text style={styles.textMedium}>{item.location}</Text>
        <Text style={styles.textSmall}>{item.materials}</Text>
      </View>
    </View>
  );

  const search = (text: string) => {
    setQuery(text);
  }

  const createOrder = () => {
    navigation.navigate('CreateOrder')
  }
  
  return (
    <View style={styles.container}>
      <Text style={styles.title}>List of Order</Text>
      <SearchBar
        search={search}
      />
      <FlatList<Tailor>
        data={listOfTailor}
        renderItem={renderItem}
        keyExtractor={item => String(item.id)}
      />
      <TouchableOpacity
        style={styles.button}
        onPress={createOrder}
      >
        <Text>Create Order</Text>
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
  item: {
    padding: 10,
    margin: 10,
    borderRadius: 20,
  },
  textLarge: {
    fontSize: 24,
  },
  textMedium: {
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
    backgroundColor: "#DDDDDD",
    padding: 10
  },
});
