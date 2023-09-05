import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import FontAwesomeIcon from 'react-native-vector-icons/FontAwesome';
import { useNavigation } from '@react-navigation/native';


const IconData = () => {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <View style={styles.tab}>
      <Icon name="home" size={20} color="#096176" style={{ marginHorizontal: 10 }} />
        <Text style={styles.label} onPress={() => navigation.navigate('SignIn')}>Home </Text>
      </View>
      <View style={styles.tab}>
        <Icon name="search" size={24} color="black" />
        <Text style={styles.label}>Search</Text>
      </View>
      <View style={styles.tab}>
      <FontAwesomeIcon name="user" size={20} color="#096176" style={{ marginHorizontal: 10 }} />
        <Text style={styles.label} onPress={() => navigation.navigate('profile')}>Profile</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    backgroundColor: 'white',
    paddingVertical: 10,
    borderTopWidth: 1,
    borderTopColor: '#ccc',
    
  },
  tab: {
    alignItems: 'center',
    
  },
  label: {
    fontSize: 12,
    marginTop: 4,
    
  },
});

export default IconData;