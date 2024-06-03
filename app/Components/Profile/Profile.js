import {View, Text, StyleSheet, Image} from "react-native";
export default function Profile() {
    return(
        <View style={ProfileStyes.container}>
            <Image source={require("../../../assets/profile.jpg")} style={ProfileStyes.image}/>
        </View>
    );
}

const ProfileStyes = StyleSheet.create({
    container: {
        width: 100,
        height: 100,
    },
    image: {
        width: 100,
        height: 100,
        borderRadius: 50,
    }
})