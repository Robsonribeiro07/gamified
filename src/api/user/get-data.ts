// import baseApiUser from '@/lib/user/axios'
import axios from 'axios'

interface getUserDataProps {
  userId: number // Quando estiver um back userei token
}

export interface getUserDataResponse {
  id: number
  name: string
  coins: number
  cargo: string
  _id: string
}

export async function getUserData({
  userId,
}: getUserDataProps): Promise<getUserDataResponse> {
  const response = await axios.get(
    `https://67c760b4c19eb8753e7994bc.mockapi.io/user/${userId}`,
  )

  return response.data
}
