import React, { useState } from 'react'
import { SafeAreaView } from 'react-native'
import { container } from '../../assets/styles'
import {
    HeaderDetail,
    CardImage,
    DetailWord,
    ButtonPlay,
} from '../../components'

export default function Detail({ navigation, route }) {
    const { data } = route.params
    const [loading, setLoading] = useState(true)

    return (
        <SafeAreaView
            style={{
                ...container,
            }}>
            <HeaderDetail action={() => navigation.goBack()} />
            <CardImage
                source={data.image}
                loading={loading}
                onLoad={() => setLoading(false)}
            />
            <DetailWord wordEn={data.wordEn} wordId={data.wordId} />
            <ButtonPlay text={data.wordEn} />
        </SafeAreaView>
    )
}
