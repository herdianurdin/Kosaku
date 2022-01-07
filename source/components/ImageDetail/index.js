import React, { memo } from 'react'
import { ActivityIndicator, View } from 'react-native'
import FastImage from 'react-native-fast-image'
import sizes from '../../assets/sizes'
import colors from '../../assets/colors'

const ImageDetail = (props) => {
    const { source, loading, onLoad } = props

    return (
        <View
            style={{
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
                marginBottom: sizes.s16,
                backgroundColor: colors.primaryLight,
                justifyContent: 'center',
            }}
        >
            <FastImage
                source={{
                    uri: `https://firebasestorage.googleapis.com/v0/b/kosaku-a0d36.appspot.com/o/images%2F${source}?alt=media&token`
                }}
                style={{
                    width: sizes.imageCardWidth,
                    height: sizes.imageCardHeight,
                    borderRadius: sizes.s16,
                }}
                onLoad={onLoad}
            />
            {loading ? (
                <ActivityIndicator
                    size="large"
                    color={colors.primary}
                    style={{
                        position: 'absolute',
                        alignSelf: 'center',
                    }}
                />
            ) : null}
        </View>
    )
}

export default memo(ImageDetail)
