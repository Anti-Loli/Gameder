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
      
    });