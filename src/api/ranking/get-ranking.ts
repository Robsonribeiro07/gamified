// import baseApiUser from '@/lib/user/axios'
import axios from 'axios'

interface getRankingProps {
  limit?: number
  page: number
}

type getRankingResponse = {
  id: string
  ranking: number
  matricula: number
  coins: number
  name: string
}[]

export async function getRanking({
  limit,
  page,
}: getRankingProps): Promise<getRankingResponse> {
  const response = await axios.get(
    `https://67c9ffee102d684575c43300.mockapi.io/Ranking?sortBy=ranking&order=asc&page=${page}&limit=${limit}`,
  )

  return response.data
}
export async function getRankingTotal(): Promise<getRankingResponse> {
  const response = await axios.get(
    `https://67c9ffee102d684575c43300.mockapi.io/Ranking`,
  )

  return response.data
}
