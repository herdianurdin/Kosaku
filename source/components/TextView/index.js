import React, { memo } from 'react'
import { View, Text } from 'react-native'
import sizes from '../../assets/sizes'
import colors from '../../assets/colors'

const TextView = (props) => {
    const { textEn, textId } = props

    return (
        <View
            style={{
                backgroundColor: colors.light,
                borderRadius: sizes.s16,
                paddingHorizontal: sizes.s24,
                paddingVertical: sizes.s12,
                shadowColor: colors.dark,
                shadowOffset: {
                    width: 1,
                    height: 1,
                },
                shadowOpacity: 0.4,
                shadowRadius: 1,
                elevation: 4,
            }}
        >
            <Text
                style={{
                    fontFamily: 'bold',
                    fontSize: sizes.s20,
                    color: colors.dark,
                }}
            >
                {textEn}
            </Text>
            <Text
                style={{
                    fontFamily: 'bold',
                    fontSize: sizes.s16,
                    color: colors.muted,
                }}
            >
                {textId}
            </Text>
        </View>
    )
}

export default memo(TextView)
