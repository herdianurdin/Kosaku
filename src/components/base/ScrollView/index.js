import React, { memo } from 'react'
import { FlatList } from 'react-native'

export default memo(function ScrollView({ children }) {
    return (
        <FlatList
            data={[]}
            keyExtractor={() => 'key'}
            renderItem={null}
            showsVerticalScrollIndicator={false}
            ListHeaderComponent={<>{children}</>}
        />
    )
})
