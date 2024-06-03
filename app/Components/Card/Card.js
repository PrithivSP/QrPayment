import { useEffect, useState } from "react";
import {
    Animated,
  Button,
  Image,
  ImageBackground,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

export default function Card() {
  const [cardNumber, setCardNumber] = useState("0000 9898 **** ****");
  const numbersArray = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
  const [animatedNumber, setAnimatedNumber] = useState(new Animated.Value(0));

  const pickRandomNumber = () => {
    const randomIndex = Math.floor(Math.random() * numbersArray.length);
    return numbersArray[randomIndex];
  };

  useEffect(() => {
    const interval = setInterval(() => {
        const newCardNumber = generateRandomCardNumber();
        Animated.timing(animatedNumber, {
            toValue: 1,
            duration: 500,
            useNativeDriver: true,
        }).start(() => {
            setCardNumber(newCardNumber);
            animatedNumber.setValue(0);
        })
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  const generateRandomCardNumber = () => {
    let newCardNumber = "";
    for (let i = 0; i < cardNumber.length; i++) {
      if (cardNumber[i] === " ") {
        // Preserve space character
        newCardNumber += " ";
      } else if (cardNumber[i] === "*") {
        // Preserve asterisk character
        newCardNumber += "*";
      } else {
        // Replace digit with a random number
        newCardNumber += pickRandomNumber();
      }
    }
    return newCardNumber;
  };

  return (
    <View style={CardStyles.cardContainter}>
      <ImageBackground
        source={require("../../../assets/image.png")}
        style={CardStyles.imageBackground}
      >
        <Image
          source={require("../../../assets/visa.png")}
          style={CardStyles.visaIcon}
        />
        <Text style={CardStyles.cardText}>{cardNumber}</Text>
        <View style={CardStyles.cardBottom}>
          <View>
            <Text style={CardStyles.cardName}>Adam Buymore</Text>
          </View>
          <View style={CardStyles.cardDes}>
            <View style={CardStyles.cardDesCont}>
              <Text style={CardStyles.cardDesTitle}> Expiration</Text>
              <Text style={CardStyles.cardDesContent}>03 / 24</Text>
            </View>
            <View style={CardStyles.cardDesCont}>
              <Text style={CardStyles.cardDesTitle}> CVV</Text>
              <Text style={CardStyles.cardDesContent}>***</Text>
            </View>
          </View>
        </View>
      </ImageBackground>
     
    </View>
  );
}

const CardStyles = StyleSheet.create({
  cardContainter: {
    width: null,
    height: 250,
    padding: 10,
  },
  imageBackground: {
    borderColor: "transparent",
    borderWidth: 2,
    borderRadius: 20,
    width: null,
    height: 250,
    resizeMode: "cover",
    overflow: "hidden",
    paddingHorizontal: 20,
  },
  visaIcon: {
    width: 50,
    height: 50,
  },
  cardText: {
    color: "white",
    fontSize: 30,
    marginTop: 50,
    fontWeight: "bold",
  },
  cardBottom: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    flexDirection: "row",
    marginTop: 20,
  },
  cardName: {
    fontSize: 18,
    fontWeight: "bold",
    color: "white",
  },
  cardDes: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
  },
  cardDesCont: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    gap: 3,
    marginRight: 20,
  },
  cardDesTitle: {
    fontSize: 13,
    color: "white",
  },
  cardDesContent: {
    fontSize: 18,
    color: "white",
    fontWeight: "bold",
  },
});
