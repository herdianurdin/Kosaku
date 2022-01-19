import React, { memo } from 'react'
import { Text, TouchableOpacity, View } from 'react-native'
import Icon from 'react-native-vector-icons/Ionicons'
import { buttonIcon, font32, splitLayout } from '../../../assets/styles'
import { s24, s32 } from '../../../assets/sizes'
import { cl_dark, cl_light } from '../../../assets/colors'

export default memo(function HeaderDetail({ action }) {
    return (
        <View style={{ ...splitLayout, paddingHorizontal: s24 }}>
            <Text style={{ ...font32, color: cl_light }}>Detail Kata</Text>
            <TouchableOpacity onPress={action} style={buttonIcon}>
                <Icon name="close" size={s32} color={cl_dark} />
            </TouchableOpacity>
        </View>
    )
})
