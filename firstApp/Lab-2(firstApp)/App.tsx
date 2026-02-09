import React from "react";
import { 
  SafeAreaView, 
  View, 
  Text, 
  Image, 
  Button, 
  TouchableOpacity, 
  Pressable, 
  Alert 
} from "react-native";

const App = () => {
  return (
    <SafeAreaView style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      
      <Text style={{ fontSize: 20, marginBottom: 10 }}>
        Hey Techciessssss
      </Text>

      <Image
        source={{ uri: "https://tse2.mm.bing.net/th/id/OIP.lseS5TAiyR-uTGHNrjNk2wHaEo?pid=Api&P=0&h=180" }}
        style={{ width: 200, height: 200, marginBottom: 15 }}
      />

      <Button 
        title="Click Me" 
        onPress={() => Alert.alert("Button Clicked!")} 
      />

      <TouchableOpacity
        onPress={() => Alert.alert("You Clicked Me")}
        style={{ marginTop: 15 }}
      >
        <Text style={{ color: "blue" }}>Me Touchable</Text>
      </TouchableOpacity>

      <Pressable
        onLongPress={() => Alert.alert("You Long Pressed Me")}
        style={{ marginTop: 10 }}
      >
        <Text style={{ color: "green" }}>Me Pressable</Text>
      </Pressable>

    </SafeAreaView>
  );
};

export default App;
