import React from 'react'
import { render, screen, waitFor } from '@testing-library/react-native'
import { usePathname, useRouter } from 'expo-router'
import { ProtectRouter } from './protected.route'

jest.mock('expo-router', () => ({
  useRouter: jest.fn(),
  usePathname: jest.fn(),
}))

describe('ProtectedRoute', () => {
  it('should redirect to Auth when not authenticated ', async () => {
    const { Text } = require('react-native')

    const replaceMock = jest.fn()

    ;(usePathname as jest.Mock).mockReturnValue('/Shop')
    ;(useRouter as jest.Mock).mockReturnValue({
      replace: replaceMock,
    })

    render(
      <ProtectRouter isAuthenticated={false}>
        <Text>ProtectedRoute</Text>
      </ProtectRouter>,
    )

    await waitFor(() => {
      expect(replaceMock).toHaveBeenCalledWith('/Auth')
    })
  })

  it('should not render not authenticated user', async () => {
    const replaceMock = jest.fn()
    const { Text } = require('react-native')

    ;(usePathname as jest.Mock).mockReturnValue('/Shop')
    ;(useRouter as jest.Mock).mockReturnValue({
      replace: replaceMock,
    })

    let isAuthenticated = false

    const { rerender } = render(
      <ProtectRouter isAuthenticated={isAuthenticated}>
        <Text>ProtectedRoute</Text>
      </ProtectRouter>,
    )

    await waitFor(() => {
      expect(screen.getByTestId('loading')).toBeOnTheScreen()
    })

    isAuthenticated = true

    rerender(
      <ProtectRouter isAuthenticated={isAuthenticated}>
        <Text>ProtectedRoute</Text>
      </ProtectRouter>,
    )
    await waitFor(() => {
      expect(screen.getByText('ProtectedRoute')).toBeOnTheScreen()
    })
  })
})
