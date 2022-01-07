import React, { memo } from 'react'
import { TouchableOpacity, Text } from 'react-native'
import colors from '../../assets/colors'
import sizes from '../../assets/sizes'

const ButtonOption = (props) => {
    const { title, action, disabled, backgroundColor, color } = props

    return (
        <TouchableOpacity onPress={action} disabled={disabled}>
            <Text
                style={{
                    fontFamily: 'bold',
                    fontSize: sizes.s20,
                    color,
                    backgroundColor,
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
    )
}

export default memo(ButtonOption)
