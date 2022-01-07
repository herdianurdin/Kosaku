import React from 'react'
import { StyleSheet, SafeAreaView, Text } from 'react-native'
import { ButtonMain } from '../../components'
import FastImage from 'react-native-fast-image'
import colors from '../../assets/colors'
import sizes from '../../assets/sizes'

const Home = ({ navigation }) => {
    return (
        <SafeAreaView style={styles.container}>
            <Text style={styles.title}>Kosaku</Text>
            <FastImage style={styles.imageBanner} source={require('../../assets/images/banner.webp')} />
            <ButtonMain title="Berlatih" action={() => navigation.navigate('Quiz')} />
            <ButtonMain title="Lihat Kosakata" action={() => navigation.navigate('Dictionary')} />
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
    title: {
        fontFamily: 'bold',
        fontSize: sizes.s48,
        color: colors.light,
    },
    imageBanner: {
        width: sizes.imageBanner,
        height: sizes.imageBanner,
    },
})

export default Home
