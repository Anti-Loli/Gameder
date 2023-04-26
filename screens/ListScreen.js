import React , {useLayoutEffect} from "react";
import Swiper from "react-native-deck-swiper"
import { View, Text, Image, Button, StatusBar, TouchableOpacity, SafeAreaView, FlatList } from "react-native";
import { Feather, MaterialCommunityIcons  } from '@expo/vector-icons';
import styles from "../styles";

const testData = [
  {
    id: '1',
    name: "Item 1"
  },
  {
    id: '2',
    name: "Item 2"
  },
  {
    id: '3',
    name: "Item 3"
  },
  {
    id: '4',
    name: "Item 4"
  },
  {
    id: '5',
    name: "Item 5"
  },
];

const renderItem = ({ item }) => (
  <TouchableOpacity onPress={() => alert(`Pressed ${item.name}`)}>
    <View>
      <Text>{item.name}</Text>
    </View>
  </TouchableOpacity>
);

export default function ListScreen({ navigation }) {
  return (
    <View style ={{flex: 1}}>
      <View style={styles.Header}>
          
          <TouchableOpacity>
              <Feather name="list" size={24} color="black" />
          </TouchableOpacity>

          <TouchableOpacity onPress={() => navigation.navigate("Home")}>
            <Image
              style={styles.logoImage}
              source={require("../Images/logo.png")} />
          </TouchableOpacity>


        </View>

        <View style={styles.container}>
        <Text>List Screen</Text>
        </View>
        
        <View style={{flex: 1}}>
          <FlatList
          data={testData}
          renderItem={renderItem}
          keyExtractor={(item) => item.id.toString()}
          />
        </View>
    </View>
  );
}