import React, { useEffect } from 'react'
import { SafeAreaView } from 'react-native'
import { ImageSplash } from '../../components'
import { centerLayout } from '../../assets/styles'
import Tts from 'react-native-tts'

export default function Splash({ navigation }) {
    useEffect(() => {
        const time = setTimeout(() => {
            Tts.getInitStatus()
                .then(() => {
                    Tts.setDefaultRate(0.6, true)
                    Tts.setDefaultPitch(1)
                    Tts.speak('OK')
                    Tts.stop()
                })
                .catch(error => {
                    if (error.code === 'no_engine') {
                        Tts.requestInstallEngine()
                    }
                })
            navigation.replace('Home')
        }, 1200)

        return () => clearInterval(time)
    }, [])

    return (
        <SafeAreaView style={centerLayout}>
            <ImageSplash />
        </SafeAreaView>
    )
}
