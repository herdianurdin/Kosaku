import React, { useEffect } from 'react'
import { StyleSheet, SafeAreaView } from 'react-native'
import { ImageSplash } from '../../components'
import colors from '../../assets/colors'
import Tts from 'react-native-tts'

const Splash = ({ navigation }) => {
    useEffect(() => {
        const time = setTimeout(() => {
            Tts.getInitStatus()
                .then(() => {
                    Tts.setDefaultRate(0.6, true)
                    Tts.setDefaultPitch(1)
                    Tts.speak('OK')
                    Tts.stop()
                })
                .catch((error) => {
                    if (error.code === 'no_engine') {
                        Tts.requestInstallEngine()
                    }
                })
            navigation.replace('Home')
        }, 1200)

        return () => clearInterval(time)
    }, [])

    return (
        <SafeAreaView style={styles.container}>
            <ImageSplash />
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: colors.primary,
    },
})

export default Splash
