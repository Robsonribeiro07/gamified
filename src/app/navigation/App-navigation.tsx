import { createNativeStackNavigator } from '@react-navigation/native-stack'
import ProfilePage from '../screens/profile'
import { DefaultLayout } from '@/components/layout/default-layout'

const Stack = createNativeStackNavigator()

export default function AppNavigator() {
  return (
    <Stack.Navigator
      screenOptions={{ headerShown: false }}
      initialRouteName="Home"
    >
      <Stack.Screen name="Home">
        {() => (
          <DefaultLayout>
            <ProfilePage />
          </DefaultLayout>
        )}
      </Stack.Screen>
    </Stack.Navigator>
  )
}
