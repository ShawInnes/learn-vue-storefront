import { CustomQuery } from '@vue-storefront/core';

export async function getProduct(context, params, customQuery?: CustomQuery) {
  // Create URL object containing full endpoint URL
  const url = new URL('/beers', context.config.api.url);

  // params.id && url.searchParams.set('id', params.id);

  // Use axios to send a GET request
  const { data } = await context.client.get(url.href);

  // Return data from the API
  return data;
}
