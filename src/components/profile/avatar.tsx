import { ImageProps, Text } from 'react-native'
import { Avatar, AvatarFallback, AvatarImage } from '../ui/Avatar'
import { cn } from '@/lib/utils'

export function AvatarProfile({ className }: ImageProps) {
  return (
    <Avatar
      alt="avatar profile"
      className={cn(`rounded bg-backgroundColor  h-16 w-16`, className)}
    >
      <AvatarImage
        source={require('@/assets/icons/image.png')}
        className="rounded"
      />
      <AvatarFallback>
        <Text>RB</Text>
      </AvatarFallback>
    </Avatar>
  )
}
