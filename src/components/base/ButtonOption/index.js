import React, { memo } from 'react'
import { TouchableOpacity, Text } from 'react-native'
import { s24 } from '../../../assets/sizes'
import { card, font20, paddingButton } from '../../../assets/styles'

export default memo(function ButtonOption({
    title,
    action,
    disabled,
    bgColor,
    color,
}) {
    return (
        <TouchableOpacity
            onPress={action}
            disabled={disabled}
            style={{
                ...card,
                marginHorizontal: s24,
                backgroundColor: bgColor,
            }}>
            <Text
                style={{
                    ...font20,
                    ...paddingButton,
                    color,
                }}>
                {title}
            </Text>
        </TouchableOpacity>
    )
})
