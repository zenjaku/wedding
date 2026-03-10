import type {
  Direction,
  HeroDetails,
  ImageCarousel,
  LoveStory,
  WeddingDetails,
} from '@/types/types'

export const DEFAULT_VALUES: [HeroDetails, ...HeroDetails[]] = [
  {
    id: 1,
    header: 'The Wedding of',
    groom_name: 'Groom',
    bride_name: 'Bride',
    wedding_date: new Date('2026-05-28T09:00:00'),
    image_url: 'https://images.pexels.com/photos/1043902/pexels-photo-1043902.jpeg',
  },
]

export const DEFAULT_IMAGES: [ImageCarousel, ...ImageCarousel[]] = [
  {
    id: 1,
    image_url: 'https://images.pexels.com/photos/19314464/pexels-photo-19314464.jpeg',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed fermentum.',
    title: 'Couple photo 1',
  },
  {
    id: 2,
    image_url: 'https://images.pexels.com/photos/27689664/pexels-photo-27689664.jpeg',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed fermentum.',
    title: 'Couple photo 2',
  },
  {
    id: 3,
    image_url: 'https://images.pexels.com/photos/15343604/pexels-photo-15343604.jpeg',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed fermentum.',
    title: 'Couple photo 3',
  },
]

export const DEFAULT_LOVESTORY: [LoveStory, ...LoveStory[]] = [
  {
    id: 1,
    title: 'Lorem Ipsum',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed fermentum.',
    groom_ig: 'https://www.instagram.com/Groom',
    bride_ig: 'https://www.instagram.com/Bride',
    groom_image: 'https://images.pexels.com/photos/1043471/pexels-photo-1043471.jpeg',
    bride_image: 'https://images.pexels.com/photos/1393477/pexels-photo-1393477.jpeg',
  },
]

export const DEFAULT_DIRECTION: [Direction, ...Direction[]] = [
  {
    id: 1,
    title: 'RTC-Malolos',
    google_map: 'https://maps.app.goo.gl/W2QpeUSQMkVZB1nF7',
    image_url: 'https://upload.wikimedia.org/wikipedia/commons/6/68/Rtcmalolosjf.JPG',
  },
]

export const DEFAULT_WEDDING_DETAILS: [WeddingDetails, ...WeddingDetails[]] = [
  {
    id: 1,
    title: 'Wedding Details',
    name: 'RTC - Malolos Bulacan',
    location: 'https://maps.app.goo.gl/W2QpeUSQMkVZB1nF7',
    date: new Date('2026-03-06T09:00:00'),
  },
  {
    id: 2,
    title: 'Reception Details',
    name: 'All you can eat buffet restaurant',
    location: 'https://maps.app.goo.gl/W2QpeUSQMkVZB1nF7',
    date: new Date('2026-03-06T09:00:00'),
  },
]
