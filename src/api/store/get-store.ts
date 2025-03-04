// import baseApiUser from '@/lib/user/axios'
import axios from 'axios'

interface getStoreProps {
  limit?: number
  page: number
}

type getStoreResponse = {
  id: string
  itemName: string
  valor: number
  estoque: number
}[]

export async function getStore({
  limit,
  page,
}: getStoreProps): Promise<getStoreResponse> {
  const response = await axios.get(
    `https://67c760b4c19eb8753e7994bc.mockapi.io/store?page=${page}&limit=${limit}`,
  )

  return response.data
}
export async function getStoreTotal(): Promise<getStoreResponse> {
  const response = await axios.get(
    `https://67c760b4c19eb8753e7994bc.mockapi.io/store`,
  )

  return response.data
}
