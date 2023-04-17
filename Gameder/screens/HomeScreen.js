import React , {useLayoutEffect} from "react";
import Swiper from "react-native-deck-swiper"
import { View, Text, Image, Button, StatusBar, TouchableOpacity, SafeAreaView } from "react-native";
import { Feather} from '@expo/vector-icons';

import styles from "../styles";

const Dummy_Data =[
    {
        name: "Xenoblade Chronicles 2",
        genre: "JRPG",
        description: "Xenoblade Chronicles 2 is a 2017 action role-playing game developed by Monolith Soft and published by Nintendo for the Nintendo Switch.",
        metacritic: 9,
        similarTo: "Dragon Quest",
        xbox: false,
        playstation: false,
        nintendo: true,
        PC: false,
        id: 1,


    },
];

export default function HomeScreen({ navigation }) {
  return (
    <><SafeAreaView style={styles.leftHeader}>
       
          <TouchableOpacity onPress={() => navigation.navigate("List")}>
              <Feather name="list" size={24} color="black" />
          </TouchableOpacity>


          <TouchableOpacity>
              <Image
                  style={styles.logoImage}
                  source={require("../Images/logo.png")} />
          </TouchableOpacity>


      </SafeAreaView>

      <SafeAreaView style={styles.container}>

        <Swiper
            containerStyle={{backgroundColor: "transparent"}}
            cards={Dummy_Data}
            renderCard={}

        />

      </SafeAreaView>
    </>
        
        

  );
}
