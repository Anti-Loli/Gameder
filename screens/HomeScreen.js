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