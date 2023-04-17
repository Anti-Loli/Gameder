import { StyleSheet } from "react-native";

export default StyleSheet.create({
    container: {
        flex: 2 ,
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "column",
      },
    leftHeader: {
        flex: 1,
        flexDirection: 'row',
        alignItems: "flex-start",
        justifyContent: 'space-around',
        paddingRight: 87,
        paddingTop: 30,

      },
      listImage:{
        height: 25,
        width:  25,
      },
      logoImage:{
        height: 100,
        width:  150,
      },
    button: {
        marginTop: 200,
        width: 200,
        height: 100,
      },
     
  });