import { NavItems } from '@/components/home/nav/nav-button'
import { CardItems } from '@/components/shop/Card-items'
import { Navigation } from '@/components/shop/Navigation'
import { ScrollView, View } from 'react-native'

export default function ShopPage() {
  return (
    <ScrollView
      className=" flex-1  pt-5 gap-10 w-[80%] mx-auto"
      contentContainerStyle={{ paddingTop: 10, gap: 10, paddingBottom: 30 }}
      showsVerticalScrollIndicator={false}
    >
      <NavItems Type="Shop" className="min-w-full h-[90] rounded-xl" />

      <View className="bg-headerColor p-3  rounded-xl flex-1 pb-10 gap-3">
        <CardItems />
        <CardItems />
        <CardItems />
        <CardItems />
      </View>
      <Navigation />
    </ScrollView>
  )
}
