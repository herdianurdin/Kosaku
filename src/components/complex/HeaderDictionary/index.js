import React, { memo } from 'react'
import { Text, TouchableOpacity, View } from 'react-native'
import Icon from 'react-native-vector-icons/Ionicons'
import { buttonIcon, font32, splitLayout } from '../../../assets/styles'
import { s32 } from '../../../assets/sizes'
import { cl_dark, cl_light } from '../../../assets/colors'

export default memo(function HeaderDictionary({ action }) {
    return (
        <View style={{ paddingHorizontal: s32, ...splitLayout }}>
            <TouchableOpacity onPress={action} style={buttonIcon}>
                <Icon name="arrow-back" size={s32} color={cl_dark} />
            </TouchableOpacity>
            <Text style={{ ...font32, color: cl_light }}>Lihat Kosakata</Text>
        </View>
    )
})
