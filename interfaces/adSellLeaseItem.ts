export type AdSellLeaseItem = {
  id: string
  title?: string
  name?: string
  description: string
  slug: string
  updated_at: string
  created_at: string
  view_count: number
  price: {
    unit: string
    value: string
  }|string
  user?:string
  avatar?: {
    alt_text: string
    src: string
    description: string
  }
  address: {
    text: string
    ward: string
    district: string
    city: string
  }
  area?: {
    unit: string
    value: string
  }
  land_area?: string
  intro_content?: string
  cover_image?: string
  image: ImageProp[]
  type?: {
    type1: string
    type2: string
    text: string
  }
  status?: string
  project?: string
  seo_title: string
  seo_description: string
  floor_number?: string
  living_room_number?: number
  bed_room_number?: number
  toilet_room_number?: number
  gara_number?: number
  material?: {
    id: string
    text: string
  }
  home_direction?: {
    text?:string
  }
  balcony_direction?: {
    text?:string
  }
  like_status?:boolean
  front_width?:string
  road_width?:string
  is_basement?: number
  juridical_type?: {
    text?:string
  }
  is_car_into_home?: number
  is_corner?: number
  is_elevator?: number
  furniture?: string
  length?: string
  width?: string
  year_built?: string
  map?: {
    lat: string
    lng: string
  },
  google_map_latitude?: string
  google_map_longitude?: string
  position_content?: string
  infrastructure_content?: string
  video?: string
  contact?: {
    image: string
    name: string
    address: string
    mobile: string
    phone: string
    email: string
  }
}

interface ImageProp {
  alt_text: string
  description: string
  title: string
  src: string
}
