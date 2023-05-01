import React , {useLayoutEffect} from "react";
import Swiper from "react-native-deck-swiper"
import { View, Text, Image, Button, StatusBar, TouchableOpacity, SafeAreaView, NativeModules } from "react-native";
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
        photoURL: require("../Images/Xenoblade2.png"),
        buyLink: "https://www.amazon.com/Xenoblade-Chronicles-2-Nintendo-Switch/dp/B01MU9VUKN/ref=sr_1_1?crid=OB7OZZF2DF6P&keywords=xenoblade%2Bchronicles%2B2&qid=1682472436&sprefix=xenoblade%2Bchr%2Caps%2C88&sr=8-1&ufe=app_do%3Aamzn1.fos.006c50ae-5d4c-4777-9bc0-4513d670b6bc&th=1"
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
      photoURL: require("../Images/Persona5R.png"),

      buyLink: "https://www.amazon.com/Persona-5-Royal-Standard-PlayStation/dp/B0BFDZDTJ8/ref=sr_1_1?keywords=persona+5+royal&qid=1682472528&sprefix=persona+5+%2Caps%2C89&sr=8-1",
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
    photoURL: require("../Images/EldenRing.png"),
    buyLink: "https://www.amazon.com/Elden-Ring-PlayStation-5/dp/B09743F8P6?th=1",
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
  photoURL: require("../Images/AgeofEmpiresIV.png"),
  buyLink: "https://store.steampowered.com/app/1466860/Age_of_Empires_IV_Anniversary_Edition/",
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
  photoURL: require("../Images/EscapeFromTarkov.png"),
  buyLink: "https://www.escapefromtarkov.com/preorder-page",
},
];

export default function HomeScreen({ navigation }) {
  
  //Restart function
  const handleRestart = () =>{
    NativeModules.DevSettings.reload();
}
  
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
                  source={card.photoURL}
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