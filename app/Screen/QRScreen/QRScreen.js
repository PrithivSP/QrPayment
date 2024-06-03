import { StyleSheet, Text, View } from "react-native";
import QRCode from "react-qr-code";
import { useEffect, useState } from "react";



export default function QRScreen() {
    
    return(
        <View style={QRCodeScreen.container}>
            <Text style={QRCodeScreen.title}>Scan the QR Code</Text>
            <QRCode value="hey"/>
        </View>
    );
}

const QRCodeScreen = StyleSheet.create({
    container: {
        height: 820,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "white",
    },
    title: {
        fontWeight: "bold",
        fontSize: 18,
        marginBottom: 20,
    }
})