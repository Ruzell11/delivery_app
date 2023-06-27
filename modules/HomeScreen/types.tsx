export interface RestoData {
  attributes: {
    id: string;
    title: string;
    featuredCategory: string;
    description: string;
    restaurants: {
      data: RestaurantData[];
    };
  };
}
export interface FeaturedRowSectionProps {
  title: string;
  featuredCategory: string;
  description: string;
  id: string;
  restaurants: RestaurantData[];
}

export interface RestaurantData {
  attributes: {
    id: string;
    url: string;
    location: string;
    title: string;
    ratings: string;
    imageRestaurant: {
      data: ImageUrlProps[];
    };
  };
}

export interface ImageUrlProps {
  attributes: {
    url: string;
    name: string;
  };
}

export interface RestaurantCardProps {
  title: string;
  ratings: string;
  location: string;
  imageUrl: any;
}
