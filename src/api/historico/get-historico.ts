// import baseApiUser from '@/lib/user/axios'
import { typeCardItems } from '@/components/history/card-item-history'
import axios from 'axios'

interface GetHistoricoProps {
  limit?: number
  page: number
}

type dataHistoricoType = keyof typeof typeCardItems

type GetHistoricoResponsse = {
  id: string
  type: dataHistoricoType
  title: string
  description: string
  reason: string
  data: number
}[]

export async function getHistorico({
  limit,
  page,
}: GetHistoricoProps): Promise<GetHistoricoResponsse> {
  const response = await axios.get(
    `https://67c9ffee102d684575c43300.mockapi.io/historico?page=${page}&limit=${limit}`,
  )

  return response.data
}
export async function getHistoricoTotal(): Promise<GetHistoricoResponsse> {
  const response = await axios.get(
    `https://67c9ffee102d684575c43300.mockapi.io/historico`,
  )

  return response.data
}
