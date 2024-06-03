import {
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import Card from "../../Components/Card/Card";

export default function PaymentMethod({ navigation }) {
  function handleShopButton () {
    navigation.navigate("Amount");
  }
  return (
    <View>
      <Card />
      <Text style={PaymentMethodStyles.title}>Choose your method</Text>
      <View style={PaymentMethodStyles.container}>
        <View style={PaymentMethodStyles.buttonContainerFlex}>
          <TouchableOpacity style={PaymentMethodStyles.buttonContainer}>
            <View style={PaymentMethodStyles.iconContainer}>
              <Image
                source={require("../../../assets/request.png")}
                style={PaymentMethodStyles.iconImage}
              />
            </View>
            <Text style={PaymentMethodStyles.buttonText}>Request</Text>
          </TouchableOpacity>
          <TouchableOpacity style={PaymentMethodStyles.buttonContainer} onPress={handleShopButton}>
            <View style={PaymentMethodStyles.iconContainer}>
              <Image
                source={require("../../../assets/shop.png")}
                style={PaymentMethodStyles.iconImage}
              />
            </View>
            <Text style={PaymentMethodStyles.buttonText}>Shop</Text>
          </TouchableOpacity>
          <TouchableOpacity style={PaymentMethodStyles.buttonContainer}>
            <View style={PaymentMethodStyles.iconContainer}>
              <Image
                source={require("../../../assets/upi.png")}
                style={PaymentMethodStyles.iconImage}
              />
            </View>
            <Text style={PaymentMethodStyles.buttonText}>UPI ID</Text>
          </TouchableOpacity>
        </View>
        <View style={PaymentMethodStyles.buttonContainerFlex}>
          <TouchableOpacity style={PaymentMethodStyles.buttonContainer}>
            <View style={PaymentMethodStyles.iconContainer}>
              <Image
                source={require("../../../assets/phoneNumber.png")}
                style={PaymentMethodStyles.iconImage}
              />
            </View>
            <Text style={PaymentMethodStyles.buttonText}>Phone Number</Text>
          </TouchableOpacity>
          <TouchableOpacity style={PaymentMethodStyles.buttonContainer}>
            <View style={PaymentMethodStyles.iconContainer}>
              <Image
                source={require("../../../assets/bank.png")}
                style={PaymentMethodStyles.iconImage}
              />
            </View>
            <Text style={PaymentMethodStyles.buttonText}>Bank</Text>
          </TouchableOpacity>
          <TouchableOpacity style={PaymentMethodStyles.buttonContainer}>
            <View style={PaymentMethodStyles.iconContainer}>
              <Image
                source={require("../../../assets/bill.png")}
                style={PaymentMethodStyles.iconImage}
              />
            </View>
            <Text style={PaymentMethodStyles.buttonText}>Bill</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

const PaymentMethodStyles = StyleSheet.create({
  headerBg: {
    width: null,
    height: 250,
    resizeMode: "cover",
    overflow: "hidden",
    borderRadius: 10,
  },
  title: {
    marginTop: 30,
    marginHorizontal: 30,
    color: "grey",
  },
  container: {
    marginHorizontal: 30,
    marginTop: 30,
  },
  buttonContainerFlex: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
    gap: 20,
    marginTop: 50,
  },
  buttonContainer: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  iconContainer: {
    width: 100,
    height: 100,
    backgroundColor: "#DB4036",
    padding: 20,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 30,
  },
  iconImage: {
    width: 60,
    height: 60,
  },
  buttonText: {
    fontSize: 15,
    // fontWeight: "blac",
    marginTop: 10,
  }
});
