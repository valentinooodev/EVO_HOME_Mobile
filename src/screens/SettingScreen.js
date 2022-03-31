import React from 'react'
import {View, Text, TouchableOpacity, TouchableOpacityComponent} from 'react-native'

export default function SettingScreen() {
    return (
        <View>
            <Text>Setting Screen</Text>
            <TouchableOpacity>
                <View>
                    <Text>
                        Sign out
                    </Text>
                </View>
            </TouchableOpacity>
        </View>
    )
}