import React, { memo } from 'react'
import { View, Animated, Text } from 'react-native'
import colors from '../../assets/colors'
import sizes from '../../assets/sizes'

const Progress = (props) => {
    const { widthProgress, textProgress } = props

    return (
        <View
            style={{
                backgroundColor: colors.dark + '48',
                height: sizes.s32,
                borderRadius: sizes.s32,
                marginBottom: sizes.s16,
            }}
        >
            <Animated.View
                style={{
                    height: sizes.s32,
                    borderRadius: sizes.s32,
                    backgroundColor: colors.teal,
                    width: widthProgress,
                }}
            />
            <Text
                style={{
                    fontSize: sizes.s16,
                    fontFamily: 'bold',
                    color: colors.light,
                    position: 'absolute',
                    width: '100%',
                    textAlign: 'center',
                    textAlignVertical: 'center',
                    height: '100%',
                }}
            >
                {textProgress}
            </Text>
        </View>
    )
}

export default memo(Progress)
