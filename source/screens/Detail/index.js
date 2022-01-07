import React, { useState } from 'react'
import { StyleSheet, SafeAreaView } from 'react-native'
import { HeaderDetail, ImageDetail, TextView, ButtonPlay } from '../../components'
import colors from '../../assets/colors'
import sizes from '../../assets/sizes'

const Detail = ({ navigation, route }) => {
    const { data } = route.params
    const [loading, setLoading] = useState(true)

    return (
        <SafeAreaView style={styles.container}>
            <HeaderDetail title="Detail Kata" action={() => navigation.goBack()} />
            <ImageDetail source={data.image} loading={loading} onLoad={() => setLoading(false)} />
            <TextView textEn={data.wordEn} textId={data.wordId} />
            <ButtonPlay text={data.wordEn} />
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.primary,
        paddingHorizontal: sizes.s24,
    },
})

export default Detail
