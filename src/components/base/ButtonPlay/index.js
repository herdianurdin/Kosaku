import React, { memo } from 'react'
import { TouchableOpacity } from 'react-native'
import Icon from 'react-native-vector-icons/Ionicons'
import { card, paddingButton } from '../../../assets/styles'
import { s16, s64 } from '../../../assets/sizes'
import { cl_dark, cl_light } from '../../../assets/colors'
import { Speech } from '../../../utils'

export default memo(function ButtonPlay({ text }) {
    return (
        <TouchableOpacity
            style={{
                ...paddingButton,
                ...card,
                marginTop: s16,
                backgroundColor: cl_light,
                alignSelf: 'center',
            }}
            onPress={() => Speech(text)}>
            <Icon name="play" size={s64} color={cl_dark} />
        </TouchableOpacity>
    )
})
