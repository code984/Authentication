import React from "react";
import { View, Image, StyleSheet, FlatList, Text, TextInput, TouchableOpacity } from 'react-native';
import LinearGradient from "react-native-linear-gradient";
import Icon from 'react-native-vector-icons/Ionicons';

const personData = [
  {
    id: '1', image: require('../img/download.jpg'),
    name: 'Tesla', time: '30-40min'
  },
  {
    id: '2', image: require('../img/download.jpg'),
    name: 'Tesla', time: '30-45min'
  },
  {
    id: '3', image: require('../img/download.jpg'),
    name: 'Tesla', time: '30-45min'
  },
  {
    id: '4', image: require('../img/download.jpg'),
    name: 'Tesla', time: '30-40min'
  },
  {
    id: '5', image: require('../img/download.jpg'),
    name: 'Tesla', time: '30-45min'
  },
]
const renderItem = ({ item }) => (
  <View>
    <TouchableOpacity onPress={() => (item)}>
      <Image source={item.image} style={styles.image} />
      <Text style={styles.name}>{item.name}</Text>
      <Text style={styles.time}>{item.time}</Text>
    </TouchableOpacity>
  </View>
);
// const send = (item) => {
//   navigation.navigate("VehicleDtl", item);
// };
// const navigation = useNavigation();

const Vehicle = () => {

  return (
    <View style={styles.container}>
      <LinearGradient
        colors={['#ffb6c1', '#FF0000']}>

        <View style={{
          display: 'flex', flexDirection: "row", backgroundColor: "#fff", width: "70%", alignSelf: 'center',
          justifyContent: 'center', marginTop: 5, borderRadius: 40
        }}>
          <Icon name="search" size={20} color="#096176" style={{ marginHorizontal: 10, marginTop: 15 }} />
          <TextInput style={{
            width: "70%",
            height: 45,
            flexDirection: "row",
            alignSelf: 'center',
            justifyContent: 'center',
            backgroundColor: 'white',
            fontSize: 20,
            fontWeight: '500',
            color: '#191970'
          }}
            onChangeText={(text) => handleChange("search", text)}
            placeholder="Search Near Shop"
            placeholderTextColor={"#000000"} />
        </View>
        <View style={{marginTop:20}}> 
          <FlatList
          data={personData}
          keyExtractor={(item) => item.id}
          renderItem={renderItem}
        />
        </View>


      </LinearGradient>
    </View>
  );
};

const styles = StyleSheet.create({
  image: {
    width: "96%",
    alignSelf: 'center'
  },
  TouchableOpacity: {
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "space-around",
    width: "90%",
    height: 60,
    backgroundColor: '#0b0b45',
    elevation: 5,
    alignSelf: 'center',
    marginTop: 7
  },
  LinearGradient: {
    padding: 2
  },
  time: {
    color: "#000000",
    fontSize: 20,
    fontWeight: "bold",
    marginLeft: 10,
    textShadowColor: "black",
  },
  name: {
    color: "#FFFF00",
    fontSize: 22,
    fontWeight: "bold",
    marginLeft: 10,
    marginTop: 8,
    textShadowColor: "black",
  }
});

export default Vehicle;
