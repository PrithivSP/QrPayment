import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import Profile from "../../Components/Profile/Profile";

export default function UPIPin({ navigation }) {
  function handleUPIPinEnterButton () {
    navigation.navigate("QRScreen");
  }
  return (
    <View>
      <View style={UPIPinStyles.upperContianer}>
        <View style={UPIPinStyles.profileContainer}>
          <Profile />
          <View style={UPIPinStyles.profileTextContainer}>
            <Text style={UPIPinStyles.profileName}>Adam Buymore | Shop</Text>
            <Text style={UPIPinStyles.profileUPIId}>2509 6795 **** ****</Text>
          </View>
        </View>
      </View>
      <View>
        <View style={UPIPinStyles.bottomContainer}>
          <Text style={UPIPinStyles.textInputLabel}>Enter your UPI Pin:</Text>
          <View style={UPIPinStyles.textInputContianer}>
            <Text style={UPIPinStyles.textInputText}>#</Text>
            <TextInput style={UPIPinStyles.textInput} keyboardType="numeric" />
          </View>
          <View style={UPIPinStyles.enterButtonContainer}>
            <TouchableOpacity style={UPIPinStyles.enterButton}>
              <Text style={UPIPinStyles.enterButtonText} onPress={handleUPIPinEnterButton}>Pay</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </View>
  );
}

const UPIPinStyles = StyleSheet.create({
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
