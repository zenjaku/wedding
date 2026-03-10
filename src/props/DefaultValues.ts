import type {
  Wedding,
  WeddingEvent,
  Venue,
  Direction,
  MediaAsset,
  Person,
  CarouselSlide,
  LoveStory,
} from '@/types/types'

export const DEFAULT_MEDIA_ASSETS: [MediaAsset, ...MediaAsset[]] = [
  { id: 1, url: 'https://images.pexels.com/photos/1043902/pexels-photo-1043902.jpeg' }, // hero
  { id: 2, url: 'https://images.pexels.com/photos/19314464/pexels-photo-19314464.jpeg' }, // carousel 1
  { id: 3, url: 'https://images.pexels.com/photos/27689664/pexels-photo-27689664.jpeg' }, // carousel 2
  { id: 4, url: 'https://images.pexels.com/photos/15343604/pexels-photo-15343604.jpeg' }, // carousel 3
  { id: 5, url: 'https://images.pexels.com/photos/1043471/pexels-photo-1043471.jpeg' }, // groom
  { id: 6, url: 'https://images.pexels.com/photos/1393477/pexels-photo-1393477.jpeg' }, // bride
  { id: 7, url: 'https://upload.wikimedia.org/wikipedia/commons/6/68/Rtcmalolosjf.JPG' }, // direction
  { id: 8, url: 'https://images.pexels.com/photos/230290/pexels-photo-230290.jpeg' }, // carousel bg
]

export const DEFAULT_PEOPLE: [Person, ...Person[]] = [
  {
    id: 1,
    display_name: 'Groom',
    instagram_url: 'https://www.instagram.com/Groom',
    image_media_id: 5,
  },
  {
    id: 2,
    display_name: 'Bride',
    instagram_url: 'https://www.instagram.com/Bride',
    image_media_id: 6,
  },
]

export const DEFAULT_WEDDING: Wedding = {
  id: 1,
  header: 'The Wedding of',
  starts_at: new Date('2026-05-28T09:00:00'),
  groom_person_id: 1,
  bride_person_id: 2,
  hero_media_id: 1,
}

export const DEFAULT_CAROUSEL_SLIDES: [CarouselSlide, ...CarouselSlide[]] = [
  {
    id: 1,
    image_media_id: 2,
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed fermentum.',
    title: 'Couple photo 1',
  },
  {
    id: 2,
    image_media_id: 3,
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed fermentum.',
    title: 'Couple photo 2',
  },
  {
    id: 3,
    image_media_id: 4,
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed fermentum.',
    title: 'Couple photo 3',
  },
]

export const DEFAULT_LOVESTORY: [LoveStory, ...LoveStory[]] = [
  {
    id: 1,
    wedding_id: 1,
    title: 'Lorem Ipsum',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed fermentum.',
    groom_person_id: 1,
    bride_person_id: 2,
  },
]

export const DEFAULT_DIRECTION: [Direction, ...Direction[]] = [
  {
    id: 1,
    label: 'RTC-Malolos',
    venue_id: 1,
    image_media_id: 7,
  },
]

export const DEFAULT_VENUES: [Venue, ...Venue[]] = [
  {
    id: 1,
    name: 'RTC - Malolos Bulacan',
    map_url: 'https://maps.app.goo.gl/W2QpeUSQMkVZB1nF7',
  },
  {
    id: 2,
    name: 'All you can eat buffet restaurant',
    map_url: 'https://maps.app.goo.gl/W2QpeUSQMkVZB1nF7',
  },
]

export const DEFAULT_WEDDING_EVENTS: [WeddingEvent, ...WeddingEvent[]] = [
  {
    id: 1,
    label: 'Wedding Details',
    venue_id: 1,
    starts_at_offset_minutes: 0,
  },
  {
    id: 2,
    label: 'Reception Details',
    venue_id: 2,
    starts_at_offset_minutes: 180,
  },
]
