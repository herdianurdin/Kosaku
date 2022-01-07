import React, { memo } from 'react'
import { TouchableOpacity, View, Text } from 'react-native'
import colors from '../../assets/colors'
import sizes from '../../assets/sizes'

const ButtonList = (props) => {
    const { title, action } = props

    return (
        <View
            style={{
                paddingHorizontal: sizes.s32,
            }}
        >
            <TouchableOpacity onPress={action}>
                <Text
                    style={{
                        fontFamily: 'bold',
                        fontSize: sizes.s18,
                        color: colors.dark,
                        backgroundColor: colors.light,
                        paddingHorizontal: sizes.s24,
                        paddingVertical: sizes.s8,
                        borderRadius: sizes.s12,
                        marginBottom: sizes.s16,
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
                    {title}
                </Text>
            </TouchableOpacity>
        </View>
    )
}

export default memo(ButtonList)
