import { StyleSheet } from "react-native";

export default StyleSheet.create({
    Header: {
        flexDirection: 'row',
        alignItems: "flex-start",
        justifyContent: 'space-around',
        paddingRight: 87,
        paddingTop: 30,
      },
      logoImage:{
        height: 100,
        width:  150,
      },     
      card: {
        width: 80,
        height: 70,
        borderRadius: 10,
        backgroundColor: "red",
      },
      cardShadow: {
        shadowColor: "#000",
        shadowOffset: {
          width: 0,
          height: 1,
        },
        shadowOpacity: 0.2,
        shadowRadius: 1.41,

        elevation: 2,
      }
    });