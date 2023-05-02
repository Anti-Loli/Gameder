/*
  Gamder: tinder but for finding new games to play
  Developers: Hunter Hockman and David Waldron
  Last updated: 5/2/2023
  File Description: This is the global styles sheet for the whole app 
*/
import { StyleSheet } from "react-native";

export default StyleSheet.create({
    Header: {
        flexDirection: 'row',
        alignItems: "flex-start",
        justifyContent: 'space-around',
        paddingRight: 87,
        paddingTop: 30,
      },
      item: {
        backgroundColor: '#EEE',
        padding: 20,
        marginBottom: 10, 
        borderRadius: 5,
      },
      listHeader: {
        justifyContent: "center",
        backgroundColor: "white",
        alignItems: "center",
      },
      logoImage:{
        height: 100,
        width:  150,
      },     
      cardImage:{
        height: 200,
        width:  200,
        justifyContent: "center",
      },
      card: {
        flex: 1,
        borderRadius: 4,
        borderWidth: 2,
        borderColor: "#E8E8E8",
        justifyContent: "center",
        backgroundColor: "white",
        alignItems: "center"
      },
      text: {
        textAlign: "center",
        fontSize: 16,
        backgroundColor: "transparent"
      },
      gameList: {
        flex: 1,
        paddingBottom: 50,
        margin: 10,
        justifyContent: "center",
        backgroundColor: "white",
        alignItems: "center",
      },
      
    });