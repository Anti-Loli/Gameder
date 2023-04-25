import React , {useLayoutEffect} from "react";
import Swiper from "react-native-deck-swiper"
import { View, Text, Image, Button, StatusBar, TouchableOpacity, SafeAreaView } from "react-native";
import { Feather, MaterialCommunityIcons  } from '@expo/vector-icons';
import styles from "../styles";

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
    </View>
  );
}