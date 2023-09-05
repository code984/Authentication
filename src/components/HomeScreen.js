import React from 'react';
import { View, Button,Image,StyleSheet ,Text} from 'react-native';
import { GoogleSignin, statusCodes } from '@react-native-google-signin/google-signin';
import { useNavigation } from '@react-navigation/native';
import auth from '@react-native-firebase/auth';

const HomeScreen = () => {
  const navigation = useNavigation();
  
  const user = auth().currentUser;

  const handleGoogleLogin = async () => {
    try {
      await GoogleSignin.signIn();
      // Handle successful login here

      // Navigate to the profile screen
      navigation.navigate('Profile');
    } catch (error) {
      if (error.code === statusCodes.SIGN_IN_CANCELLED) {
        // Handle canceled login
      } else if (error.code === statusCodes.IN_PROGRESS) {
        // Handle ongoing sign-in process
      } else if (error.code === statusCodes.PLAY_SERVICES_NOT_AVAILABLE) {
        // Handle missing Play Services on Android
      } else {
        // Handle other errors
      }
    }
  };

  return (
    <View style={{alignItems:"center"}}>
      <Button title="Google Login" onPress={handleGoogleLogin} />
      <Text style={styles.title}>You have logged in successfully</Text>
            <Image source={{ uri: user?.photoURL }} style={styles.image} />
            <Text style={styles.text}>{user?.displayName}</Text>
            <Text style={styles.text}>{user?.email}</Text>
            <View style={{ marginTop: 30 }}>
                <Button title= "Log out" 
                onPress={()=>{
                    auth().signOut();
                }}
                />
            </View>
    </View>
  );
};

export default HomeScreen;
const styles = StyleSheet.create({
  screen: {
      flex: 1,
      justifyContent: "center",
      alignItems: "center",
      backgroundColor: "#ffc2c2",
  },
  title: {
      fontSize: 25,
      marginBottom: 30,
  },
  image: {
      height: 150,
      width: 150,
      borderRadius: 150,
      marginBottom: 20,
  },
  text: {
      fontSize: 20,
  },
});
