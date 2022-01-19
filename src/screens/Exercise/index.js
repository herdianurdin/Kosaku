import firestore from '@react-native-firebase/firestore'
import React, { useEffect, useState } from 'react'
import { ActivityIndicator, Animated, SafeAreaView, View } from 'react-native'
import { cl_light } from '../../assets/colors'
import { s8 } from '../../assets/sizes'
import { container } from '../../assets/styles'
import {
    ButtonMain,
    ModalResult,
    ModelZero,
    ProgressBar,
} from '../../components'

let Sound = require('react-native-sound')
Sound.setCategory('Playback')

export default function Exercise({ navigation }) {
    const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0)
    const [currentAnswerIndex, setCurrentAnswerIndex] = useState(0)
    const [currentOptionSelected, setCurrentOptionSelected] = useState(null)
    const [correctOption, setCorrectOption] = useState(null)
    const [optionDisabled, setOptionDisabled] = useState(false)
    const [showNextButton, setShowNextButton] = useState(false)
    const [showResult, setShowResult] = useState(false)
    const [score, setScore] = useState(0)
    const [data, setData] = useState([])
    const [loading, setLoading] = useState(true)
    const [loadImage, setLoadImage] = useState(true)
    const [progress] = useState(new Animated.Value(0))
    const progressAnim = progress.interpolate({
        inputRange: [0, data.length],
        outputRange: ['0%', '100%'],
    })

    const handleValidate = (isCorrect, selectedOption, correctOption) => {
        setCorrectOption(correctOption)
        setCurrentOptionSelected(selectedOption)
        setOptionDisabled(true)

        if (isCorrect) {
            setScore(score + 1)
            let correctSound = new Sound(
                'correct.mp3',
                Sound.MAIN_BUNDLE,
                () => {
                    correctSound.setVolume(0.5)
                    correctSound.play(() => correctSound.release())
                },
            )
        } else {
            let wrongSound = new Sound('wrong.mp3', Sound.MAIN_BUNDLE, () => {
                wrongSound.setVolume(0.5)
                wrongSound.play(() => wrongSound.release())
            })
        }

        Animated.timing(progress, {
            toValue: currentAnswerIndex + 1,
            duration: 300,
            useNativeDriver: false,
        }).start()

        setShowNextButton(true)
    }

    const handleNextButton = () => {
        if (currentQuestionIndex == data.length - 1) {
            setShowResult(true)
        } else {
            setCurrentAnswerIndex(currentAnswerIndex + 1)
            setCurrentQuestionIndex(currentQuestionIndex + 1)
            setCurrentOptionSelected(null)
            setCorrectOption(null)
            setOptionDisabled(false)
            setShowNextButton(false)
            setLoadImage(true)
        }
    }

    const renderNextButton = () => {
        const valid = currentQuestionIndex + 1 == data.length

        return showNextButton ? (
            <View style={{ alignSelf: 'center', marginTop: s8 }}>
                <ButtonMain
                    action={handleNextButton}
                    valid={valid}
                    title={valid ? 'Lihat Hasil' : 'Selanjutnya'}
                />
            </View>
        ) : null
    }

    useEffect(() => {
        const getQuestions = firestore()
            .collection('Questions')
            .onSnapshot(docSnapshot => {
                const dataDoc = docSnapshot.docs.map(doc =>
                    Object.assign({ id: doc.id }, doc.data()),
                )
                const dataRandom = dataDoc.sort(() => 0.5 - Math.random())

                setData(dataRandom.slice(0, 10))
                setLoading(false)
            })

        return () => getQuestions()
    }, [])

    return (
        <SafeAreaView style={[container]}>
            {loading ? (
                <View
                    style={{
                        justifyContent: 'center',
                        alignItems: 'center',
                        flex: 1,
                    }}>
                    <ActivityIndicator color={cl_light} size="large" />
                </View>
            ) : showResult ? (
                <ModalResult
                    action={() => navigation.goBack()}
                    visible={true}
                    score={((100 / data.length) * score).toFixed()}
                />
            ) : (
                <>
                    <ProgressBar
                        width={progressAnim}
                        title={`${currentQuestionIndex + 1} / ${data.length}`}
                    />

                    <ModelZero
                        data={data[currentQuestionIndex]}
                        optionDisabled={optionDisabled}
                        handleValidate={handleValidate}
                        currentOptionSelected={currentOptionSelected}
                        correctOption={correctOption}
                        loading={loadImage}
                        onLoad={() => setLoadImage(false)}
                    />
                    {renderNextButton()}
                </>
            )}
        </SafeAreaView>
    )
}
