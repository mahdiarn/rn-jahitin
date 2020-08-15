import * as React from 'react';
import { TextInput, StyleSheet, View } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

export interface Props {
  search: Function,
}

export function SearchBar(props: Props) {
  return (
    <View style={styles.searchSection}>
      <Ionicons style={styles.searchIcon} name="ios-search" size={20} color="#000"/>
      <TextInput
        onChangeText={(search) => props.search(search)}
        style={styles.searchBar}
        placeholder="Search..."
      />
    </View>
  )
}

const styles = StyleSheet.create({
  searchBar: {
    fontSize: 24,
    margin: 11,
  },
  searchIcon: {
    marginTop: 10
  },
  searchSection: {
    margin: 10,
    padding: 10,
    backgroundColor: '#D3D3D3',
    borderRadius: 20,
    height: 60,
    flexDirection: "row",
    justifyContent: 'flex-start',
  }
});
