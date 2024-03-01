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
    "mutation CartAddItem($id: ID!, $input: MutationCartAddItemInput!) {\n  cartAddItem(id: $id, input: $input) {\n    id\n  }\n}": types.CartAddItemDocument,
    "mutation CartChangeItemQuantity($id: ID!, $productId: ID!, $quantity: Int!) {\n  cartChangeItemQuantity(id: $id, productId: $productId, quantity: $quantity) {\n    id\n  }\n}": types.CartChangeItemQuantityDocument,
    "mutation CartFindOrCreate($id: ID, $input: MutationCartFindOrCreateInput!) {\n  cartFindOrCreate(id: $id, input: $input) {\n    id\n  }\n}": types.CartFindOrCreateDocument,
    "query CartGetById($id: ID!) {\n  cart(id: $id) {\n    id\n    items {\n      product {\n        id\n        name\n        images {\n          url\n          alt\n        }\n        price\n      }\n      quantity\n    }\n  }\n}": types.CartGetByIdDocument,
    "mutation CartRemoveItemFromCart($id: ID!, $productId: ID!) {\n  cartRemoveItem(id: $id, productId: $productId) {\n    id\n  }\n}": types.CartRemoveItemFromCartDocument,
    "query CategoriesBySlug($slug: String!) {\n  category(slug: $slug) {\n    name\n    description\n    products {\n      ...ProductListItem\n    }\n  }\n}": types.CategoriesBySlugDocument,
    "query CategoryList {\n  categories {\n    data {\n      id\n      name\n      slug\n    }\n  }\n}": types.CategoryListDocument,
    "query CollectionList {\n  collections {\n    data {\n      id\n      name\n      slug\n    }\n  }\n}": types.CollectionListDocument,
    "query CollectionBySlug($slug: String!) {\n  collection(slug: $slug) {\n    name\n    description\n    products {\n      ...ProductListItem\n    }\n  }\n}": types.CollectionBySlugDocument,
    "query ProductBySlug($slug: String!) {\n  product(slug: $slug) {\n    ...ProductDetails\n  }\n}": types.ProductBySlugDocument,
    "fragment ProductDetails on Product {\n  id\n  description\n  images {\n    url\n    alt\n  }\n  name\n  price\n  rating\n  reviews {\n    author\n  }\n  categories {\n    name\n  }\n}": types.ProductDetailsFragmentDoc,
    "fragment ProductListItem on Product {\n  slug\n  name\n  price\n  images {\n    alt\n    url\n  }\n  categories {\n    name\n  }\n}": types.ProductListItemFragmentDoc,
    "query ProductListRelated {\n  products(take: 4, skip: 1) {\n    data {\n      ...ProductListItem\n    }\n  }\n}": types.ProductListRelatedDocument,
    "query ProductSearch($search: String!) {\n  products(search: $search) {\n    meta {\n      total\n    }\n    data {\n      ...ProductListItem\n    }\n  }\n}": types.ProductSearchDocument,
    "query ProductList($take: Int!, $skip: Int, $orderBy: ProductSortBy, $order: SortDirection) {\n  products(take: $take, skip: $skip, orderBy: $orderBy, order: $order) {\n    meta {\n      count\n      total\n    }\n    data {\n      ...ProductListItem\n    }\n  }\n}": types.ProductListDocument,
    "query ReviewByProductSlug($slug: String!) {\n  product(slug: $slug) {\n    rating\n    reviews {\n      ...ReviewItem\n    }\n  }\n}": types.ReviewByProductSlugDocument,
    "mutation ReviewCreate($author: String!, $description: String!, $email: String!, $productId: ID!, $rating: Int!, $title: String!) {\n  reviewCreate(\n    author: $author\n    description: $description\n    email: $email\n    productId: $productId\n    rating: $rating\n    title: $title\n  ) {\n    id\n  }\n}": types.ReviewCreateDocument,
    "fragment ReviewItem on Review {\n  author\n  description\n  id\n  rating\n  title\n}": types.ReviewItemFragmentDoc,
};

/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "mutation CartAddItem($id: ID!, $input: MutationCartAddItemInput!) {\n  cartAddItem(id: $id, input: $input) {\n    id\n  }\n}"): typeof import('./graphql').CartAddItemDocument;
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "mutation CartChangeItemQuantity($id: ID!, $productId: ID!, $quantity: Int!) {\n  cartChangeItemQuantity(id: $id, productId: $productId, quantity: $quantity) {\n    id\n  }\n}"): typeof import('./graphql').CartChangeItemQuantityDocument;
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "mutation CartFindOrCreate($id: ID, $input: MutationCartFindOrCreateInput!) {\n  cartFindOrCreate(id: $id, input: $input) {\n    id\n  }\n}"): typeof import('./graphql').CartFindOrCreateDocument;
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "query CartGetById($id: ID!) {\n  cart(id: $id) {\n    id\n    items {\n      product {\n        id\n        name\n        images {\n          url\n          alt\n        }\n        price\n      }\n      quantity\n    }\n  }\n}"): typeof import('./graphql').CartGetByIdDocument;
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "mutation CartRemoveItemFromCart($id: ID!, $productId: ID!) {\n  cartRemoveItem(id: $id, productId: $productId) {\n    id\n  }\n}"): typeof import('./graphql').CartRemoveItemFromCartDocument;
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "query CategoriesBySlug($slug: String!) {\n  category(slug: $slug) {\n    name\n    description\n    products {\n      ...ProductListItem\n    }\n  }\n}"): typeof import('./graphql').CategoriesBySlugDocument;
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
export function graphql(source: "query CollectionBySlug($slug: String!) {\n  collection(slug: $slug) {\n    name\n    description\n    products {\n      ...ProductListItem\n    }\n  }\n}"): typeof import('./graphql').CollectionBySlugDocument;
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "query ProductBySlug($slug: String!) {\n  product(slug: $slug) {\n    ...ProductDetails\n  }\n}"): typeof import('./graphql').ProductBySlugDocument;
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "fragment ProductDetails on Product {\n  id\n  description\n  images {\n    url\n    alt\n  }\n  name\n  price\n  rating\n  reviews {\n    author\n  }\n  categories {\n    name\n  }\n}"): typeof import('./graphql').ProductDetailsFragmentDoc;
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
export function graphql(source: "query ProductList($take: Int!, $skip: Int, $orderBy: ProductSortBy, $order: SortDirection) {\n  products(take: $take, skip: $skip, orderBy: $orderBy, order: $order) {\n    meta {\n      count\n      total\n    }\n    data {\n      ...ProductListItem\n    }\n  }\n}"): typeof import('./graphql').ProductListDocument;
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "query ReviewByProductSlug($slug: String!) {\n  product(slug: $slug) {\n    rating\n    reviews {\n      ...ReviewItem\n    }\n  }\n}"): typeof import('./graphql').ReviewByProductSlugDocument;
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "mutation ReviewCreate($author: String!, $description: String!, $email: String!, $productId: ID!, $rating: Int!, $title: String!) {\n  reviewCreate(\n    author: $author\n    description: $description\n    email: $email\n    productId: $productId\n    rating: $rating\n    title: $title\n  ) {\n    id\n  }\n}"): typeof import('./graphql').ReviewCreateDocument;
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "fragment ReviewItem on Review {\n  author\n  description\n  id\n  rating\n  title\n}"): typeof import('./graphql').ReviewItemFragmentDoc;


export function graphql(source: string) {
  return (documents as any)[source] ?? {};
}
