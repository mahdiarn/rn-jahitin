import { StackScreenProps } from "@react-navigation/stack";
import { RootStackParamList } from "../types";
import { View, StyleSheet } from "react-native";
import { Text } from "../components/Themed";
import { TouchableOpacity } from "react-native-gesture-handler";

export default function CreateOrderScreen({
  navigation,
}: StackScreenProps<RootStackParamList, 'NotFound'>) {

  const createOrder = () => {
    navigation.navigate('CreateOrder')
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>List of Tailor</Text>
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
      backgroundColor: "#FFFFFF",
      color: "#EDAC9E",
      margin: 22,
      padding: 10,
      borderRadius: 20,
    },
  });