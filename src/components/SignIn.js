import React, { useState } from "react";
import { Image, Text, TouchableOpacity, View } from "react-native";
import { firebase } from "@react-native-firebase/database";
import { useNavigation } from '@react-navigation/native';
import Profile from './Profile';
import { GoogleSigninButton } from '@react-native-google-signin/google-signin';
import auth from '@react-native-firebase/auth';
import { GoogleSignin } from '@react-native-google-signin/google-signin';
import HomeScreen from "./HomeScreen";

GoogleSignin.configure({
    webClientId: "13689031527-8omfqqr2abh7q74rfnsrcp93iesk58s4.apps.googleusercontent.com"
});

const initialState = {
    uname: "",
    pass: ""
};

const SignIn = () => {
    const navigation = useNavigation();
    const [state, setstate] = useState(initialState);
    const [authenticated, setAuthenticated] = useState(false);
    auth().onAuthStateChanged((user) => {
        if (user) {
            setAuthenticated(true);
            
        } else {
            setAuthenticated(false);

        }
    });
    async function handleGoogleButtonPress() {
        try {
            // get the user id token
            const { idToken } = await GoogleSignin.signIn();
            // create a credential using the token
            const googleCredential = auth.GoogleAuthProvider.credential(idToken);
            // authenticate the user using the credential
            return auth().signInWithCredential(googleCredential);
        } catch (error) {
            console.log("error", error);
        }
    }
    if (authenticated) {
        return  <HomeScreen/>
         }


    return (
        <>
            <View style={{ justifyContent: 'center' }}>
                <View style={{
                    width: "80%",
                    height: 400,
                    alignSelf: 'center',
                    alignItems: 'center',
                    borderRadius: 20,
                    backgroundColor: '#0B0B45',
                    marginTop: '10%'
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
                        fontSize: 40,
                        fontWeight: "bold",
                        marginTop: 25,
                        alignSelf: 'center',
                        textShadowColor: "black"
                    }}> SignIn</Text>


                    <GoogleSigninButton onPress={handleGoogleButtonPress}
                        style={{
                            flexDirection: 'row',
                            alignItems: "center",
                            width: '80%', height: 50,
                            borderWidth: 2,
                            borderColor: 'black',
                            padding: 10,
                            justifyContent: 'center',
                            alignSelf: 'center',
                            marginTop: 20, borderRadius: 8,
                            backgroundColor: "white"
                        }}
                    />
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
                            marginTop: 20,
                            alignSelf: 'center',
                            textShadowColor: "black",
                        }}>
                            Don't have an account? Register
                        </Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={{
                        flexDirection: 'row',
                        background: 'none',
                        textShadowColor: "black",
                        textShadowOffset: { width: 0.7, height: 1 },
                        borderRadius: 8,
                        justifyContent: 'center',
                    }} onPress={() => navigation.navigate('reset')}>
                        <Text style={{
                            color: "#ffffff",
                            fontSize: 15,
                            fontWeight: "bold",
                            marginTop: 5,
                            alignSelf: 'center',
                            textShadowColor: "black",
                        }}>
                            Forget Password
                        </Text>
                    </TouchableOpacity>

                </View>
            </View>

        </>

    );
}
export default SignIn;
