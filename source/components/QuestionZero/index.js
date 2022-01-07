import React, { memo } from 'react'
import { View } from 'react-native'
import { ImageQuiz, ButtonOption } from '..'
import colors from '../../assets/colors'

const QuestionZero = (props) => {
    const { data, optionDisable, handleValidate, currentOptionSelected, correctOption, loading, onLoad } = props

    const validateAnswer = (selectedOption) => {
        const correctOption = data.correctOption
        const isCorrect = selectedOption == correctOption

        handleValidate(isCorrect, selectedOption, correctOption)
    }

    const renderOptions = () => {
        return (
            <View>
                {data.options.map((option, key) => {
                    const myOption = data.options.indexOf(option)

                    return (
                        <ButtonOption
                            key={key.toString()}
                            disabled={optionDisable}
                            title={option}
                            action={() => validateAnswer(myOption)}
                            backgroundColor={
                                myOption == correctOption
                                    ? colors.grass
                                    : myOption == currentOptionSelected
                                    ? colors.danger
                                    : colors.light
                            }
                            color={
                                myOption == correctOption || myOption == currentOptionSelected
                                    ? colors.light
                                    : colors.dark
                            }
                        />
                    )
                })}
            </View>
        )
    }

    return (
        <View>
            <ImageQuiz
                source={{
                    uri: `https://firebasestorage.googleapis.com/v0/b/kosaku-a0d36.appspot.com/o/images%2F${data.image}?alt=media&token`,
                }}
                loading={loading}
                onLoad={onLoad}
                title={data.question}
                lang={data.language}
            />
            {renderOptions()}
        </View>
    )
}

export default memo(QuestionZero)
