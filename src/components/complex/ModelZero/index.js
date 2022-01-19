import React, { memo } from 'react'
import ImageDetail from '../ImageDetail'
import ButtonOption from '../../base/ButtonOption'
import { cl_danger, cl_dark, cl_grass, cl_light } from '../../../assets/colors'

export default memo(function ModelZero({
    data,
    optionDisabled,
    handleValidate,
    currentOptionSelected,
    correctOption,
    loading,
    onLoad,
}) {
    const validateAnswer = selectedOption => {
        const correctOption = data.correctOption
        const isCorrect = selectedOption == correctOption

        handleValidate(isCorrect, selectedOption, correctOption)
    }

    const renderOptions = () => {
        return (
            <>
                {data.options.map((option, key) => {
                    const myOption = data.options.indexOf(option)

                    return (
                        <ButtonOption
                            key={key.toString()}
                            disabled={optionDisabled}
                            title={option}
                            action={() => validateAnswer(myOption)}
                            bgColor={
                                myOption == correctOption
                                    ? cl_grass
                                    : myOption == currentOptionSelected
                                    ? cl_danger
                                    : cl_light
                            }
                            color={
                                myOption == correctOption ||
                                myOption == currentOptionSelected
                                    ? cl_light
                                    : cl_dark
                            }
                        />
                    )
                })}
            </>
        )
    }

    return (
        <>
            <ImageDetail
                source={data.image}
                loading={loading}
                onLoad={onLoad}
                title={data.question}
                lang={data.language}
            />
            {renderOptions()}
        </>
    )
})
