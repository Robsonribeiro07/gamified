import { NavItems } from '@/components/home/nav/nav-button'
import { CardItems } from '@/components/shop/Card-items'
import { Navigation } from '@/components/shop/Navigation'
import { ContentSkeletonShop } from '@/components/shop/skeleton/content-skeleton-shop'
import { useGetStore } from '@/hooks/store/use-get-store'
import { ScrollView, Text, View } from 'react-native'

export default function ShopPage() {
  const { data, isFetching } = useGetStore()

  return (
    <ScrollView
      className=" flex-1  pt-5 gap-10 w-[80%] mx-auto"
      contentContainerStyle={{ paddingTop: 10, gap: 10, paddingBottom: 30 }}
      showsVerticalScrollIndicator={false}
    >
      <NavItems Type="Shop" className="min-w-full h-[90] rounded-xl" />

      <View className="bg-headerColor p-3  rounded-xl flex-1 pb-10 gap-3">
        {isFetching || !data ? (
          <ContentSkeletonShop />
        ) : !isFetching && data.length < 1 ? (
          <Text>nenhum item disponivel</Text>
        ) : (
          data.map((item) => (
            <CardItems
              key={item.id}
              itemName={item.itemName}
              price={item.Valor}
              estoque={item.Estoque}
            />
          ))
        )}
      </View>
      <Navigation />
    </ScrollView>
  )
}
