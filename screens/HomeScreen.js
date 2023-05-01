/*
  Gamder: tinder but for fingding new games to play
  Developers: Hunter Hockman and David Waldron
  Last updated: 5/2/2023
  File Description: This is the Home.js file it handles the swiper object that is the main screen for the app
*/
import React from "react";
import Swiper from "react-native-deck-swiper"
import {View, Text, Image, TouchableOpacity, DevSettings} from "react-native";
import {Feather} from '@expo/vector-icons';

import Dummy_Data from "../Arrays/Dummy_Data";
import styles from "../styles";

export default function HomeScreen({ navigation }) {
  
  //Restart function
  const handleRestart = () =>{
    alert('Restarting App. Please wait...');
    DevSettings.reload();
}
  
  return (
    <View>
      <View style={styles.Header}>
          
          <TouchableOpacity onPress={() => navigation.navigate("List")}>
              <Feather name="list" size={24} color="black" />
          </TouchableOpacity>

          <TouchableOpacity onPress={() => handleRestart()}>
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