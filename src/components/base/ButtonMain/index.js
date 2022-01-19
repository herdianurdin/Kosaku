import React, { memo } from 'react'
import { Text, TouchableOpacity } from 'react-native'
import { s16, s48, sButton } from '../../../assets/sizes'
import { cl_light, cl_primary, cl_grass } from '../../../assets/colors'
import { font20, paddingButton, shadow } from '../../../assets/styles'

export default memo(function ButtonMain({ title, valid, action }) {
    return (
        <TouchableOpacity onPress={action}>
            <Text
                style={{
                    ...font20,
                    ...shadow,
                    ...paddingButton,
                    color: valid ? cl_light : cl_primary,
                    backgroundColor: valid ? cl_grass : cl_light,
                    width: sButton,
                    textAlign: 'center',
                    borderRadius: s48,
                    marginBottom: s16,
                }}>
                {title}
            </Text>
        </TouchableOpacity>
    )
})
