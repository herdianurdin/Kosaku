import React, { memo } from 'react'
import { TextInput, View, TouchableOpacity } from 'react-native'
import Icon from 'react-native-vector-icons/Ionicons'
import { card, font16 } from '../../../assets/styles'
import { s24, s32, s64, s8 } from '../../../assets/sizes'
import { cl_light, cl_muted } from '../../../assets/colors'

export default memo(function SearchBar({ value, clearValue, onChangeText }) {
    return (
        <View
            style={{
                ...card,
                marginHorizontal: s32,
                justifyContent: 'center',
                backgroundColor: cl_light,
            }}>
            <TextInput
                placeholder="Cari kata ..."
                style={{
                    ...font16,
                    paddingLeft: s24,
                    paddingRight: s64,
                    paddingVertical: s8,
                    color: cl_muted,
                }}
                placeholderTextColor={cl_muted}
                value={value}
                onChangeText={onChangeText}
            />
            <TouchableOpacity
                onPress={clearValue}
                disabled={!value}
                style={{ position: 'absolute', right: s24 }}>
                <Icon
                    name={value ? 'close' : 'search'}
                    size={s24}
                    color={cl_muted}
                />
            </TouchableOpacity>
        </View>
    )
})
