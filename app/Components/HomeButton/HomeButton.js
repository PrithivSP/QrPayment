import { StyleSheet, Text, View, TouchableOpacity } from "react-native";

export default function HomeButton({navigation}) {
  function handleSendButton() {
    navigation.navigate('Payment Method');
  }
  return (
    <View>
      <View style={HomeButtonStyles.HomeBtnTitleCont}>
        <Text style={HomeButtonStyles.HomeBtnTitle}>Choose Your actions</Text>
      </View>
      <View style={HomeButtonStyles.HomeButtonCont}>
        <TouchableOpacity style={HomeButtonStyles.HomeButton} onPress={handleSendButton}>
          <Text style={HomeButtonStyles.HomeButtonText}>Send</Text>
        </TouchableOpacity>
        <TouchableOpacity style={HomeButtonStyles.HomeButton}>
          <Text style={HomeButtonStyles.HomeButtonText}>Recive</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const HomeButtonStyles = StyleSheet.create({
    HomeBtnTitleCont: {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        marginTop: 30
      },
    HomeBtnTitle: {
      fontSize: 16,
      color: "gray",
    },
    HomeButtonCont: {
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
      marginTop: 130,
      gap: 100,
    },
    
    HomeButton: {
      width: 200,
      height: 70,
      backgroundColor: "#DB4036",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      borderRadius: 10,
    },
  
    HomeButtonText: {
      color: "white",
      fontSize: 20,
      fontWeight: "bold",
    },
  });
