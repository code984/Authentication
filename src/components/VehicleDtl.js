import React from 'react';
import { View, FlatList, Text, Image, StyleSheet, TextInput } from 'react-native';
import LinearGradient from "react-native-linear-gradient";
import Icon from 'react-native-vector-icons/Ionicons';


const VehicleDtl = () => {
    const data = [

        {
            id: 1,
            name: "kelly_Reilly",
            photo: "https://upload.wikimedia.org/wikipedia/commons/4/48/Outdoors-man-portrait_%28cropped%29.jpg"
        },
        {
            id: 2,
            name: "Monte_rainey",
            photo: "https://thumbs.dreamstime.com/b/handsome-man-hair-style-beard-beauty-face-portrait-fashion-male-model-black-hair-high-resolution-handsome-man-125031765.jpg"
        },
        {
            id: 3,
            name: "kelly_Reilly",
            photo: "https://upload.wikimedia.org/wikipedia/commons/4/48/Outdoors-man-portrait_%28cropped%29.jpg"
        },
        {
            id: 4,
            name: "Monte_rainey",
            photo: "https://thumbs.dreamstime.com/b/handsome-man-hair-style-beard-beauty-face-portrait-fashion-male-model-black-hair-high-resolution-handsome-man-125031765.jpg"
        },
        {
            id: 5,
            name: "kelly_Reilly",
            photo: "https://upload.wikimedia.org/wikipedia/commons/4/48/Outdoors-man-portrait_%28cropped%29.jpg"
        },
        {
            id: 6,
            name: "Monte_rainey",
            photo: "https://thumbs.dreamstime.com/b/handsome-man-hair-style-beard-beauty-face-portrait-fashion-male-model-black-hair-high-resolution-handsome-man-125031765.jpg"
        },
        {
            id: 7,
            name: "kelly_Reilly",
            photo: "https://upload.wikimedia.org/wikipedia/commons/4/48/Outdoors-man-portrait_%28cropped%29.jpg"
        },
        {
            id: 8,
            name: "Monte_rainey",
            photo: "https://thumbs.dreamstime.com/b/handsome-man-hair-style-beard-beauty-face-portrait-fashion-male-model-black-hair-high-resolution-handsome-man-125031765.jpg"
        },
        {
            id: 9,
            name: "kelly_Reilly",
            photo: "https://upload.wikimedia.org/wikipedia/commons/4/48/Outdoors-man-portrait_%28cropped%29.jpg"
        },
        {
            id: 10,
            name: "Monte_rainey",
            photo: "https://thumbs.dreamstime.com/b/handsome-man-hair-style-beard-beauty-face-portrait-fashion-male-model-black-hair-high-resolution-handsome-man-125031765.jpg"
        }
    ];

    const renderItem = ({ item }) => (
        <View style={{ width: 85, padding: 5, marginTop: 15 }}>
            <LinearGradient
                colors={['#ffffff', '#000000']}
                style={{ padding: 2, borderRadius: 50 }}>
                <Image
                    source={{ uri: item.photo }}
                    style={[styles.userImage, { borderWidth: 4 }]} />
            </LinearGradient>
            <Text style={styles.userName}>{item.name}</Text>
            {/* <Text>{item.id}</Text> */}
        </View>
    );


    return (
        <View>
            <LinearGradient
                colors={['#ffffff', '#FF0000']}
                style={{ padding: 2 }}>
                <View style={{
                    display: 'flex', flexDirection: "row", backgroundColor: "#fff", width: "70%", alignSelf: 'center',
                    justifyContent: 'center', marginTop: 10, borderRadius: 40
                }}>
                    <Icon name="search" size={20} color="#096176" style={{ marginHorizontal: 10, marginTop: 20 }} />
                    <TextInput style={{
                        width: "70%",
                        height: 45,
                        alignSelf: 'center',
                        justifyContent: 'center',
                        marginTop: 10,
                        backgroundColor: 'white',
                        fontSize: 20,
                        fontWeight: '500',
                        color: '#191970'
                    }}
                        onChangeText={(text) => handleChange("search", text)}
                        placeholder="Search Category"
                        placeholderTextColor={"#000000"}
                    />
                </View>

                <FlatList
                    horizontal
                    data={data}
                    renderItem={renderItem}
                    keyExtractor={(item) => item.id}
                />
            </LinearGradient>

        </View>
    );
};

export default VehicleDtl;

const styles = StyleSheet.create({
    userImage: {
        height: 70,
        width: 70,
        borderRadius: 50,
        borderColor: "#ffffff",
        borderWidth: 4
    },
    userName: {
        textAlign: 'center',
        fontSize: 16,
        textTransform: 'lowercase',
        margin: 5,
        color: "#000000"
    }
});
