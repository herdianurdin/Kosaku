import React from 'react'
import { SafeAreaView, Text } from 'react-native'
import { centerLayout, font48 } from '../../assets/styles'
import FastImage from 'react-native-fast-image'
import { sBanner } from '../../assets/sizes'
import { cl_light } from '../../assets/colors'
import { ButtonMain } from '../../components'

export default function Home({ navigation }) {
    return (
        <SafeAreaView style={centerLayout}>
            <Text style={{ ...font48, color: cl_light }}>Kosaku</Text>
            <FastImage
                source={require('../../assets/images/banner.webp')}
                style={{ width: sBanner, height: sBanner }}
            />
            <ButtonMain
                title="Berlatih"
                action={() => navigation.navigate('Exercise')}
            />
            <ButtonMain
                title="Lihat Kosakata"
                action={() => navigation.navigate('Dictionary')}
            />
        </SafeAreaView>
    )
}
