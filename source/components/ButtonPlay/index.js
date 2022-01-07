import React, { memo } from 'react'
import { TouchableOpacity } from 'react-native'
import Icon from 'react-native-vector-icons/Ionicons'
import colors from '../../assets/colors'
import sizes from '../../assets/sizes'
import Tts from 'react-native-tts'

const ButtonPlay = (props) => {
    const { text } = props
    const onPress = async (text) => {
        Tts.stop()
        Tts.speak(text, {
            androidParams: {
                KEY_PARAM_PAN: 0,
                KEY_PARAM_VOLUME: 1,
                KEY_PARAM_STREAM: 'STREAM_MUSIC',
            },
        })
    }

    return (
        <TouchableOpacity
            onPress={() => onPress(text)}
            style={{
                width: sizes.s96,
                alignSelf: 'center',
                backgroundColor: colors.light,
                marginTop: sizes.s32,
                borderRadius: sizes.s16,
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
            <Icon
                name="play"
                size={sizes.s48}
                color={colors.dark}
                style={{
                    paddingVertical: sizes.s16,
                    paddingHorizontal: sizes.s24,
                }}
            />
        </TouchableOpacity>
    )
}

export default memo(ButtonPlay)
