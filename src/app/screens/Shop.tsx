import { NavItems } from '@/components/home/nav/nav-button'
import { CardItems } from '@/components/shop/Card-items'
import { Navigation } from '@/components/shop/Navigation'
import { useGetStore } from '@/hooks/store/use-get-store'
import { ScrollView, Text, View } from 'react-native'

export default function ShopPage() {
  const { data } = useGetStore()

  return (
    <ScrollView
      className=" flex-1  pt-5 gap-10 w-[80%] mx-auto"
      contentContainerStyle={{ paddingTop: 10, gap: 10, paddingBottom: 30 }}
      showsVerticalScrollIndicator={false}
    >
      <NavItems Type="Shop" className="min-w-full h-[90] rounded-xl" />

      <View className="bg-headerColor p-3  rounded-xl flex-1 pb-10 gap-3">
        {data && data?.length > 0 ? (
          data.map((item) => (
            <CardItems
              key={item.id}
              itemName={item.itemName}
              price={item.valor}
              estoque={item.estoque}
            />
          ))
        ) : (
          <View className="items-center">
            <Text className="text-white">Nenhum item disponível</Text>
          </View>
        )}
      </View>
      <Navigation />
    </ScrollView>
  )
}
