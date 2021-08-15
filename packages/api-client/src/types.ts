/* eslint-disable camelcase */
export type TODO = unknown;

export type Settings = {
  api: {
    url: string;
  };
};

export type Endpoints = TODO;

export type BillingAddress = TODO;

export type Cart = TODO;

export type CartItem = TODO;

export type Category = TODO;

export type Coupon = TODO;

export type Product = {
  product_id: string;
  name: string;
  price: string;
  beer_id: string;
  image_url: string;
  type: string;
  slug: string;
  size: string;
  brewer: string;
  country: string;
};

export type Facet = {
  data?: {
    products?: Product[];
  };
};

export type FacetSearchCriteria = TODO;

export type Order = TODO;

export type OrderItem = TODO;

export type ProductFilter = TODO;

export type Review = TODO;

export type ReviewItem = TODO;

export type User = TODO;

export type UserBillingAddress = TODO;

export type UserBillingAddressItem = TODO;

export type UserBillingAddressSearchCriteria = TODO;

export type UserShippingAddress = TODO;

export type UserShippingAddressItem = TODO;

export type UserShippingAddressSearchCriteria = TODO;

export type ShippingAddress = TODO;

export type ShippingMethod = TODO;

export type ShippingProvider = TODO;

export type Wishlist = TODO;

export type WishlistItem = TODO;
