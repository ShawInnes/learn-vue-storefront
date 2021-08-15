import {
  AgnosticMediaGalleryItem,
  AgnosticAttribute,
  AgnosticPrice,
  ProductGetters
} from '@vue-storefront/core';
import type { Product, ProductFilter } from '@learnvuestorefront/api';

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export const getProductName = (product: Product): string => product?.name || 'Product\'s name';

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export const getProductId = (product: Product): string => product?.product_id || '1';

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export const getProductSlug = (product: Product): string => product.slug || 'product/' + getProductId(product);

// eslint-disable-next-line @typescript-eslint/no-unused-vars
function getPrice(product: Product): AgnosticPrice {
  const price = {
    regular: Number(product.price),
    special: Number(product.price)
  };
  return price;
}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
function getGallery(product: Product): AgnosticMediaGalleryItem[] {
  return [
    {
      small: product?.image_url,
      normal: product?.image_url,
      big: product?.image_url
    }
  ];
}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export const getCoverImage = (product: Product): string => product.image_url || '';

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export function getProductFiltered(products: Product[], filters: ProductFilter): Product[] {
  if (!products) {
    return [];
  }
  return products;
}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
function getAttributes(
  products: Product[] | Product,
  filterByAttributeName?: string[]
): Record<string, AgnosticAttribute | string> {
  return {};
}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
function getDescription(product: Product): string {
  return product.size;
}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
function getCategoryIds(product: Product): string[] {
  return [];
}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
function getFormattedPrice(price: number): string {
  return price.toString();
}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
function getTotalReviews(product: Product): number {
  return 0;
}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
function getAverageRating(product: Product): number {
  return 0;
}

export const productGetters: ProductGetters<Product, ProductFilter> = {
  getName: getProductName,
  getSlug: getProductSlug,
  getPrice,
  getGallery,
  getCoverImage,
  getFiltered: getProductFiltered,
  getAttributes,
  getDescription,
  getCategoryIds,
  getId: getProductId,
  getFormattedPrice,
  getTotalReviews,
  getAverageRating
};
