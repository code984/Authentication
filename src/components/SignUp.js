// import React, { useState, useEffect } from "react";
// import { Text, TextInput, TouchableOpacity, View, Image } from "react-native";
// import { database } from "@react-native-firebase/app";
// import { getDatabase } from "@react-native-firebase/database";
// import { useAuthState } from "react-firebase-hooks/auth";
// import { useNavigation } from '@react-navigation/native';
// import { GoogleSigninButton } from '@react-native-google-signin/google-signin';
// import shortid from 'shortid';
// import auth from '@react-native-firebase/auth';
// import { GoogleSignin } from '@react-native-google-signin/google-signin';
// import Authenticated from "../components/Authenticated";

// GoogleSignin.configure({
//     webClientId: "13689031527-8omfqqr2abh7q74rfnsrcp93iesk58s4.apps.googleusercontent.com"
// });

// const initData = {
//     contact: "",
//     id: "",
//     password: "",
//     name: "",
//     address: "",
//     State: "",
//     City: "",
//     Area: "",
//     Gender: "",
//     alternative_mob: ""
// };
// const initImgData = {
//     id: "",
//     imgdata: ""
// }

// const SignUp = () => {
//     const navigation = useNavigation();
//     const [state, setState] = useState(initData);
//     const [stateImg, setStateImg] = useState(initImgData);
//     const [contact, setContact] = useState("");
//     // const [user, loading, error] = useAuthState(auth);
//     // useEffect(() => {
//     //     if (loading) {
//     //         return;
//     //     }
//     //     if (user) navigation("/profile");
//     // }, [user, loading]);

//     const handleChange = (name, value) => {
//         setState({ ...state, [name]: value });
//     }
//     const handleSubmit = () => {
//         const idData = shortid.generate();
//         state.id = idData;
//         state.password = idData;
//         stateImg.id = idData;

//         if (!contact) {
//             alert("Please Fill All Details");
//         }
//         else {
//             dataInsert();
//         }
//     }
//     const dataInsert = () => {
//         database = getDatabase();
//         push(ref(database, 'user_table'), state)
//             .then(() => {
//                 alert("data not insert")
//             }).catch((err) => {
//                 push(ref(database, `user_IMG_table/${state.contact}`), state)
//                 alert("data insertes" + state.password);

//             })
//     };

//     const [authenticated, setAuthenticated] = useState(false);
//     auth().onAuthStateChanged((user) => {
//         if (user) {
//             setAuthenticated(true);
//         } else {
//             setAuthenticated(false);
//         }
//     });
//     async function handleGoogleButtonPress() {
//         try {
//             // get the user id token
//             const { idToken } = await GoogleSignin.signIn();
//             // create a credential using the token
//             const googleCredential = auth.GoogleAuthProvider.credential(idToken);
//             // authenticate the user using the credential
//             return auth().signInWithCredential(googleCredential);
//         } catch (error) {
//             console.log("error", error);
//         }
//     }
//     if (authenticated) {
//         return <Authenticated />
//     }

//     return (
//         <View style={{ justifyContent: 'center' }}>
//             <View style={{
//                 width: "80%",
//                 height: 480,
//                 alignSelf: 'center',
//                 alignItems: 'center',
//                 borderRadius: 20,
//                 backgroundColor: '#0B0B45',
//                 marginTop: '20%'
//             }}>

//                 <Image source={require('../img/logo.jpg')}
//                     style={{
//                         alignSelf: 'center',
//                         width: 100,
//                         height: 100,
//                         justifyContent: 'center',
//                         marginTop: "5%",
//                         borderRadius: 100
//                     }} />

//                 <Text style={{
//                     color: "#ff0000",
//                     fontSize: 35,
//                     fontWeight: "bold",
//                     marginTop: 20,
//                     alignSelf: 'center',
//                     textShadowColor: "black"
//                 }}>
//                     SignUp</Text>


//                 <TextInput style={{
//                     width: "80%",
//                     height: 48,
//                     fontSize: 18,
//                     fontWeight: '400',
//                     marginTop: 30,
//                     backgroundColor: 'white',
//                     borderRadius: 5,
//                     textShadowColor: 'black',
//                     textShadowOffset: { width: 0.7, height: 1 }
//                 }}
//                     Value={contact}
//                     onChangeText={(text) => handleChange("contact", text)}
//                     placeholder="Enter Your Mobile Number"
//                     placeholderTextColor={"#000000"}
//                     maxLength={10}
//                 />
//                 <TouchableOpacity style={{
//                     width: '80%',
//                     height: 40,
//                     alignSelf: 'center',
//                     justifyContent: 'center',
//                     marginTop: 25,
//                     backgroundColor: "#ffdf00",
//                     borderRadius: 8,
//                     textShadowOffset: { width: 0.7, height: 1 },
//                 }} onPress={handleSubmit}>
//                     <Text style={{
//                         color: 'black',
//                         fontSize: 20,
//                         fontWeight: '600',
//                         alignSelf: "center",
//                     }}>
//                         SignUp
//                     </Text>
//                 </TouchableOpacity>

//                 <GoogleSigninButton onPress={handleGoogleButtonPress}
//                     style={{
//                         flexDirection: 'row',
//                         alignItems: "center",
//                         width: '80%', height: 50,
//                         borderWidth: 2,
//                         borderColor: 'black',
//                         padding: 10,
//                         justifyContent: 'center',
//                         alignSelf: 'center',
//                         marginTop: 20, borderRadius: 8,
//                         backgroundColor: "white"
//                     }}
//                 />

//                 <TouchableOpacity style={{
//                     background: 'none',
//                     textShadowColor: "black",
//                     textShadowOffset: { width: 0.7, height: 1 },
//                     borderRadius: 8,
//                     justifyContent: 'center',
//                     alignItems: 'center',
//                     marginTop: "5%",
//                     marginBottom: "5%",
//                     alignSelf: 'center',
//                 }} onPress={() => navigation.navigate('SignIn')}>

//                     <Text style={{
//                         color: '#ff0000',
//                         fontSize: 28,
//                         fontWeight: 'bold',
//                         paddingLeft: 200,
//                         textDecorationLine: 'underline',
//                     }}>
//                         SignIn
//                     </Text>
//                 </TouchableOpacity>

//             </View>
//         </View>
//     );
// }
// export default SignUp;