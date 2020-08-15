import React, { useState, useEffect } from 'react';
import { StyleSheet, ListRenderItem } from 'react-native';

import EditScreenInfo from '../components/EditScreenInfo';
import { Text, View } from '../components/Themed';
import { RootStackParamList } from '../types';
import { StackScreenProps } from '@react-navigation/stack';
import { FlatList, TouchableOpacity } from 'react-native-gesture-handler';
import { SearchBar } from '../components/SearchBar';

interface Order {
  id: number,
  name: string,
  location: string,
  materials: string,
  type: string,
  qty: number,
  priceEstimated: number,
  status: string,
}

let mockData: Array<Order>;
  mockData = [{
    id: 1,
    name: 'Jokowi',
    location: 'Bogor',
    materials: 'Kayu',
    type: 'Sweater',
    qty: 9,
    priceEstimated: 9,
    status: 'Done'
  },
  {
    id: 2,
    name: 'Gibran',
    location: 'Solo',
    materials: 'Wol',
    type: 'Sweater',
    qty: 9,
    priceEstimated: 9,
    status: 'Done'
  },
  {
    id: 3,
    name: 'Jan Ethes',
    location: 'Jakarta',
    materials: 'Katun',
    type: 'Sweater',
    qty: 9,
    priceEstimated: 9,
    status: 'Done'
  },
]; 

export default function MainScreen({
  navigation,
}: StackScreenProps<RootStackParamList, 'NotFound'>) {
  const [listOfOrder, setlistOfOrder] = useState<Order[]>([])
  const [query, setQuery] = useState<String>('');

  useEffect(() => {
    setlistOfOrder(mockData);
  }, [])

  const renderItem: ListRenderItem<Order> = ({ item }) => (
    <View style={styles.item}>
    <View style={{flex: 1, flexDirection: 'row', justifyContent: 'space-between', paddingLeft: 10}}>
      <Text style={styles.textLarge}>{item.name}</Text>
      <Text style={styles.textSmall}>{item.status}</Text>
    </View>
    <View style={{flex: 1, flexDirection: 'row', justifyContent: 'space-between', paddingLeft: 10}}>
      <View style={{flex: 1, flexDirection: 'column-reverse', justifyContent: 'flex-start', paddingBottom: 30}}>
        <Text style={styles.textSmall}>{`${item.materials} - ${item.type}`}</Text>
        <Text style={styles.textSmall}>{`Pesan ${item.qty}`}</Text>
        <Text style={styles.textSmall}>{`Rp ${item.priceEstimated}`}</Text>
      </View>
      {
        item.status === 'Rejected' && (
          <TouchableOpacity
            style={styles.button}
            onPress={createOrder}
          >
            <Text style={styles.textLarge} >Pesan</Text>
          </TouchableOpacity>
        )
      }
    </View>
  </View>
  );

  const search = (text: string) => {
    setQuery(text);
  }

  const createOrder = () => {
    navigation.navigate('SearchVendor')
  }
  
  return (
    <View style={styles.container}>
      <Text style={styles.title}>List of Order</Text>
      <SearchBar
        search={search}
      />
      <FlatList<Order>
        data={listOfOrder}
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
    backgroundColor: "#EDAC9E",
    color: "#000000",
    margin: 22,
    padding: 10,
    borderRadius: 20,
  },
});
