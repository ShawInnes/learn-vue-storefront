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

/*
[dev:theme]   product_id: 157042,
[dev:theme]   name: 'Miller High Life',
[dev:theme]   size: '12  ×  Can 473 ml',
[dev:theme]   price: '25.25',
[dev:theme]   beer_id: 157,
[dev:theme]   image_url: 'http://www.thebeerstore.ca/sites/default/files/styles/brand_hero/public/sbs/brand/0157H_0.png?itok=z9DkLrNN',
[dev:theme]   category: 'Value',
[dev:theme]   abv: '4.6',
[dev:theme]   style: 'N/A',
[dev:theme]   attributes: 'N/A',
[dev:theme]   type: 'Lager',
[dev:theme]   brewer: 'Molson',
[dev:theme]   country: 'Canada',
[dev:theme]   on_sale: false,
[dev:theme]   dir: '/beers',
[dev:theme]   path: '/beers/miller-high-life',
[dev:theme]   slug: 'miller-high-life',
[dev:theme]   updatedAt: '2020-12-11T15:40:35.000Z'
*/

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
