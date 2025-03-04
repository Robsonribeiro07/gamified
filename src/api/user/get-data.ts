import baseApiUser from '@/lib/user/axios'
import { AxiosError } from 'axios'

interface getUserDataProps {
  userId: number // Quando estiver um back userei token
}

interface getUserDataResponse {
  id: number
  nome: string
  coins: number
  cargo: string
  _id: string
}
interface Error {
  message: string
}
export async function getUserData({
  userId,
}: getUserDataProps): Promise<getUserDataResponse | Error> {
  try {
    const response = await baseApiUser.get(`users/${userId}`)

    return response.data
  } catch (error) {
    if (error instanceof AxiosError) {
      return {
        message: error.message,
      }
    }
  }

  return {
    message: 'Houve um erro interno',
  }
}
