import React, { memo } from 'react'
import { TouchableOpacity, Text } from 'react-native'
import colors from '../../assets/colors'
import sizes from '../../assets/sizes'

const ButtonMain = (props) => {
    const { title, action, color, backgroundColor } = props

    return (
        <TouchableOpacity onPress={action}>
            <Text
                style={{
                    fontFamily: 'bold',
                    fontSize: sizes.s20,
                    textAlign: 'center',
                    color: color ? color : colors.primary,
                    backgroundColor: backgroundColor ? backgroundColor : colors.light,
                    width: sizes.buttonMain,
                    paddingVertical: sizes.s12,
                    marginBottom: sizes.s16,
                    borderRadius: sizes.s64,
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

export default memo(ButtonMain)
