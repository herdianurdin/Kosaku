import React, { memo } from 'react'
import { TouchableOpacity, Text } from 'react-native'
import { cl_light, cl_dark } from '../../../assets/colors'
import { s16, s8, s20, s24 } from '../../../assets/sizes'
import { splitLayout, font20, card } from '../../../assets/styles'
import CardImage from '../../base/CardImage'
import Icon from 'react-native-vector-icons/Ionicons'
import { Speech } from '../../../utils'

export default memo(function ImageDetail({
    source,
    loading,
    onLoad,
    title,
    lang,
}) {
    return (
        <>
            <CardImage source={source} loading={loading} onLoad={onLoad} />
            <TouchableOpacity
                style={{
                    ...card,
                    ...splitLayout,
                    alignSelf: 'center',
                    backgroundColor: cl_light,
                    marginTop: -(s20 + s16),
                    paddingHorizontal: s16,
                    paddingVertical: s8,
                }}
                disabled={lang != 'en' ? true : false}
                onPress={() => Speech(title)}>
                {lang == 'en' ? (
                    <Icon
                        name="volume-high"
                        size={s24}
                        color={cl_dark}
                        style={{ marginRight: s8 }}
                    />
                ) : null}
                <Text
                    style={{
                        ...font20,
                        color: cl_dark,
                    }}>
                    {title}
                </Text>
            </TouchableOpacity>
        </>
    )
})
