import React, { memo } from 'react'
import { View, Animated, Text } from 'react-native'
import { cl_dark, cl_light, cl_teal } from '../../../assets/colors'
import { s16, s24, s32 } from '../../../assets/sizes'
import { font16 } from '../../../assets/styles'

export default memo(function ProgressBar({ width, title }) {
    return (
        <View
            style={{
                backgroundColor: `${cl_dark}48`,
                height: s32,
                borderRadius: s32,
                marginVertical: s16,
                marginHorizontal: s24,
            }}>
            <Animated.View
                style={{
                    height: s32,
                    borderRadius: s32,
                    backgroundColor: cl_teal,
                    width: width,
                }}
            />
            <Text
                style={{
                    ...font16,
                    color: cl_light,
                    position: 'absolute',
                    width: '100%',
                    height: '100%',
                    textAlign: 'center',
                    textAlignVertical: 'center',
                }}>
                {title}
            </Text>
        </View>
    )
})
