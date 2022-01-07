import * as React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { Splash, Home, Dictionary, Detail, Quiz } from '../screens'

const Stack = createNativeStackNavigator()

const Router = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator screenOptions={{ headerShown: false }}>
                <Stack.Screen name="Splash" component={Splash} />
                <Stack.Screen name="Home" component={Home} />
                <Stack.Screen name="Dictionary" component={Dictionary} />
                <Stack.Screen name="Detail" component={Detail} />
                <Stack.Screen name="Quiz" component={Quiz} />
            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default Router
