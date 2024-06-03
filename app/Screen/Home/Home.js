import { StyleSheet, Text, View } from "react-native";
import Card from "../../Components/Card/Card";
import HomeButton from "../../Components/HomeButton/HomeButton";

export default function Home({ navigation }) {
  return (
    <View style={HomeStyles.container}>
      <Card />
      <HomeButton navigation={navigation}/>
    </View>
  );
}

const HomeStyles = StyleSheet.create({
  container: {
    marginTop: 30,
  }
})
