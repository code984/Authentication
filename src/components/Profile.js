import React, { useState, useEffect } from "react";
import { Image, Text, TextInput, TouchableOpacity, View } from "react-native";
import { firebase } from "@react-native-firebase/database";
import { useSelector, useDispatch } from "react-redux";
import { loginMember } from '../Redux/Action';
import RadioForm from "react-native-simple-radio-button";
import { useParams } from "react-router-native";
import { useNavigation } from '@react-navigation/native';
import shortid from 'shortid';

const initialState = {
    id: "",
    password: "",
    name: "",
    contact: "",
    address: "",
    State: "",
    City: "",
    Area: "",
    gender: "",
    alternative_mob: ""
};

var gender = [
    { label: "Male", value: 0 },
    { label: "Female", value: 1 },
    { label: "Other", value: 2 }
];

const Profile = () => {
    const { id } = useParams();
    let matchid = id;
    const [state, setstate] = useState(initialState);
    const navigation = useNavigation();

    const { Loadmember } = useSelector(state => state.cartreducer);
    const { Loaduser } = useSelector(state => state.cartreducer);
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(loginMember(Loaduser[id]));
        Object.keys(Loaduser).map((id, index) => {
            if (matchid === id) {
                setstate({ ...Loaduser[id] })
            }
        })
    }, [Loadmember])

    console.log("loadmem------mememem---------", Loadmember);
    const handleChange = (name, value) => {
        setstate({ ...state, [name]: value });
    }
    const { name, contact, address, State, City, Area, alternative_mob } = state;

    console.log("state-----aaya ya nahi------------------", state);
    const handleSubmit = () => {

        if (!name || !contact || !address || !State || !City || !Area || !alternative_mob) {
        const idData = shortid.generate();
        state.id = idData;
        state.password = idData;
            alert("Please Fill All Details")
        }
        else {
            dataUpdate();
        }
    };

    const dataUpdate = () => {
        database = firebase.database();
        database.ref("user_table").set(state, (err) => {
            if (err) {
                alert("data not update");
            }
            else {
                alert("data updated" + state.password);
            }
        });
    }
    useEffect(() => {
        if (Loadmember) {
            setstate({ ...Loadmember })
        }
    }, [Loadmember]);

    return (
        <View style={{ justifyContent: 'center' }}>
            <View style={{
                width: "80%",
                height: 700,
                alignSelf: 'center',
                alignItems: 'center',
                borderRadius: 22,
                backgroundColor: '#0B0B45',
                marginTop: '8%',
                marginBottom: '20%'
            }}>

                <Image source={require('../img/logo.jpg')}
                    style={{
                        alignSelf: 'center',
                        width: 100,
                        height: 100,
                        justifyContent: 'center',
                        marginTop: "8%",
                        borderRadius: 100
                    }} />

                <TextInput style={{
                    width: "80%",
                    height: 40,
                    marginTop: 20,
                    backgroundColor: 'white',
                    borderRadius: 5,
                    textShadowColor: 'black',
                    textShadowOffset: { width: 0.7, height: 1 }
                }}
                    value={name || ""}
                    onChangeText={(text2) => handleChange("name", text2)}
                    placeholder="Enter Name"
                    placeholderTextColor={"#000000"}
                />
                <TextInput style={{
                    width: "80%",
                    height: 40,
                    marginTop: 20,
                    backgroundColor: 'white',
                    borderRadius: 5,
                    textShadowColor: 'black',
                    textShadowOffset: { width: 0.7, height: 1 }
                }}
                    value={contact || ""}
                    onChangeText={(text2) => handleChange("contact", text2)}
                    placeholder="Enter Your Mobile Number"
                    placeholderTextColor={"#000000"}
                    maxLength={10}
                />
                <TextInput style={{
                    width: "80%",
                    height: 40,
                    marginTop: 20,
                    backgroundColor: 'white',
                    borderRadius: 5,
                    textShadowColor: 'black',
                    textShadowOffset: { width: 0.7, height: 1 }
                }}
                    value={address || ""}
                    onChangeText={(text2) => handleChange("address", text2)}
                    placeholder="Enter Your Address"
                    placeholderTextColor={"#000000"}
                />
                <TextInput style={{
                    width: "80%",
                    height: 40,
                    marginTop: 20,
                    backgroundColor: 'white',
                    borderRadius: 5,
                    textShadowColor: 'black',
                    textShadowOffset: { width: 0.7, height: 1 }
                }}
                    value={State || ""}
                    onChangeText={(text2) => handleChange("State", text2)}
                    placeholder="Enter State"
                    placeholderTextColor={"#000000"}
                    maxLength={10}
                />
                <TextInput style={{
                    width: "80%",
                    height: 40,
                    marginTop: 20,
                    backgroundColor: 'white',
                    borderRadius: 5,
                    textShadowColor: 'black',
                    textShadowOffset: { width: 0.7, height: 1 }
                }}
                    value={City || ""}
                    onChangeText={(text2) => handleChange("City", text2)}
                    placeholder="Enter City"
                    placeholderTextColor={"#000000"}
                />
                <TextInput style={{
                    width: "80%",
                    height: 40,
                    marginTop: 20,
                    backgroundColor: 'white',
                    borderRadius: 5,
                    textShadowColor: 'black',
                    textShadowOffset: { width: 0.7, height: 1 }
                }}
                    value={Area || ""}
                    onChangeText={(text2) => handleChange("Area", text2)}
                    placeholder="Enter Area"
                    placeholderTextColor={"#000000"}
                    maxLength={10}
                />

                <View style={{ flexDirection: 'row', alignSelf: 'flex-start', marginLeft: "10%" }}>
                    <Text style={{
                        color: "#ffdf00",
                        fontSize: 18,
                        fontWeight: "bold",
                        marginTop: 10,
                        alignSelf: 'center',
                        textShadowColor: "black"
                    }}>
                        Select Gender
                    </Text>
                </View>
                <View style={{ flexDirection: 'row', alignSelf: 'flex-start', marginLeft: "10%", marginTop: 10 }}>
                    <RadioForm
                        style={{ flexDirection: 'row', marginTop: 10, }}
                        radio_props={gender}
                        onPress={(value) => { }}
                        labelStyle={{ fontSize: 18, color: "#ffdf00", paddingRight: 10 }}
                        buttonColor={"#ffdf00"}
                        buttonSize={10}
                        buttonInnerColor={"#191970"} />
                </View>

                <TextInput style={{
                    width: "80%",
                    height: 40,
                    marginTop: 10,
                    backgroundColor: 'white',
                    borderRadius: 5,
                    textShadowColor: 'black',
                    textShadowOffset: { width: 0.7, height: 1 }
                }}
                    value={alternative_mob || ""}
                    onChangeText={(text2) => handleChange("alternative_mob", text2)}
                    placeholder="Enter Alternative Number"
                    placeholderTextColor={"#000000"}
                    maxLength={10}
                />

                <TouchableOpacity style={{
                    width: '30%',
                    height: 40,
                    alignSelf: 'center',
                    justifyContent: 'center',
                    marginTop: 25,
                    backgroundColor: "#ffdf00",
                    borderRadius: 8,
                    textShadowOffset: { width: 0.7, height: 1 },
                }} onPress={handleSubmit}>
                    <Text style={{
                        color: 'black',
                        fontSize: 20,
                        fontWeight: "bold",
                        alignSelf: "center",

                    }}>
                        Update
                    </Text>
                </TouchableOpacity>


            </View>
        </View>
    );
}
export default Profile;