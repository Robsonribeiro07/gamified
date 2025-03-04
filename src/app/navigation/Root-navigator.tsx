import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import AppNavigator from './App-navigation'
import AuthNavigator from './Auth-navigation'
import { navigationRef } from './navigation.ref'

export type RootDefault = {
  Auth: undefined
  App: undefined
}
const RootStack = createStackNavigator<RootDefault>()

export default function DefaultRootStack() {
  return (
    <NavigationContainer ref={navigationRef}>
      <RootStack.Navigator screenOptions={{ headerShown: false }}>
        <RootStack.Screen component={AppNavigator} name="App" />
        <RootStack.Screen component={AuthNavigator} name="Auth" />
      </RootStack.Navigator>
    </NavigationContainer>
  )
}
