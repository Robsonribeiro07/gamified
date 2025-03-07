import { NavItems } from '@/components/home/nav/nav-button'
import { Header } from '@/components/ranking/header'
import { Navigation } from '@/components/ranking/navigation'
import { RankingCard } from '@/components/ranking/ranking'

import { useGetRanking } from '@/hooks/ranking/use-get-ranking'
import { ScrollView, View } from 'react-native'

export default function RankingPage() {
  const { data, isFetching } = useGetRanking()

  return (
    <ScrollView
      className=" flex-1 gap-10 w-full mx-auto"
      contentContainerStyle={{ paddingTop: 10, gap: 10, paddingBottom: 30 }}
      showsVerticalScrollIndicator={false}
    >
      <NavItems Type="Ranking" className="min-w-full h-[90] rounded-xl" />

      <View className="gap-3">
        <Header />

        {data?.map((item) => {
          return (
            <RankingCard
              key={item.id}
              ranking={item.ranking}
              name={item.name}
              coins={item.coins}
              matricula={item.matricula}
            />
          )
        })}
      </View>
      <Navigation />
    </ScrollView>
  )
}
