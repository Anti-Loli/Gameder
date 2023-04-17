import React , {useLayoutEffect} from "react";
import { View, Text, Image, Button, StatusBar, TouchableOpacity, SafeAreaView } from "react-native";
import { Feather, MaterialCommunityIcons  } from '@expo/vector-icons';
import styles from "../styles";

export default function ListScreen({ navigation }) {
  return (
    <><SafeAreaView style={styles.leftHeader}>

          <TouchableOpacity>
              <Feather name="list" size={24} color="black" />
          </TouchableOpacity>


          <TouchableOpacity  onPress={() => navigation.navigate("Home")}>
              <Image
                  style={styles.logoImage}
                  source={require("../Images/logo.png")} />
          </TouchableOpacity>

      </SafeAreaView>
      
      <View style={styles.container}>
            <Text>
                List
            </Text>
        </View>
    </>
  );
}