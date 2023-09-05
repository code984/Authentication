import React, { useEffect, useState } from "react";
import { View } from "react-native";
import { firebase } from "@react-native-firebase/database";
import {Dropdown} from "react-native-material-dropdown";
import { useDispatch, useSelector } from "react-redux";
import { Load_signUpData } from '../Redux/Action';

const initData = {
    state_name: "",
    stateid: "",
}

const Update = () => {
    const [state, setState] = useState(initData);
    const [data, setData] = useState({});
    const { Loaduser } = useSelector(state => state.cartreducer);
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(Load_signUpData());
    }, []);
    const handleChange = (name, value) => {
        setState({ ...state, [name]: value });
    }
    const handleSubmit = () => {
        database = firebase.database();
        database.ref("update_table").push(state, (err) => {
            if (err) {
                alert("data not insert");
            }
            else {
                alert("data inserted");
            }
        });
    }
    useEffect(() => {
        database.ref("state_table").on("value", (snapshot) => {
            if (snapshot.val() != null) {
                setData({ ...snapshot.val() });
            }
            else {
                setData({});
            }
        })
    }, []);
    Object.keys(Loaduser).map((id, index) => {
        if (state.state_name === Loaduser[id].state_name) {
            state.stateid = Loaduser[id].stateid;
        }
    })

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

                <select onChangeText={(text) => handleChange("state_name", text)}>
                    <option> Select State </option>
                    {
                        Object.keys(Loaduser).map((id, index) => {
                            return (
                            <option> {Loaduser[id].state_name} </option>
                            )
                        })

                    }
                </select>


            </View>
        </View>

    );
}
export default Update;