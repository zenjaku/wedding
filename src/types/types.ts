export type HeroDetails = {
  id: number
  header: string
  groom_name: string
  bride_name: string
  wedding_date: Date
  image_url: string
}

export type ImageCarousel = {
  id: number
  title: string
  description: string
  image_url: string
}

export type LoveStory = {
  id: number
  title: string
  description: string
  groom_ig: string
  bride_ig: string
  groom_image: string
  bride_image: string
}

export type Direction = {
  id: number
  title: string
  google_map: string
  image_url: string
}

export type WeddingDetails = {
  id: number
  title: string
  name: string
  location: string
  date: Date
}
