/*
  Gamder: tinder but for finding new games to play
  Developers: Hunter Hockman and David Waldron
  Last updated: 5/2/2023
  File Description: This is the App.js file it handles the navigation to the other app screens 
*/
import { View, Text, Image, TouchableOpacity, FlatList, Linking } from "react-native";
import { Feather} from '@expo/vector-icons';

import Dummy_Data from "../Arrays/Dummy_Data";
import styles from "../styles";
import savedSwipes from "../Arrays/Saved_Swipes";
const openBuyLink = (buyLink) =>{
  Linking.openURL(buyLink);
};


export default function ListScreen({ navigation }) {

  //this function creates an array that includes html code that will only print the values of Dummy_Data that are equal to the indexes stored in saveSwipes 
  const renderlist = () =>{
    const list = [];

    for(let i = 0; i < Dummy_Data.length; i++)
    {
      if(savedSwipes.includes(i))
      {
        list.push(
          <TouchableOpacity key={i} onPress={() => openBuyLink(Dummy_Data[i].buyLink)}>
              <View>
                <Text style={styles.item}>{Dummy_Data[i].name}</Text>
              </View>
            </TouchableOpacity>
        );
      }
    }
    return list;
  }

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

        <View style={styles.listHeader}>
        <Text>Saved Games</Text>
        </View>
        
        <View style={styles.gameList}>
          {
            renderlist()
          }
        </View>
    </View>
  );
}