import React, { memo } from 'react'
import { View, Text, TouchableOpacity, ActivityIndicator } from 'react-native'
import FastImage from 'react-native-fast-image'
import Icon from 'react-native-vector-icons/Ionicons'
import sizes from '../../assets/sizes'
import colors from '../../assets/colors'
import Tts from 'react-native-tts'

const ImageQuiz = (props) => {
    const { source, title, loading, onLoad, lang } = props
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
        <View
            style={{
                alignItems: 'center',
                marginBottom: sizes.s48,
                backgroundColor: colors.primaryLight,
                width: sizes.imageCardWidth,
                height: sizes.imageCardHeight,
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
            <View
                style={{
                    alignItems: 'center',
                    justifyContent: 'center',
                }}
            >
                <FastImage
                    source={source}
                    style={{
                        width: sizes.imageCardWidth,
                        height: sizes.imageCardHeight,
                        borderRadius: sizes.s16,
                    }}
                    onLoad={onLoad}
                />
                {loading ? (
                    <ActivityIndicator
                        color={colors.primary}
                        size="large"
                        style={{
                            position: 'absolute',
                        }}
                    />
                ) : null}
            </View>
            {lang == 'en' ? (
                <TouchableOpacity
                    onPress={() => onPress(title)}
                    style={{
                        flexDirection: 'row',
                        alignItems: 'center',
                        justifyContent: 'center',
                        paddingVertical: sizes.s8,
                        paddingLeft: sizes.s16,
                        paddingRight: sizes.s24,
                        borderRadius: sizes.s48,
                        backgroundColor: colors.light,
                        marginTop: -sizes.s24,
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
                        name="volume-high"
                        size={sizes.s32}
                        color={colors.dark}
                        style={{
                            marginRight: sizes.s12,
                        }}
                    />
                    <Text
                        style={{
                            fontFamily: 'bold',
                            fontSize: sizes.s20,
                            color: colors.dark,
                        }}
                    >
                        {title}
                    </Text>
                </TouchableOpacity>
            ) : (
                <Text
                style={{
                    fontFamily: 'bold',
                    fontSize: sizes.s20,
                    color: colors.dark,
                    paddingVertical: sizes.s8,
                    paddingHorizontal: sizes.s24,
                    borderRadius: sizes.s48,
                    backgroundColor: colors.light,
                    marginTop: -sizes.s24,
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
            )}
        </View>
    )
}

export default memo(ImageQuiz)
