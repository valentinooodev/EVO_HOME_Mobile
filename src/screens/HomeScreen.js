import React from 'react'
import {StyleSheet, View, Text, ScrollView, TouchableOpacity, StatusBar, TouchableOpacityComponent} from 'react-native'
import {Card, CardTitle, CardContent, CardAction, CardButton, CardImage} from 'react-native-material-cards'
import * as Animatable from 'react-native-animatable';
import {useTheme} from 'react-native-paper';
import Icon from 'react-native-vector-icons/EvilIcons';

export default function HomeScreen({navigation}) {
    const res_data = [
        {
            "id": 1,
            "name": "Room 1",
            "owners": [
                1
            ],
            "device_counter": 2,
            "owner_counter": 1
        },
        {
            "id": 3,
            "name": "Room 2",
            "owners": [
                1
            ],
            "device_counter": 0,
            "owner_counter": 1
        },
        {
            "id": 4,
            "name": "Room 3",
            "owners": [
                1,
                2
            ],
            "device_counter": 0,
            "owner_counter": 2
        },
        {
            "id": 5,
            "name": "Room 4",
            "owners": [
                1,
                2
            ],
            "device_counter": 0,
            "owner_counter": 2
        },
        {
            "id": 6,
            "name": "Room 5",
            "owners": [
                1,
                2
            ],
            "device_counter": 0,
            "owner_counter": 2
        },
        {
            "id": 10,
            "name": "Room 6",
            "owners": [
                1,
                2
            ],
            "device_counter": 0,
            "owner_counter": 2
        },
        {
            "id": 9,
            "name": "Room 7",
            "owners": [
                1,
                2
            ],
            "device_counter": 0,
            "owner_counter": 2
        },
        {
            "id": 8,
            "name": "Room 8",
            "owners": [
                1,
                2
            ],
            "device_counter": 0,
            "owner_counter": 2
        },
        {
            "id": 7,
            "name": "Room 9",
            "owners": [
                1,
                2
            ],
            "device_counter": 0,
            "owner_counter": 2
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
                <View style={styles.welcome}>
                    <Text style={styles.text_header}>Hi Valentino!</Text>
                    <Text style={styles.text_description}>EVO Home</Text>
                </View>
                <View style={styles.profile}>
                    <TouchableOpacity
                        onPress = {() => {
                            navigation.navigate('Profile')
                        }}
                    >
                        <Icon name="user" size={50} color={"#fff"}/>
                    </TouchableOpacity>
                </View>
            </View>
            <ScrollView contentContainerStyle={styles.scroll}>
                {res_data.map((room, i) => (
                    <TouchableOpacity
                        style={styles.room}
                        key={i}
                        onPress={() => {
                            navigation.navigate('Room', {
                                roomId: room.id,
                                roomName: room.name,
                                ownerCounter: room.owner_counter
                            })
                        }}
                    >
                        <Text style={styles.room_title}>
                            {room.name}
                        </Text>
                        <Text style={styles.room_owner}>
                            {`${room.owner_counter} family members have access`}
                        </Text>
                        <Text style={styles.room_device}>
                            {`${room.device_counter} devices`}
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
        backgroundColor: '#C65D7B',
    },
    header: {
        paddingBottom: 10,
        flexDirection: 'row'
    },
    text_header: {
        color: '#fff',
        fontWeight: 'bold',
        fontSize: 30
    },
    text_description: {
        color: '#fff',
        fontSize: 20
    },
    scroll: {
        // borderWidth: 1,
        // borderColor: 'blue',
        alignItems: 'center'
    },
    room: {
        width: "90%",
        borderRadius: 10,
        backgroundColor: "#fff",
        padding: 10,
        margin: 5
    },
    room_title: {
        color: '#874356',
        fontSize: 20,
        fontWeight: "bold"
    },
    room_owner: {
        color: '#874356',
        fontSize: 15,
    },
    room_device: {
        color: '#874356',
        fontSize: 15,
    },
    welcome: {
        width: '80%',
        paddingLeft: 10
    },
    profile: {
        width: '20%',
        justifyContent: "center",
        alignItems: 'center'
    }
})