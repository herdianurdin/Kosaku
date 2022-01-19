import firestore from '@react-native-firebase/firestore'
import React, { useCallback, useEffect, useMemo, useState } from 'react'
import { ActivityIndicator, FlatList, SafeAreaView } from 'react-native'
import { cl_light } from '../../assets/colors'
import { sLists } from '../../assets/sizes'
import { container } from '../../assets/styles'
import {
    ButtonList,
    HeaderDictionary,
    ScrollView,
    SearchBar,
} from '../../components'

export default function Dictionary({ navigation }) {
    const [keyword, setKeyword] = useState('')
    const [data, setData] = useState([])
    const [allData, setAllData] = useState([])
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        const getDataCollection = firestore()
            .collection('Dictionary')
            .orderBy('wordId', 'asc')
            .onSnapshot(docSnapshot => {
                const dataDoc = docSnapshot.docs.map(doc =>
                    Object.assign({ id: doc.id }, doc.data()),
                )

                setAllData(dataDoc)
                setData(dataDoc)
                setLoading(false)
            })

        return () => getDataCollection()
    }, [])

    const renderItem = useCallback(
        ({ item }) => (
            <ButtonList
                title={item.wordId}
                action={() => navigation.navigate('Detail', { data: item })}
            />
        ),
        [],
    )

    const keyExtractor = useCallback(item => item.id, [])

    const handleSearch = useMemo(
        () => text => {
            setKeyword(text)

            setData(
                !text
                    ? allData
                    : allData.filter(item =>
                          item.wordId
                              .toLowerCase()
                              .includes(text.toLowerCase()),
                      ),
            )
        },
        [keyword, allData],
    )

    const handleClearValue = () => {
        setKeyword('')
        setData(allData)
    }

    return (
        <SafeAreaView style={[container]}>
            <ScrollView>
                <HeaderDictionary action={() => navigation.goBack()} />
                <SearchBar
                    value={keyword}
                    onChangeText={handleSearch}
                    clearValue={handleClearValue}
                />
                {loading ? (
                    <ActivityIndicator
                        size="large"
                        color={cl_light}
                        style={{
                            height: sLists,
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
            </ScrollView>
        </SafeAreaView>
    )
}
