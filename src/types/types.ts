export type Wedding = {
  id: number
  header: string
  starts_at: Date
  groom_person_id: number
  bride_person_id: number
  hero_media_id: number
}

export type Venue = {
  id: number
  name: string
  map_url: string
}

export type MediaAsset = {
  id: number
  url: string
}

export type Person = {
  id: number
  display_name: string
  instagram_url: string
  image_media_id: number
}

export type CarouselSlide = {
  id: number
  title: string
  description: string
  image_media_id: number
}

export type LoveStory = {
  id: number
  wedding_id: number
  title: string
  description: string
  groom_person_id: number
  bride_person_id: number
}

export type Direction = {
  id: number
  label: string
  venue_id: number
  image_media_id: number
}

export type WeddingEvent = {
  id: number
  label: string
  venue_id: number
  starts_at_offset_minutes: number
}
