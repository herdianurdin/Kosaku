import React, { memo } from 'react'
import { View, ActivityIndicator } from 'react-native'
import FastImage from 'react-native-fast-image'
import { cl_primary, cl_primaryLight } from '../../../assets/colors'
import { s16, s24, sCardHeight, sCardWidth } from '../../../assets/sizes'
import { card } from '../../../assets/styles'

export default memo(function CardImage({ source, loading, onLoad }) {
    return (
        <View
            style={{
                ...card,
                marginHorizontal: s24,
                justifyContent: 'center',
            }}>
            <FastImage
                source={{
                    uri: `https://firebasestorage.googleapis.com/v0/b/kosaku-a0d36.appspot.com/o/images%2F${source}?alt=media&token`,
                }}
                style={{
                    backgroundColor: cl_primaryLight,
                    width: sCardWidth,
                    height: sCardHeight,
                    borderRadius: s16,
                }}
                onLoad={onLoad}
            />

            {loading ? (
                <ActivityIndicator
                    size="large"
                    color={cl_primary}
                    style={{
                        position: 'absolute',
                        alignSelf: 'center',
                    }}
                />
            ) : null}
        </View>
    )
})
