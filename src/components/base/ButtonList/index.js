import React, { memo } from 'react'
import { Text, TouchableOpacity } from 'react-native'
import { card, font16, paddingButton } from '../../../assets/styles'
import { s32 } from '../../../assets/sizes'
import { cl_dark, cl_light } from '../../../assets/colors'

export default memo(function ButtonList({ title, action }) {
    return (
        <TouchableOpacity
            onPress={action}
            style={{
                ...card,
                backgroundColor: cl_light,
                marginHorizontal: s32,
            }}>
            <Text
                style={{
                    ...font16,
                    ...paddingButton,
                    color: cl_dark,
                }}>
                {title}
            </Text>
        </TouchableOpacity>
    )
})
