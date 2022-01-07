import React, { memo } from 'react'
import { View, TextInput } from 'react-native'
import colors from '../../assets/colors'
import sizes from '../../assets/sizes'
import Icon from 'react-native-vector-icons/Ionicons'

const SearchBar = (props) => {
    const { placeholder, value, onChangeText } = props

    return (
        <View
            style={{
                paddingHorizontal: sizes.s32,
            }}
        >
            <View
                style={{
                    height: sizes.s48,
                    marginBottom: sizes.s16,
                    justifyContent: 'center',
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
                <TextInput
                    style={{
                        fontSize: sizes.s16,
                        fontFamily: 'bold',
                        color: colors.muted,
                        backgroundColor: colors.light,
                        borderRadius: sizes.s16,
                        paddingLeft: sizes.s24,
                        paddingRight: sizes.s64,
                    }}
                    placeholder={placeholder}
                    placeholderTextColor={colors.muted}
                    value={value}
                    onChangeText={onChangeText}
                />
                <Icon
                    name="search"
                    size={sizes.s24}
                    color={colors.muted}
                    style={{
                        position: 'absolute',
                        right: sizes.s24,
                    }}
                />
            </View>
        </View>
    )
}

export default memo(SearchBar)
