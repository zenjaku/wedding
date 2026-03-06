import type { HeroDetails, ImageCarousel } from '@/types/types'

export const DEFAULT_VALUES: [HeroDetails, ...HeroDetails[]] = [
  {
    id: 1,
    header: 'The Wedding of',
    groom_name: 'Groom',
    bride_name: 'Bride',
    wedding_date: new Date('2026-03-06T09:00:00'),
    image_url: 'https://images.pexels.com/photos/1043902/pexels-photo-1043902.jpeg',
  },
]

export const DEFAULT_IMAGES: [ImageCarousel, ...ImageCarousel[]] = [
  {
    id: 1,
    image_url: 'https://images.pexels.com/photos/19314464/pexels-photo-19314464.jpeg',
    title: 'Couple photo 1',
  },
  {
    id: 2,
    image_url: 'https://images.pexels.com/photos/27689664/pexels-photo-27689664.jpeg',
    title: 'Couple photo 2',
  },
  {
    id: 3,
    image_url: 'https://images.pexels.com/photos/15343604/pexels-photo-15343604.jpeg',
    title: 'Couple photo 3',
  },
]
