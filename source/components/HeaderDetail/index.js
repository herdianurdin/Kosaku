import React, { memo } from 'react'
import { TouchableOpacity, Text, View } from 'react-native'
import Icon from 'react-native-vector-icons/Ionicons'
import colors from '../../assets/colors'
import sizes from '../../assets/sizes'

const HeaderDetail = (props) => {
    const { title, action } = props

    return (
        <View
            style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                alignItems: 'center',
                marginTop: sizes.s16,
                marginBottom: sizes.s24,
            }}
        >
            <Text
                style={{
                    fontFamily: 'bold',
                    fontSize: sizes.s32,
                    color: colors.light,
                }}
            >
                {title}
            </Text>
            <TouchableOpacity onPress={action}>
                <Icon
                    name="close"
                    size={sizes.s32}
                    color={colors.dark}
                    style={{
                        backgroundColor: colors.light,
                        padding: sizes.s6,
                        borderRadius: sizes.s48,
                        shadowColor: colors.dark,
                        shadowOffset: {
                            width: 1,
                            height: 1,
                        },
                        shadowOpacity: 0.4,
                        shadowRadius: 1,
                        elevation: 4,
                    }}
                />
            </TouchableOpacity>
        </View>
    )
}

export default memo(HeaderDetail)
