import React, { memo, useState } from 'react'
import { Animated } from 'react-native'
import FastImage from 'react-native-fast-image'
import sizes from '../../assets/sizes'

const ImageSplash = () => {
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
            source={require('../../assets/images/icon.webp')}
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
                width: sizes.imageSplash,
                height: sizes.imageSplash,
            }}
        />
    )
}

export default memo(ImageSplash)
