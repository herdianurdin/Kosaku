import React, { memo, useState } from 'react'
import { Animated } from 'react-native'
import FastImage from 'react-native-fast-image'
import { sSplash } from '../../../assets/sizes'

export default memo(function ImageSplash() {
    const AnimatedFastImage = Animated.createAnimatedComponent(FastImage)
    const [opacity] = useState(new Animated.Value(0))

    const onLoad = () => {
        Animated.timing(opacity, {
            toValue: 1,
            duration: 600,
            useNativeDriver: true,
        }).start()
    }

    return (
        <AnimatedFastImage
            onLoad={onLoad}
            source={require('../../../assets/images/icon.webp')}
            style={{
                opacity,
                transform: [
                    {
                        scale: opacity.interpolate({
                            inputRange: [0, 1],
                            outputRange: [0, 1],
                        }),
                    },
                ],
                width: sSplash,
                height: sSplash,
            }}
        />
    )
})
