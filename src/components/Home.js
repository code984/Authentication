import React from "react";
import VehicleDtl from "./VehicleDtl";
import Vehicle from "./Vehicle";
import IconData from "./IconData";
import SignIn from "./SignIn";
import Profile from "./Profile";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { View } from "react-native";

const Tab = createBottomTabNavigator();

const Home = () => {
        return (
                <View>
                <VehicleDtl />
                <Vehicle />
                <IconData />
                </View>
        );
}
export default Home;
