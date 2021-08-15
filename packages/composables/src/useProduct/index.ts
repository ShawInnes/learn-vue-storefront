import {
  Context,
  useProductFactory,
  UseProductFactoryParams
} from '@vue-storefront/core';
import type { Product } from '@learnvuestorefront/api';
import type { UseProductSearchParams as SearchParams } from '../types';

const params: UseProductFactoryParams<Product, SearchParams> = {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  productsSearch: async (context: Context, params) => {
    let data = await context.$learnvuestorefront.api.getProduct(params);

    if (params.id) {
      data = data.filter(function(el) {
        return el.product_id === Number(params.id);
      });
    }

    return data;
  }
};

export const useProduct = useProductFactory<Product, SearchParams>(params);
