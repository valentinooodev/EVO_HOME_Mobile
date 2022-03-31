import React from 'react'
import {View, Text, ScrollView, StyleSheet, StatusBar, TouchableOpacity} from 'react-native'
import {Card, CardTitle, CardContent, CardAction, CardButton, CardImage} from 'react-native-material-cards'
import {Switch} from 'react-native-switch';
import {useTheme} from "react-native-paper";
import * as Animatable from "react-native-animatable";

export default function RoomScreen({navigation, route}) {
    const data = [
        {
            "id": 2,
            "name": "Frame Sensor 1",
            "slug": "frame-sensor-1",
            "status": true,
            "data": "hasgdfaksjdf",
            "category": 2,
            "room": 1
        },
        {
            "id": 1,
            "name": "Light 1",
            "slug": "light-1",
            "status": false,
            "data": "asdfasdfasdfadf",
            "category": 1,
            "room": 1
        }
    ]

    const {colors} = useTheme();
    const onPress = (param) => {
        navigation.navigate('Room', param);
    }
    return (
        <View style={styles.container}>
            <StatusBar backgroundColor='#C65D7B' barStyle="light-content"/>
            <View style={styles.header}>
                <Text style={styles.text_header}>{route.params.roomName}</Text>
                <Text style={styles.text_description}>
                    {`${route.params.ownerCounter} family members have access`}
                </Text>
            </View>
            <ScrollView contentContainerStyle={styles.scroll}>
                {data.map((device, i)=>(
                    <TouchableOpacity style={styles.device} key={i}>
                        <Text style={styles.device_title}>
                            {device.name}
                        </Text>
                        <Text style={styles.device_data}>
                            {device.data}
                        </Text>
                    </TouchableOpacity>
                ))}
            </ScrollView>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
        height: '100%',
        width: '100%'
    },
    header: {
        // flex: 1,
        backgroundColor: '#C65D7B',
        justifyContent: 'flex-start',
        paddingHorizontal: 20,
        paddingTop: 10,
        paddingBottom: 10,
        borderBottomLeftRadius: 10,
        borderBottomRightRadius: 10,
        // borderWidth: 1,
        // borderColor: 'blue'
    },
    text_header: {
        color: '#fff',
        fontWeight: 'bold',
        fontSize: 30
    },
    text_description: {
        color: '#fff',
        fontSize: 15
    },
    scroll: {
        backgroundColor: "white",
        flex: 5,
        // borderColor: 'green',
        // borderWidth: 1,
        alignItems: 'center'
    },
    device: {
        width: "90%",
        borderRadius: 10,
        backgroundColor: "#F6E7D8",
        padding: 10,
        margin: 5,
        // borderWidth: 1,
        // borderColor: 'blue'
    },
    device_title: {
        fontSize: 20,
        fontWeight: "bold",
        color: "#874356"
    },
    device_data: {
        fontSize: 15,
        color: "#C65D7B"
    }
})