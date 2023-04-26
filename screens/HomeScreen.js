import React , {useLayoutEffect} from "react";
import Swiper from "react-native-deck-swiper"
import { View, Text, Image, Button, StatusBar, TouchableOpacity, SafeAreaView } from "react-native";
import { Feather} from '@expo/vector-icons';

import styles from "../styles";

const Dummy_Data =[
    {
        name: "Xenoblade Chronicles 2",
        genre: "JRPG",
        description: "Xenoblade Chronicles 2 is a 2017 action role-playing game developed by Monolith Soft and published by Nintendo.",
        metacritic: 83,
        similarTo: "Dragon Quest",
        xbox: "no",
        playstation: "no",
        nintendo: "yes",
        PC: "no",
        id: 1,
        photoURL: "../Images/Xenoblade2.png",
    },

    {
      name: "Persona 5",
      genre: "JRPG",
      description: "Persona 5 is a 2016 role-playing video game developed by Atlus.",
      metacritic: 95,
      similarTo: " Shin Megami Tensei ",
      xbox: "yes",
      playstation: "yes",
      nintendo: "yes",
      PC: "yes",
      id: 2,
      photoURL: "../Images/Persona5R.png",
  },
];

export default function HomeScreen({ navigation }) {
  return (
    <View>
      <View style={styles.Header}>
          
          <TouchableOpacity onPress={() => navigation.navigate("List")}>
              <Feather name="list" size={24} color="black" />
          </TouchableOpacity>

          <TouchableOpacity>
            <Image
              style={styles.logoImage}
              source={require("../Images/logo.png")} />
          </TouchableOpacity>


        </View>

        <View>
          <Swiper
              containerStyle={{backgroundColor: "red"}}
              cards={Dummy_Data}
              stackSize={5}
              cardIndex={0}
              animateCardOpacity
              verticalSwipe={false}
              onSwipedLeft={() => {
                console.log("Mid");
            }}
              onSwipedRight={() => {
                  console.log("Saved");
              }}
              backgroundColor="red"
              overlayLabels={{
                left:{
                  title: "MID",
                  style:{
                    label:{
                      textAlign: "right",
                      color: "red",
                    },
                  },
                },
                right: {
                  title: "SAVED",
                  style:{
                    label:{
                      textAlign: "left",
                      color: "#4DED30",
                    },
                  },
                },
              }}
              renderCard={(card) => (
                <View key ={card.id}  style={styles.card}>
                  
                <Image 
                  style={styles.cardImage}
                  source={{uri : card.photoURL}}
                />
                  <Text style={styles.text}>{card.name}</Text>
                  <Text style={styles.text}>{card.genre}</Text>
                  <Text style={styles.text}>{card.description}</Text>
                  <Text style={styles.text}>Metacritic score: {card.metacritic}</Text>
                  <Text style={styles.text}>Similar to games like: {card.similarTo}</Text>
                  <Text style={styles.text}>Xbox: {card.xbox}</Text>
                  <Text style={styles.text}>Playstation: {card.playstation}</Text>
                  <Text style={styles.text}>Nintendo Switch: {card.nintendo}</Text>
                  <Text style={styles.text}>PC: {card.PC}</Text>

                </View>
                )}/>

        </View>
    </View>
  );
}