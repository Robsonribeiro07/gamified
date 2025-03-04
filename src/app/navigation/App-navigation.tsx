import { createNativeStackNavigator } from '@react-navigation/native-stack'
import ProfilePage from '../screens/profile'
import { DefaultLayout } from '@/components/layout/default-layout'
import ShopPage from '../screens/Shop'

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

      <Stack.Screen name="Shop">
        {() => (
          <DefaultLayout>
            <ShopPage />
          </DefaultLayout>
        )}
      </Stack.Screen>
    </Stack.Navigator>
  )
}
