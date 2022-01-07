import React, { useState, useEffect } from 'react'
import { StyleSheet, SafeAreaView, View, Animated, ActivityIndicator } from 'react-native'
import { ScrollView } from 'react-native-virtualized-view'
import { ButtonMain, ModalResult, Progress } from '../../components'
import QuestionZero from '../../components/QuestionZero'
import colors from '../../assets/colors'
import sizes from '../../assets/sizes'
import firestore from '@react-native-firebase/firestore'

let Sound = require('react-native-sound')
Sound.setCategory('Playback')

const Quiz = ({ navigation }) => {
    const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0)
    const [currentAnswerIndex, setCurrentAnswerIndex] = useState(0)
    const [currentOptionSelected, setCurrentOptionSelected] = useState(null)
    const [correctOption, setCorrectOption] = useState(null)
    const [optionDisable, setOptionDisable] = useState(false)
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
        setOptionDisable(true)

        if (isCorrect) {
            setScore(score + 1)
            let correctSound = new Sound('correct.mp3', Sound.MAIN_BUNDLE, () => {
                correctSound.setVolume(0.5)
                correctSound.play(() => correctSound.release())
            })
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
            setOptionDisable(false)
            setShowNextButton(false)
            setLoadImage(true)
        }
    }

    const renderNextButton = () => {
        return showNextButton ? (
            <ButtonMain
                action={handleNextButton}
                title={currentQuestionIndex + 1 == data.length ? 'Lihat Hasil' : 'Selanjutnya'}
            />
        ) : null
    }

    useEffect(() => {
        const getQuestions = firestore()
            .collection('Questions')
            .onSnapshot((docSnapshot) => {
                const dataDoc = docSnapshot.docs.map((doc) => Object.assign({ id: doc.id }, doc.data()))
                const dataRandom = dataDoc.sort((a, b) => 0.5 - Math.random())

                setData(dataRandom.slice(0, 10))
                setLoading(false)
            })

        return () => getQuestions()
    }, [])

    return (
        <SafeAreaView style={styles.container}>
            {loading ? (
                <View style={{ justifyContent: 'center', alignItems: 'center', flex: 1 }}>
                    <ActivityIndicator color={colors.light} size="large" />
                </View>
            ) : showResult ? (
                <ModalResult
                    action={() => navigation.goBack()}
                    visible={true}
                    score={((100 / data.length) * score).toFixed()}
                />
            ) : (
                <ScrollView showsVerticalScrollIndicator={false}>
                    <Progress
                        widthProgress={progressAnim}
                        textProgress={`${currentQuestionIndex + 1} / ${data.length}`}
                    />
                    <QuestionZero
                        data={data[currentQuestionIndex]}
                        optionDisable={optionDisable}
                        handleValidate={handleValidate}
                        currentOptionSelected={currentOptionSelected}
                        correctOption={correctOption}
                        loading={loadImage}
                        onLoad={() => setLoadImage(false)}
                    />
                    <View style={styles.buttonMain}>{renderNextButton()}</View>
                </ScrollView>
            )}
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: sizes.s16,
        paddingHorizontal: sizes.s24,
        backgroundColor: colors.primary,
    },
    buttonMain: {
        alignItems: 'center',
        marginTop: sizes.s16,
    },
})

export default Quiz
