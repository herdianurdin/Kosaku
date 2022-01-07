import React, { memo } from 'react'
import { View, Text, Modal } from 'react-native'
import { ButtonMain } from '..'
import colors from '../../assets/colors'
import sizes from '../../assets/sizes'

const ModalResult = (props) => {
    const { action, score, visible } = props

    return (
        <Modal animationType="fade" transparent={true} visible={visible}>
            <View
                style={{
                    flex: 1,
                    justifyContent: 'center',
                    alignItems: 'center',
                    backgroundColor: colors.primary,
                }}
            >
                <Text
                    style={{
                        fontFamily: 'bold',
                        fontSize: sizes.s32,
                        color: colors.light,
                        textAlign: 'center',
                        marginBottom: sizes.s16,
                    }}
                >
                    Kamu Mendapatkan Nilai
                </Text>
                <Text
                    style={{
                        fontFamily: 'bold',
                        fontSize: sizes.s64,
                        color: colors.light,
                        marginBottom: sizes.s24,
                    }}
                >
                    {score}
                </Text>
                <ButtonMain title="Selesai" action={action} color={colors.light} backgroundColor={colors.grass} />
            </View>
        </Modal>
    )
}

export default memo(ModalResult)
