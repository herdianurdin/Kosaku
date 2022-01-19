import { Dimensions } from 'react-native'

const width = Dimensions.get('window').width
const height = Dimensions.get('window').height

const s6 = (width / 68.5) | 0
const s8 = (width / 51.375) | 0
const s12 = (width / 34.25) | 0
const s16 = (width / 25.6875) | 0
const s18 = (width / 22.833333333) | 0
const s20 = (width / 20.55) | 0
const s24 = (width / 17.125) | 0
const s32 = (width / 12.84375) | 0
const s48 = (width / 8.5625) | 0
const s64 = (width / 6.421875) | 0
const s96 = (width / 4.28125) | 0

const sSplash = (width / 2.055) | 0
const sBanner = width - s64
const sButton = width - s96

const sCardWidth = width - s48
const sCardHeight = (sCardWidth / 4) * 3

const sLists = height - ((width / 1.5) | 0)

export {
    s6,
    s8,
    s12,
    s16,
    s18,
    s20,
    s24,
    s32,
    s48,
    s64,
    s96,
    sSplash,
    sBanner,
    sButton,
    sCardWidth,
    sCardHeight,
    sLists,
}
