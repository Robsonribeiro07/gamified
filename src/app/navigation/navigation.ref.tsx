import { createNavigationContainerRef } from '@react-navigation/native'
import { RootDefault } from './Root-navigator'

export const navigationRef = createNavigationContainerRef<RootDefault>()

export function navigate<RouteName extends keyof RootDefault>(
  name: RouteName,
  params?: RootDefault[RouteName],
) {
  if (navigationRef.isReady()) {
    navigationRef.navigate(name, params)
  }
}
