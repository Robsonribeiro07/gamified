import { View } from 'react-native'
import { TextWithFont } from '../default-components/Text-with-font'

import { IconsWithTouchOpacity } from '../default-components/Icons-with-opacity'
import { TextWithTouchOpactiy } from '../default-components/Text-with-opacity-enabled'
import { useStateNavigationStore } from '@/stores/store/use-state-navigation'
import { useGetStore } from '@/hooks/store/use-get-store'
export function Navigation() {
  const {
    nextPage,
    prevPage,
    isEndPage,
    isStartPage,
    handleChangePage,
    goEndPage,
    goStartPage,
  } = useStateNavigationStore()

  const { nextPages } = useGetStore()
  return (
    <View className="bg-headerColor w-[75%]  h-12 rounded-md mx-auto  flex-row items-center justify-around">
      <TextWithFont className="text-white/70 text-xl">Pagina</TextWithFont>

      <View className="flex-row items-center gap-1">
        {!isStartPage && (
          <IconsWithTouchOpacity name="chevrons-left" onPress={goStartPage} />
        )}

        <IconsWithTouchOpacity
          name="chevron-left"
          onPress={prevPage}
          disabled={isStartPage}
        />
        {nextPages?.map((page) => (
          <TextWithTouchOpactiy
            className="text-white text-lg"
            key={page}
            onPress={() => handleChangePage(page)}
          >
            {page}
          </TextWithTouchOpactiy>
        ))}
        <IconsWithTouchOpacity
          name="chevron-right"
          onPress={nextPage}
          disabled={isEndPage}
        />

        {!isEndPage && (
          <IconsWithTouchOpacity
            name="chevrons-right"
            onPress={goStartPage}
            onPressIn={goEndPage}
          />
        )}
      </View>
    </View>
  )
}
