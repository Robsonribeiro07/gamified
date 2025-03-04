import { createNativeStackNavigator } from '@react-navigation/native-stack'
import AuthPage from '../screens/Auth'

const Stack = createNativeStackNavigator()

export default function AuthNavigator() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen
        name="Login"
        component={AuthPage}
        options={{ title: 'Auth' }}
      />
    </Stack.Navigator>
  )
}
