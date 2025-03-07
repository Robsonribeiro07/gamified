import { CardItems } from '@/components/history/card-item-history'
import { Navigation } from '@/components/history/navigation'
import { ContentSkeletonHistorico } from '@/components/history/skeleton/content-skeleton-content'
import { NavigationSkeleton } from '@/components/history/skeleton/navigation-skeleton'
import { NavItems } from '@/components/home/nav/nav-button'
import { useGetHistorico } from '@/hooks/historico/use-get-historico'
import { ScrollView, View } from 'react-native'

export default function HistoryPage() {
  const { data, isFetching, nextPages } = useGetHistorico()

  return (
    <View className="flex-1">
      <ScrollView
        className=" flex-1 gap-10 w-full mx-auto"
        contentContainerStyle={{ paddingTop: 10, gap: 10, paddingBottom: 30 }}
        showsVerticalScrollIndicator={false}
      >
        <NavItems Type="Historico" className="min-w-full h-[90] rounded-xl" />

        <View className="bg-headerColor p-3  rounded-xl flex-1 pb-10 gap-3">
          {!data || isFetching ? (
            <ContentSkeletonHistorico />
          ) : (
            data?.map((item) => {
              return (
                <CardItems
                  type="Fined"
                  key={item.id}
                  titleLabel={item.title}
                  descriptionLabel={item.description}
                  reasonLabel={item.reason}
                  data={item.data}
                />
              )
            })
          )}
        </View>
        {/* <Navigation /> */}

        {nextPages.length > 0 ? <Navigation /> : <NavigationSkeleton />}
      </ScrollView>
    </View>
  )
}
