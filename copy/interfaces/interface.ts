interface DataLayeredNavigationProps {
  city: string|null,
  district: string|null,
  ward: string|null,
  home_direction: string|null,
  price_range: RangeValue,
  area_range: RangeValue,
  bed_room_number: RangeValue,
  title: string|null,
  name: string|null,
  page: number|null,
  limit: number|null,
  slug: string|null,
  sort_by: AdSellLeaseSortType
  type2: string|null,
  type1: string|null,
  type_slug: string|null,
  parent_slug: string|null,
  child_slug: string|null
}

interface RangeValue {
  max: number;
  min: number;
}


interface AdSellLeasesListProps {
  node: {
    id: string
    title: string,
    slug: string,
    created_at: string,
    updated_at: string,
    view_count: number,
    like_status: boolean,
    price: {
      unit: string
      value: string
    },
    avatar: {
      alt_text: string
      src: string
      description: string
    },
    address: {
      text: string,
      ward: string,
      district: string,
      city: string
    },
    area: {
      unit: string
      value: string
    }
  }
}

type ProjectListProps = {
  node: {
    id: string
    price: string,
    name: string,
    land_area: string,
    slug: string,
    created_at: string,
    updated_at: string,
    view_count: number,
    address: {
      text: string,
      ward: string,
      district: string,
      city: string
    },
    cover_image: string,
    intro_content: string
  }
}


type AdSellLeaseSortType = {
  time?: "newest" | "oldest",
  price?: "low_to_high" | "high_to_low",
  view?: "low_to_high" | "high_to_low",
  rate?: "high_to_low"
}

export {
  DataLayeredNavigationProps,
  AdSellLeasesListProps,
  ProjectListProps
};
