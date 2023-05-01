
/*
  Gamder: tinder but for fingding new games to play
  Developers: Hunter Hockman and David Waldron
  Last updated: 5/2/2023
  File Description: This is the App.js file it handles the navigation to the other app screens 
*/
import React  from "react";
import { View, Text, Image, TouchableOpacity, FlatList, Linking } from "react-native";
import { Feather} from '@expo/vector-icons';
import styles from "../styles";

const testData = [
  {
    id: '1',
    name: "Xenoblade Chronicles 2",
    buyLink: "https://www.amazon.com/Xenoblade-Chronicles-2-Nintendo-Switch/dp/B01MU9VUKN/ref=sr_1_1?crid=OB7OZZF2DF6P&keywords=xenoblade%2Bchronicles%2B2&qid=1682472436&sprefix=xenoblade%2Bchr%2Caps%2C88&sr=8-1&ufe=app_do%3Aamzn1.fos.006c50ae-5d4c-4777-9bc0-4513d670b6bc&th=1",
  },
  {
    id: '2',
    name: "Persona 5",
    buyLink: "https://www.amazon.com/Persona-5-Royal-Standard-PlayStation/dp/B0BFDZDTJ8/ref=sr_1_1?keywords=persona+5+royal&qid=1682472528&sprefix=persona+5+%2Caps%2C89&sr=8-1",
  },
  {
    id: '3',
    name: "Elden Ring",
    buyLink: "https://www.amazon.com/Elden-Ring-PlayStation-5/dp/B09743F8P6?th=1",
  },
  {
    id: '4',
    name: "Age of Empires IV",
    buyLink: "https://store.steampowered.com/app/1466860/Age_of_Empires_IV_Anniversary_Edition/",
  },
  {
    id: '5',
    name: "Escape From Tarkov",
    buyLink: "https://www.escapefromtarkov.com/preorder-page",
  },
];

const openBuyLink = (buyLink) =>{
  Linking.openURL(buyLink);
};

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
        <Text>Saved Games</Text>
        </View>
        
        <View style={styles.gameList}>
          {testData.map((item,index)=>(
            <TouchableOpacity key={index} onPress={() => openBuyLink(item.buyLink)}>
              <View>
                <Text>{item.name}</Text>
              </View>
            </TouchableOpacity>
          ))}

        </View>
    </View>
  );
}