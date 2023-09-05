import React, { useState, useEffect } from "react";
import { Image, Text, TextInput, TouchableOpacity, View } from "react-native";
import { firebase } from "@react-native-firebase/database";
import { useNavigation } from '@react-navigation/native';
import { useAuthState } from "react-firebase-hooks/auth";
import { auth, sendPasswordReset } from "../firebase";

const initialState = {
    email: "",
};

const Reset = ({ navigation }) => {

    const [state, setState] = useState(initialState);
    const [email, setEmail] = useState("");
    const [user, loading, error] = useAuthState(auth);
    useEffect(() => {
        if (loading) return;
        if (user) navigation("/profile");
    }, [user, loading]);

    return (
        <View style={{ justifyContent: 'center' }}>
            <View style={{
                width: "80%",
                height: 400,
                alignSelf: 'center',
                alignItems: 'center',
                borderRadius: 20,
                backgroundColor: '#0B0B45',
                marginTop: '20%'
            }}>
                <Image source={require('../img/logo.jpg')}
                    style={{
                        alignSelf: 'center',
                        width: 100,
                        height: 100,
                        justifyContent: 'center',
                        marginTop: "5%",
                        borderRadius: 100
                    }} />

                <Text style={{
                    color: "#ff0000",
                    fontSize: 35,
                    fontWeight: "bold",
                    marginTop: 24,
                    alignSelf: 'center',
                    textShadowColor: "black"
                }}> Reset</Text>

                <TextInput style={{
                    width: "80%",
                    height: 40,
                    marginTop: 18,
                    fontSize: 18,
                    fontWeight: '400',
                    backgroundColor: 'white',
                    borderRadius: 5,
                    textShadowColor: 'black',
                    textShadowOffset: { width: 0.7, height: 1 }
                }}
                    value={email}
                    onChangeText={(text) => handleChange("email", text)}
                    placeholder="Enter E-mail"
                    placeholderTextColor={"#000000"}
                />

                <TouchableOpacity style={{
                    width: '80%',
                    height: 40,
                    alignSelf: 'center',
                    justifyContent: 'center',
                    marginTop: 18,
                    marginBottom: 5,
                    backgroundColor: "#ffdf00",
                    borderRadius: 8,
                    textShadowOffset: { width: 0.7, height: 1 },
                }} onPress={() => sendPasswordReset(email)} >
                    <Text style={{
                        color: 'black',
                        fontSize: 20,
                        fontWeight: "bold",
                        alignSelf: "center",
                    }}>
                        Send password reset email
                    </Text>
                </TouchableOpacity>

                <TouchableOpacity style={{
                    flexDirection: 'row',
                    background: 'none',
                    textShadowColor: "black",
                    textShadowOffset: { width: 0.7, height: 1 },
                    borderRadius: 8,
                    justifyContent: 'center',
                }} onPress={() => navigation.navigate('regis')}>
                    <Text style={{
                        color: "#ffffff",
                        fontSize: 20,
                        fontWeight: "bold",
                        marginTop: 15,
                        alignSelf: 'center',
                        textShadowColor: "black",
                    }}>
                        Don't have an account? Register
                    </Text>
                </TouchableOpacity>

            </View>
        </View>

    );
}
export default Reset;
