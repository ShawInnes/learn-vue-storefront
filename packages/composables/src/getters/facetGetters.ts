import {
  FacetsGetters,
  FacetSearchResult,
  AgnosticCategoryTree,
  AgnosticGroupedFacet,
  AgnosticPagination,
  AgnosticSort,
  AgnosticBreadcrumb,
  AgnosticFacet
} from '@vue-storefront/core';
import type { Facet, FacetSearchCriteria } from '@learnvuestorefront/api';
import { Product } from '@learnvuestorefront/api';

// eslint-disable-next-line @typescript-eslint/no-unused-vars
function getAll(
  params: FacetSearchResult<Facet>,
  criteria?: FacetSearchCriteria
): AgnosticFacet[] {
  return [];
}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
function getGrouped(
  params: FacetSearchResult<Facet>,
  criteria?: FacetSearchCriteria
): AgnosticGroupedFacet[] {
  return [];
}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
function getSortOptions(params: FacetSearchResult<Facet>): AgnosticSort {
  return {
    options: [],
    selected: ''
  };
}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
function getCategoryTree(
  params: FacetSearchResult<Facet>
): AgnosticCategoryTree {
  return {
    label: '',
    slug: '',
    items: null,
    isCurrent: false,
    count: 0
  };
}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
function getProducts(searchData: any): Product[] {
  console.log('facetGetters.getProducts');
  return searchData.data?.products || [];
}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
function getPagination(params: FacetSearchResult<Facet>): AgnosticPagination {
  return {
    currentPage: 1,
    totalPages: 1,
    totalItems: 1,
    itemsPerPage: 10,
    pageOptions: []
  };
}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
function getBreadcrumbs(
  params: FacetSearchResult<Facet>
): AgnosticBreadcrumb[] {
  return [];
}

export const facetGetters: FacetsGetters<Facet, FacetSearchCriteria> = {
  getSortOptions,
  getGrouped,
  getAll,
  getProducts,
  getCategoryTree,
  getBreadcrumbs,
  getPagination
};
