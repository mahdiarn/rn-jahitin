import { StackScreenProps } from "@react-navigation/stack";
import { RootStackParamList } from "../types";
import { View, StyleSheet, TextInput, Picker } from "react-native";
import React, { useState, useEffect }  from 'react';
import { Text } from "../components/Themed";
import { TouchableOpacity } from "react-native-gesture-handler";

const Materials : Array<string> = [
  'Wol', 'Katun', 'Plastik', 'Velvet'
]

const Type : Array<string> = [
  'Kemeja', 'Jas', 'Kebaya', 'Batik'
]

export default function SearchVendorScreen({
  navigation,
}: StackScreenProps<RootStackParamList, 'NotFound'>) {
  const [selectedType, setselectedType] = useState<string>("");
  const [selectedMaterials, setselectedMaterials] = useState<string>("");
  const [selectedBudget, setSelectedBudget] = useState<number>(0);

  const createOrder = () => {
    navigation.navigate('ChooseVendor', {
      type: selectedType,
      materials: selectedMaterials,
      budget: selectedBudget,
    })
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Pencarian Toko</Text>
      <Picker
        selectedValue={selectedMaterials}
        prompt={`Bahan Pengerjaan`}
        onValueChange={(itemValue) => setselectedMaterials(itemValue)}
      >
        {
          Materials.map(item => {
            return ( <Picker.Item label={item} value={item} /> )
          })
        }
      </Picker>
      <Picker
        selectedValue={selectedType}
        prompt={`Tipe Pakaian`}
        onValueChange={(itemValue) => setselectedType(itemValue)}
      >
        {
          Type.map(item => {
            return ( <Picker.Item label={item} value={item} /> )
          })
        }
      </Picker>
      <TextInput
        style={styles.input}
        keyboardType = 'numeric'
        onChangeText={(Text) => setSelectedBudget(Number(Text))}
        placeholder={`Budget`}
      />
      <TouchableOpacity
        style={styles.button}
        onPress={createOrder}
      >
        <Text style={styles.textLarge} >Create Order</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 22,
    backgroundColor: '#ffffff',
  },
  textLarge: {
    fontSize: 24,
    color: "#ffffff",
  },
  title: {
    textAlign: 'left',
    marginTop: 30,
    marginLeft: 10,
    fontSize: 32,
    color: '#edd59e',
  },
  button: {
    alignItems: "center",
    textAlignVertical: "bottom",
    backgroundColor: '#edd59e',
    margin: 22,
    padding: 10,
    borderRadius: 20,
  },
  input: {
    margin: 10,
    padding: 10,
    backgroundColor: '#D3D3D3',
    borderRadius: 20,
    height: 60,
  },
});