import React, { useState, useCallback, useEffect } from 'react'
import { StyleSheet, SafeAreaView, View, FlatList, ActivityIndicator } from 'react-native'
import { HeaderDictionary, SearchBar, ButtonList } from '../../components'
import colors from '../../assets/colors'
import sizes from '../../assets/sizes'
import firestore from '@react-native-firebase/firestore'

const Dictionary = ({ navigation }) => {
    const [keyword, setKeyword] = useState('')
    const [data, setData] = useState([])
    const [allData, setAllData] = useState([])
    const [loading, setLoading] = useState(true)

    const renderItem = useCallback(({ item }) => {
        return <ButtonList title={item.wordId} action={() => navigation.navigate('Detail', { data: item })} />
    }, [])

    const keyExtractor = useCallback((item) => item.id, [])

    const handleSearch = (text) => {
        setKeyword(text)
        setData(!text ? allData : allData.filter((item) => item.wordId.toLowerCase().includes(text.toLowerCase())))
    }

    useEffect(() => {
        const getDataCollection = firestore()
            .collection('Dictionary')
            .orderBy('wordId', 'asc')
            .onSnapshot((docSnapshot) => {
                const dataDoc = docSnapshot.docs.map((doc) => Object.assign({ id: doc.id }, doc.data()))

                setAllData(dataDoc)
                setData(dataDoc)
                setLoading(false)
            })

        return () => getDataCollection()
    }, [])

    return (
        <SafeAreaView style={styles.container}>
            <HeaderDictionary title="Lihat Kosakata" action={() => navigation.goBack()} />
            <View style={styles.mainContainer}>
                <SearchBar placeholder="Cari kata ..." value={keyword} onChangeText={handleSearch} />
                {loading ? (
                    <ActivityIndicator
                        size="large"
                        color={colors.light}
                        style={{
                            height: sizes.heightList,
                            alignItems: 'center',
                            justifyContent: 'center',
                        }}
                    />
                ) : (
                    <FlatList
                        data={data}
                        renderItem={renderItem}
                        keyExtractor={keyExtractor}
                        showsVerticalScrollIndicator={false}
                        maxToRenderPerBatch={16}
                        initialNumToRender={16}
                    />
                )}
            </View>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.primary,
    },
    mainContainer: {
        flex: 1,
    },
})

export default Dictionary
