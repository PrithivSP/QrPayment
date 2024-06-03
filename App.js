import { StatusBar } from "expo-status-bar";
import { SafeAreaView, StyleSheet, Text, View } from "react-native";
import Home from "./app/Screen/Home/Home";
import PaymentMethod from "./app/Screen/PaymentMethod/PaymentMethod";
import Profile from "./app/Components/Profile/Profile";
import Amount from "./app/Screen/Amount/Amount";
import UPIPin from "./app/Screen/UPIPin/UPIPin";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";
import QRScreen from "./app/Screen/QRScreen/QRScreen";


const Stack = createNativeStackNavigator();
export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={Home} options={{ headerShown: false,}}/>
        <Stack.Screen name="Payment Method" component={PaymentMethod}/>
        <Stack.Screen name="Amount" component={Amount}/>
        <Stack.Screen name="UPIPin" component={UPIPin}/>
        <Stack.Screen name="QRScreen" component={QRScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

const styles = StyleSheet.create({
  container: {
    marginTop: 30,
    fontFamily: "Roboto",
  },
});
