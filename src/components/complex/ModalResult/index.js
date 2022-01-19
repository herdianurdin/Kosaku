import React, { memo } from 'react'
import { View, Text, Modal } from 'react-native'
import ButtonMain from '../../base/ButtonMain'
import { cl_light } from '../../../assets/colors'
import { s16, s24 } from '../../../assets/sizes'
import { centerLayout, font32, font64 } from '../../../assets/styles'

export default memo(function ModalResult({ action, score, visible }) {
    return (
        <Modal animationType="fade" transparent={true} visible={visible}>
            <View style={centerLayout}>
                <Text
                    style={{
                        ...font32,
                        color: cl_light,
                        textAlign: 'center',
                        marginBottom: s16,
                    }}>
                    Kamu Mendapatkan Nilai
                </Text>
                <Text
                    style={{
                        ...font64,
                        color: cl_light,
                        marginBottom: s24,
                    }}>
                    {score}
                </Text>
                <ButtonMain title="Selesai" action={action} valid={true} />
            </View>
        </Modal>
    )
})
