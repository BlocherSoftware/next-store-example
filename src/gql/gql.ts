/* eslint-disable */
import * as types from './graphql';



/**
 * Map of all GraphQL operations in the project.
 *
 * This map has several performance disadvantages:
 * 1. It is not tree-shakeable, so it will include all operations in the project.
 * 2. It is not minifiable, so the string of a GraphQL query will be multiple times inside the bundle.
 * 3. It does not support dead code elimination, so it will add unused operations.
 *
 * Therefore it is highly recommended to use the babel or swc plugin for production.
 */
const documents = {
    "query CategoriesBySlug($slug: String!) {\n  category(slug: $slug) {\n    products {\n      ...ProductListItem\n    }\n  }\n}": types.CategoriesBySlugDocument,
    "query CategoryList {\n  categories {\n    data {\n      id\n      name\n      slug\n    }\n  }\n}": types.CategoryListDocument,
    "query CollectionList {\n  collections {\n    data {\n      id\n      name\n      slug\n    }\n  }\n}": types.CollectionListDocument,
    "query CollectionBySlug($slug: String!) {\n  collection(slug: $slug) {\n    products {\n      ...ProductListItem\n    }\n  }\n}": types.CollectionBySlugDocument,
    "query ProductBySlug($slug: String!) {\n  product(slug: $slug) {\n    ...ProductDetails\n  }\n}": types.ProductBySlugDocument,
    "fragment ProductDetails on Product {\n  description\n  images {\n    url\n    alt\n  }\n  name\n  price\n  rating\n  reviews {\n    author\n    createdAt\n    description\n    email\n    id\n    product {\n      name\n    }\n    rating\n    title\n  }\n  categories {\n    name\n  }\n}": types.ProductDetailsFragmentDoc,
    "fragment ProductListItem on Product {\n  slug\n  name\n  price\n  images {\n    alt\n    url\n  }\n  categories {\n    name\n  }\n}": types.ProductListItemFragmentDoc,
    "query ProductListRelated {\n  products(take: 4, skip: 1) {\n    data {\n      ...ProductListItem\n    }\n  }\n}": types.ProductListRelatedDocument,
    "query ProductSearch($search: String!) {\n  products(search: $search) {\n    meta {\n      total\n    }\n    data {\n      ...ProductListItem\n    }\n  }\n}": types.ProductSearchDocument,
    "query ProductList($take: Int!, $skip: Int) {\n  products(take: $take, skip: $skip) {\n    meta {\n      count\n      total\n    }\n    data {\n      ...ProductListItem\n    }\n  }\n}": types.ProductListDocument,
};

/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "query CategoriesBySlug($slug: String!) {\n  category(slug: $slug) {\n    products {\n      ...ProductListItem\n    }\n  }\n}"): typeof import('./graphql').CategoriesBySlugDocument;
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "query CategoryList {\n  categories {\n    data {\n      id\n      name\n      slug\n    }\n  }\n}"): typeof import('./graphql').CategoryListDocument;
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "query CollectionList {\n  collections {\n    data {\n      id\n      name\n      slug\n    }\n  }\n}"): typeof import('./graphql').CollectionListDocument;
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "query CollectionBySlug($slug: String!) {\n  collection(slug: $slug) {\n    products {\n      ...ProductListItem\n    }\n  }\n}"): typeof import('./graphql').CollectionBySlugDocument;
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "query ProductBySlug($slug: String!) {\n  product(slug: $slug) {\n    ...ProductDetails\n  }\n}"): typeof import('./graphql').ProductBySlugDocument;
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "fragment ProductDetails on Product {\n  description\n  images {\n    url\n    alt\n  }\n  name\n  price\n  rating\n  reviews {\n    author\n    createdAt\n    description\n    email\n    id\n    product {\n      name\n    }\n    rating\n    title\n  }\n  categories {\n    name\n  }\n}"): typeof import('./graphql').ProductDetailsFragmentDoc;
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "fragment ProductListItem on Product {\n  slug\n  name\n  price\n  images {\n    alt\n    url\n  }\n  categories {\n    name\n  }\n}"): typeof import('./graphql').ProductListItemFragmentDoc;
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "query ProductListRelated {\n  products(take: 4, skip: 1) {\n    data {\n      ...ProductListItem\n    }\n  }\n}"): typeof import('./graphql').ProductListRelatedDocument;
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "query ProductSearch($search: String!) {\n  products(search: $search) {\n    meta {\n      total\n    }\n    data {\n      ...ProductListItem\n    }\n  }\n}"): typeof import('./graphql').ProductSearchDocument;
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "query ProductList($take: Int!, $skip: Int) {\n  products(take: $take, skip: $skip) {\n    meta {\n      count\n      total\n    }\n    data {\n      ...ProductListItem\n    }\n  }\n}"): typeof import('./graphql').ProductListDocument;


export function graphql(source: string) {
  return (documents as any)[source] ?? {};
}
