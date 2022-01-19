import React, { memo } from 'react'
import { Text, View } from 'react-native'
import { cl_dark, cl_light, cl_muted } from '../../../assets/colors'
import { s24 } from '../../../assets/sizes'
import { font16, font20, card, paddingButton } from '../../../assets/styles'

export default memo(function DetailWord({ wordEn, wordId }) {
    return (
        <View
            style={{
                ...card,
                ...paddingButton,
                backgroundColor: cl_light,
                marginHorizontal: s24,
            }}>
            <Text style={{ ...font20, color: cl_dark }}>{wordEn}</Text>
            <Text style={{ ...font16, color: cl_muted }}>{wordId}</Text>
        </View>
    )
})
