import { cl_dark, cl_light, cl_primary } from '../colors'
import { s32, s48, s16, s24, s20, s64, s12, s8 } from '../sizes'

const container = {
    flex: 1,
    backgroundColor: cl_primary,
}

const centerLayout = {
    flex: 1,
    backgroundColor: cl_primary,
    alignItems: 'center',
    justifyContent: 'center',
}

const splitLayout = {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: s24,
    marginTop: s16,
}

const shadow = {
    shadowColor: cl_dark,
    shadowOffset: {
        width: 1,
        height: 1,
    },
    shadowOpacity: 0.4,
    shadowRadius: 1,
    elevation: 4,
}

const card = {
    borderRadius: s16,
    marginBottom: s16,
    ...shadow,
}

const font16 = {
    fontFamily: 'bold',
    fontSize: s16,
}

const font20 = {
    fontFamily: 'bold',
    fontSize: s20,
}

const font32 = {
    fontFamily: 'bold',
    fontSize: s32,
}

const font48 = {
    fontFamily: 'bold',
    fontSize: s48,
}

const font64 = {
    fontFamily: 'bold',
    fontSize: s64,
}

const paddingButton = {
    paddingHorizontal: s24,
    paddingVertical: s12,
}

const buttonIcon = {
    backgroundColor: cl_light,
    padding: s8,
    borderRadius: s48,
    ...shadow,
}

export {
    buttonIcon,
    container,
    centerLayout,
    splitLayout,
    shadow,
    card,
    font16,
    font20,
    font32,
    font48,
    font64,
    paddingButton,
}
