import Tts from 'react-native-tts'

const Speech = async text => {
    Tts.stop()
    Tts.setDucking(true)
    Tts.speak(text, {
        androidParams: {
            KEY_PARAM_PAN: 0,
            KEY_PARAM_VOLUME: 1,
            KEY_PARAM_STREAM: 'STREAM_MUSIC',
        },
    })
}

export { Speech }
