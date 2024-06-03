import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import Profile from "../../Components/Profile/Profile";

export default function Amount({ navigation }) {
  function handleAmountEnterButton () {
    navigation.navigate("UPIPin");
  }
  return (
    <View>
      <View style={AmountStyles.upperContianer}>
        <View style={AmountStyles.profileContainer}>
          <Profile />
          <View style={AmountStyles.profileTextContainer}>
            <Text style={AmountStyles.profileName}>Adam Buymore | Shop</Text>
            <Text style={AmountStyles.profileUPIId}>2509 6795 **** ****</Text>
          </View>
        </View>
      </View>
      <View>
        <View style={AmountStyles.bottomContainer}>
          <Text style={AmountStyles.textInputLabel}>Enter your amount:</Text>
          <View style={AmountStyles.textInputContianer}>
            <Text style={AmountStyles.textInputText}>$</Text>
            <TextInput style={AmountStyles.textInput} keyboardType="numeric" />
          </View>
          <View style={AmountStyles.enterButtonContainer}>
            <TouchableOpacity style={AmountStyles.enterButton}>
              <Text style={AmountStyles.enterButtonText} onPress={handleAmountEnterButton}>Enter</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </View>
  );
}

const AmountStyles = StyleSheet.create({
  upperContianer: {
    backgroundColor: "#DB4036",
    height: 250,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  profileContainer: {
    width: 350,
    backgroundColor: "white",
    borderRadius: 20,
    padding: 10,
    display: "flex",
    flexDirection: "row",
  },
  profileTextContainer: {
    marginLeft: 20,
    display: "flex",
  },
  profileName: {
    fontSize: 16,
    color: "#DB4036",
    marginTop: 20,
    fontWeight: "bold",
  },
  profileUPIId: {
    fontSize: 16,
    marginTop: 20,
    color: "gray",
  },
  bottomContainer: {
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    width: null,
    height: 600,
    top: -50,
    backgroundColor: "white",
    paddingHorizontal: 50,
    paddingTop: 30,
  },
  textInputLabel: {
    fontSize: 15,
  },
  textInputContianer: {
    width: 300,
    height: 70,
    borderWidth: 2,
    borderColor: "#DB4036",
    borderRadius: 20,
    backgroundColor: "white",
    color: "#DB4036",
    display: "flex",
    flexDirection: "row",
    justifyContent: "start",
    alignItems: "center",
    marginTop: 20,
  },
  textInputText: {
    fontSize: 30,
    marginLeft: 20,
  },
  textInput: {
    width: 180,
    marginLeft: 0,
    borderLeftWidth: 2,
    borderColor: "#DB4036",
    backgroundColor: "white",
    color: "#DB4036",
    marginLeft: 10,
    paddingHorizontal: 20,
    paddingVertical: 10,
    fontSize: 30,
    fontWeight: "bold",
    letterSpacing: 10,
  },
  enterButtonContainer: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  enterButton: {
    marginTop: 30,
    width: 100,
    height: 50,
    backgroundColor: "#DB4036",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 10,
  },
  enterButtonText: {
    fontSize: 18,
    color: "white",
  }
});
