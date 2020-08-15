import * as React from 'react';
import { TextInput, StyleSheet } from 'react-native';

export interface Props {
  search: Function,
}

export function SearchBar(props: Props) {
  return (
    <TextInput
      onChangeText={(search) => props.search(search)}
      style={styles.searchBar}
      placeholder="Search..."
    />
  )
}

const styles = StyleSheet.create({
  searchBar: {
    fontSize: 24,
    margin: 10,
    height: 60,
    backgroundColor: '#D3D3D3',
    borderRadius: 20,
  },
});
