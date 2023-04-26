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

  {
    name: "Elden Ring",
    genre: "RPG",
    description: "Elden Ring is a 2022 action role-playing game developed by FromSoftware and published by Bandai Namco Entertainment",
    metacritic: 96,
    similarTo: " Dark Souls ",
    xbox: "yes",
    playstation: "yes",
    nintendo: "no",
    PC: "yes",
    id: 3,
    photoURL: "../Images/EldenRing.png",
},

{
  name: "Age of Empires IV",
  genre: "RTS",
  description: "Age of Empires IV is a real-time strategy video game developed by Relic Entertainment in partnership with World's Edge and published by Xbox Game Studios.",
  metacritic: 95,
  similarTo: " Star Craft ",
  xbox: "no",
  playstation: "no",
  nintendo: "no",
  PC: "yes",
  id: 4,
  photoURL: "../Images/AgeofEmpiresIV.png",
},

{
  name: "Escape From Tarkov",
  genre: "FPS",
  description: "Escape from Tarkov is a multiplayer tactical first-person shooter video game in development by Battlestate Games for Windows.",
  metacritic: null,
  similarTo: " Hunt Showdown ",
  xbox: "no",
  playstation: "no",
  nintendo: "no",
  PC: "yes",
  id: 5,
  photoURL: "../Images/EscapeFromTarkov.png",
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
                <View key ={card.id}  style={[styles.card, styles.cardShadow]}>
                  
                <Image 
                  styles={{ width: 500, height: 0}}
                  source={require("../Images/Xenoblade2.png")}
                />
                  
                  
                  <Text>{card.name}</Text>
                  <Text>{card.genre}</Text>
                  <Text>{card.description}</Text>

                  <Text>Metacritic score: {card.metacritic}</Text>
                  <Text>Similar to games like: {card.similarTo}</Text>
                  <Text>Xbox: {card.xbox}</Text>
                  <Text>Playstation: {card.playstation}</Text>
                  <Text>Nintendo Switch: {card.nintendo}</Text>
                  <Text>PC: {card.PC}</Text>

                </View>
                )}/>

        </View>
    </View>
  );
}