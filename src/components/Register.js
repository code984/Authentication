import React, { useState, useEffect } from "react";
import { Image, Text, TextInput, TouchableOpacity, View } from "react-native";
import { firebase } from "@react-native-firebase/database";
import { useNavigation } from '@react-navigation/native';
import { useAuthState } from "react-firebase-hooks/auth";
import { auth, registerWithEmailAndPassword } from "../firebase";

const initialState = {
    name: "",
    email: "",
    password: ""
};

const Register = ({navigation}) => {
    const history = useNavigation();
    const [state, setState] = useState(initialState);
    const [user, loading, error] = useAuthState(auth);
    const register = () => {
        if (!name) alert("Please enter name");
        registerWithEmailAndPassword(name, email, password);
    };
    useEffect(() => {
        if (loading) return;
        if (user) history("/profile");
    }, [user, loading]);

    const handleChange = (name, value) => {
        setState({ ...state, [name]: value });
    }
    const { name, email, password } = state;
    
    // const handleSubmit = () => {
    //     const idData = shortid.generate();
    //     state.id = idData;
    //     state.password = idData;
    //     if (!name || !email || !password) {
    //         alert("Please Fill All Details");
    //     }
    //     else {
    //         dataInsert();
    //     }
    // }
    // const dataInsert = () => {
    //     database = firebase.database();
    //     push(ref(database, 'register_table'), state)
    //         .then(() => {
    //             alert("data not insert")
    //         }).catch((err) => {
    //             alert("data insertes" + state.password);

    //         })
    // };


    return (
        <View style={{ justifyContent: 'center' }}>
            <View style={{
                width: "80%",
                height: 500,
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
                }}> Register</Text>

                <TextInput style={{
                    width: "80%",
                    height: 40,
                    color:"black",
                    marginTop: 16,
                    fontSize: 16,
                    fontWeight: '400',
                    backgroundColor: 'white',
                    borderRadius: 5,
                    textShadowColor: 'black',
                    textShadowOffset: { width: 0.7, height: 1 }
                }}
                    value={name}
                    onChangeText={(text) => handleChange("name", text)}
                    placeholder="Enter Name"
                    placeholderTextColor={"#000000"}
                />

                <TextInput style={{
                    width: "80%",
                    height: 40,
                    color:"black",
                    marginTop: 18,
                    fontSize: 16,
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

                <TextInput style={{
                    width: "80%",
                    height: 40,
                    color:"black",
                    marginTop: 18,
                    fontSize: 16,
                    fontWeight: '400',
                    backgroundColor: 'white',
                    borderRadius: 5,
                    textShadowColor: 'black',
                    textShadowOffset: { width: 0.7, height: 1 }
                }}
                    value={password}
                    onChangeText={(text) => handleChange("password", text)}
                    placeholder="Enter Password"
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
                }} onPress={register}>
                    <Text style={{
                        color: 'black',
                        fontSize: 20,
                        fontWeight: "bold",
                        alignSelf: "center",
                    }}>
                        Register
                    </Text>
                </TouchableOpacity>


                <TouchableOpacity style={{
                    background: 'none',
                    textShadowColor: "black",
                    textShadowOffset: { width: 0.7, height: 1 },
                    borderRadius: 8,
                    justifyContent: 'center',
                    alignItems: 'center',
                    marginTop: "3%",
                    marginBottom: "5%",
                    alignSelf: 'center',
                }} onPress={() => navigation.navigate('SignIn')}>
                    <Text style={{
                         color: "#ffffff",
                         fontSize: 20,
                         fontWeight: "bold",
                         marginTop: 10,
                         alignSelf: 'center',
                         textShadowColor: "black"
                    }}>
                        Already have an account? SignIn
                    </Text>
                </TouchableOpacity>

            </View>
        </View>

    );
}
export default Register;
