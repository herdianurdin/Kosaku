import React, { memo } from 'react'
import { StyleSheet, View, Modal } from 'react-native'
import { HeaderDetail, ImageDetail, TextView, ButtonPlay } from '..'
import colors from '../../assets/colors'
import sizes from '../../assets/sizes'

const DetailWord = (props) => {
    const { dataWord, imageLoading, setImageLoading, actionClose, visible } = props

    return (
        <Modal animationType="fade" transparent={true} visible={visible}>
            <View style={styles.container}>
                <HeaderDetail title="Detail Kata" action={actionClose} />
                <ImageDetail source={dataWord.image} loading={imageLoading} onLoad={() => setImageLoading(false)} />
                <TextView textEn={dataWord.wordEn} textId={dataWord.wordId} />
                <ButtonPlay text={dataWord.wordEn} />
            </View>
        </Modal>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.primary,
        paddingHorizontal: sizes.s24,
    },
})

export default memo(DetailWord)
