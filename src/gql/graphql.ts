/* eslint-disable */
import type { DocumentTypeDecoration } from '@graphql-typed-document-node/core';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string; }
  String: { input: string; output: string; }
  Boolean: { input: boolean; output: boolean; }
  Int: { input: number; output: number; }
  Float: { input: number; output: number; }
  /** A date-time string at UTC, such as 2007-12-03T10:15:30Z, compliant with the `date-time` format outlined in section 5.6 of the RFC 3339 profile of the ISO 8601 standard for representation of dates and times using the Gregorian calendar. */
  DateTime: { input: unknown; output: unknown; }
  /** The `JSON` scalar type represents JSON values as specified by [ECMA-404](http://www.ecma-international.org/publications/files/ECMA-ST/ECMA-404.pdf). */
  JSON: { input: unknown; output: unknown; }
};

export type Cart = {
  id: Scalars['ID']['output'];
  items: Array<CartItem>;
};

export type CartItem = {
  product: Product;
  quantity: Scalars['Int']['output'];
};

export type CartItemInput = {
  productId: Scalars['String']['input'];
  quantity?: InputMaybe<Scalars['Int']['input']>;
};

export type Category = {
  description: Scalars['String']['output'];
  id: Scalars['ID']['output'];
  name: Scalars['String']['output'];
  products: Array<Product>;
  slug: Scalars['String']['output'];
};

export type CategoryList = {
  data: Array<Category>;
  meta: ListMeta;
};

export type Collection = {
  description: Scalars['String']['output'];
  id: Scalars['ID']['output'];
  name: Scalars['String']['output'];
  products: Array<Product>;
  slug: Scalars['String']['output'];
};

export type CollectionList = {
  data: Array<Collection>;
  meta: ListMeta;
};

export type ListMeta = {
  /** The total number of items matching the query */
  count: Scalars['Int']['output'];
  /** The total number of items in the database */
  total: Scalars['Int']['output'];
};

export type Mutation = {
  cartAddItem: Cart;
  cartChangeItemQuantity: Cart;
  cartComplete: Order;
  cartFindOrCreate: Cart;
  cartRemoveItem: Cart;
  reviewCreate: Cart;
};


export type MutationCartAddItemArgs = {
  id: Scalars['ID']['input'];
  input: MutationCartAddItemInput;
};


export type MutationCartChangeItemQuantityArgs = {
  id: Scalars['ID']['input'];
  productId: Scalars['ID']['input'];
  quantity: Scalars['Int']['input'];
};


export type MutationCartCompleteArgs = {
  cartId: Scalars['ID']['input'];
  userEmail: Scalars['String']['input'];
};


export type MutationCartFindOrCreateArgs = {
  id?: InputMaybe<Scalars['ID']['input']>;
  input: MutationCartFindOrCreateInput;
};


export type MutationCartRemoveItemArgs = {
  id: Scalars['ID']['input'];
  productId: Scalars['ID']['input'];
};


export type MutationReviewCreateArgs = {
  author: Scalars['String']['input'];
  description: Scalars['String']['input'];
  email: Scalars['String']['input'];
  productId: Scalars['ID']['input'];
  rating: Scalars['Int']['input'];
  title: Scalars['String']['input'];
};

export type MutationCartAddItemInput = {
  item: CartItemInput;
};

export type MutationCartFindOrCreateInput = {
  items?: InputMaybe<Array<CartItemInput>>;
};

export type Order = {
  createdAt: Scalars['DateTime']['output'];
  id: Scalars['ID']['output'];
  lines: Scalars['JSON']['output'];
  status: OrderStatus;
  totalAmount: Scalars['Int']['output'];
  updatedAt: Scalars['DateTime']['output'];
};

export type OrderList = {
  data: Array<Order>;
  meta: ListMeta;
};

export type OrderSortBy =
  | 'DEFAULT'
  | 'STATUS'
  | 'TOTAL';

export type OrderStatus =
  | 'CANCELLED'
  | 'CREATED'
  | 'FULFILLED'
  | 'PAID';

export type Product = {
  categories: Array<Category>;
  collections: Array<Collection>;
  description: Scalars['String']['output'];
  id: Scalars['ID']['output'];
  images: Array<ProductImage>;
  name: Scalars['String']['output'];
  price: Scalars['Int']['output'];
  rating?: Maybe<Scalars['Float']['output']>;
  reviews: Array<Review>;
  slug: Scalars['String']['output'];
};

export type ProductImage = {
  alt: Scalars['String']['output'];
  height: Scalars['Int']['output'];
  id: Scalars['ID']['output'];
  url: Scalars['String']['output'];
  width: Scalars['Int']['output'];
};

export type ProductList = {
  data: Array<Product>;
  meta: ListMeta;
};

export type ProductSortBy =
  | 'DEFAULT'
  | 'NAME'
  | 'PRICE'
  | 'RATING';

export type Query = {
  cart?: Maybe<Cart>;
  categories: CategoryList;
  category?: Maybe<Category>;
  collection?: Maybe<Collection>;
  collections: CollectionList;
  order?: Maybe<Order>;
  orders: OrderList;
  product?: Maybe<Product>;
  products: ProductList;
};


export type QueryCartArgs = {
  id: Scalars['ID']['input'];
};


export type QueryCategoriesArgs = {
  skip?: Scalars['Int']['input'];
  take?: Scalars['Int']['input'];
};


export type QueryCategoryArgs = {
  id?: InputMaybe<Scalars['ID']['input']>;
  slug?: InputMaybe<Scalars['String']['input']>;
};


export type QueryCollectionArgs = {
  id?: InputMaybe<Scalars['ID']['input']>;
  slug?: InputMaybe<Scalars['String']['input']>;
};


export type QueryCollectionsArgs = {
  skip?: Scalars['Int']['input'];
  take?: Scalars['Int']['input'];
};


export type QueryOrderArgs = {
  id: Scalars['ID']['input'];
};


export type QueryOrdersArgs = {
  email: Scalars['String']['input'];
  order?: SortDirection;
  orderBy?: OrderSortBy;
  skip?: Scalars['Int']['input'];
  take?: Scalars['Int']['input'];
};


export type QueryProductArgs = {
  id?: InputMaybe<Scalars['ID']['input']>;
  slug?: InputMaybe<Scalars['String']['input']>;
};


export type QueryProductsArgs = {
  order?: SortDirection;
  orderBy?: ProductSortBy;
  search?: InputMaybe<Scalars['String']['input']>;
  skip?: Scalars['Int']['input'];
  take?: Scalars['Int']['input'];
};

export type Review = {
  author: Scalars['String']['output'];
  createdAt: Scalars['DateTime']['output'];
  description: Scalars['String']['output'];
  email: Scalars['String']['output'];
  id: Scalars['ID']['output'];
  product: Product;
  rating: Scalars['Float']['output'];
  title: Scalars['String']['output'];
  updatedAt: Scalars['DateTime']['output'];
};

export type ReviewList = {
  data: Array<Review>;
  meta: ListMeta;
};

export type SortDirection =
  | 'ASC'
  | 'DESC';

export type CartAddItemMutationVariables = Exact<{
  id: Scalars['ID']['input'];
  input: MutationCartAddItemInput;
}>;


export type CartAddItemMutation = { cartAddItem: { id: string } };

export type CartChangeItemQuantityMutationVariables = Exact<{
  id: Scalars['ID']['input'];
  productId: Scalars['ID']['input'];
  quantity: Scalars['Int']['input'];
}>;


export type CartChangeItemQuantityMutation = { cartChangeItemQuantity: { id: string } };

export type CartCompleteMutationVariables = Exact<{
  cartId: Scalars['ID']['input'];
  userEmail: Scalars['String']['input'];
}>;


export type CartCompleteMutation = { cartComplete: { status: OrderStatus } };

export type CartFindOrCreateMutationVariables = Exact<{
  id?: InputMaybe<Scalars['ID']['input']>;
  input: MutationCartFindOrCreateInput;
}>;


export type CartFindOrCreateMutation = { cartFindOrCreate: { id: string } };

export type CartGetByIdQueryVariables = Exact<{
  id: Scalars['ID']['input'];
}>;


export type CartGetByIdQuery = { cart?: { id: string, items: Array<{ quantity: number, product: { id: string, name: string, description: string, price: number, images: Array<{ url: string, alt: string }> } }> } | null };

export type CartRemoveItemFromCartMutationVariables = Exact<{
  id: Scalars['ID']['input'];
  productId: Scalars['ID']['input'];
}>;


export type CartRemoveItemFromCartMutation = { cartRemoveItem: { id: string } };

export type CategoriesBySlugQueryVariables = Exact<{
  slug: Scalars['String']['input'];
}>;


export type CategoriesBySlugQuery = { category?: { name: string, description: string, products: Array<{ slug: string, name: string, price: number, rating?: number | null, images: Array<{ alt: string, url: string }>, categories: Array<{ name: string }> }> } | null };

export type CategoryListQueryVariables = Exact<{ [key: string]: never; }>;


export type CategoryListQuery = { categories: { data: Array<{ id: string, name: string, slug: string }> } };

export type CollectionListQueryVariables = Exact<{ [key: string]: never; }>;


export type CollectionListQuery = { collections: { data: Array<{ id: string, name: string, slug: string }> } };

export type CollectionBySlugQueryVariables = Exact<{
  slug: Scalars['String']['input'];
}>;


export type CollectionBySlugQuery = { collection?: { name: string, description: string, products: Array<{ slug: string, name: string, price: number, rating?: number | null, images: Array<{ alt: string, url: string }>, categories: Array<{ name: string }> }> } | null };

export type OrderByIdQueryVariables = Exact<{
  id: Scalars['ID']['input'];
}>;


export type OrderByIdQuery = { order?: { lines: unknown } | null };

export type OrdersByEmailQueryVariables = Exact<{
  email: Scalars['String']['input'];
}>;


export type OrdersByEmailQuery = { orders: { data: Array<{ id: string, status: OrderStatus, createdAt: unknown }> } };

export type ProductBySlugQueryVariables = Exact<{
  slug: Scalars['String']['input'];
}>;


export type ProductBySlugQuery = { product?: { id: string, description: string, name: string, price: number, rating?: number | null, images: Array<{ url: string, alt: string }>, reviews: Array<{ author: string }>, categories: Array<{ name: string }> } | null };

export type ProductDetailsFragment = { id: string, description: string, name: string, price: number, rating?: number | null, images: Array<{ url: string, alt: string }>, reviews: Array<{ author: string }>, categories: Array<{ name: string }> };

export type ProductListItemFragment = { slug: string, name: string, price: number, rating?: number | null, images: Array<{ alt: string, url: string }>, categories: Array<{ name: string }> };

export type ProductListRelatedQueryVariables = Exact<{ [key: string]: never; }>;


export type ProductListRelatedQuery = { products: { data: Array<{ slug: string, name: string, price: number, rating?: number | null, images: Array<{ alt: string, url: string }>, categories: Array<{ name: string }> }> } };

export type ProductSearchQueryVariables = Exact<{
  search: Scalars['String']['input'];
}>;


export type ProductSearchQuery = { products: { meta: { total: number }, data: Array<{ slug: string, name: string, price: number, rating?: number | null, images: Array<{ alt: string, url: string }>, categories: Array<{ name: string }> }> } };

export type ProductListQueryVariables = Exact<{
  take: Scalars['Int']['input'];
  skip?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<ProductSortBy>;
  order?: InputMaybe<SortDirection>;
}>;


export type ProductListQuery = { products: { meta: { count: number, total: number }, data: Array<{ slug: string, name: string, price: number, rating?: number | null, images: Array<{ alt: string, url: string }>, categories: Array<{ name: string }> }> } };

export type ReviewByProductSlugQueryVariables = Exact<{
  slug: Scalars['String']['input'];
}>;


export type ReviewByProductSlugQuery = { product?: { rating?: number | null, reviews: Array<{ author: string, description: string, id: string, rating: number, title: string }> } | null };

export type ReviewCreateMutationVariables = Exact<{
  author: Scalars['String']['input'];
  description: Scalars['String']['input'];
  email: Scalars['String']['input'];
  productId: Scalars['ID']['input'];
  rating: Scalars['Int']['input'];
  title: Scalars['String']['input'];
}>;


export type ReviewCreateMutation = { reviewCreate: { id: string } };

export type ReviewItemFragment = { author: string, description: string, id: string, rating: number, title: string };

export class TypedDocumentString<TResult, TVariables>
  extends String
  implements DocumentTypeDecoration<TResult, TVariables>
{
  __apiType?: DocumentTypeDecoration<TResult, TVariables>['__apiType'];

  constructor(private value: string, public __meta__?: Record<string, any>) {
    super(value);
  }

  toString(): string & DocumentTypeDecoration<TResult, TVariables> {
    return this.value;
  }
}
export const ProductDetailsFragmentDoc = new TypedDocumentString(`
    fragment ProductDetails on Product {
  id
  description
  images {
    url
    alt
  }
  name
  price
  rating
  reviews {
    author
  }
  categories {
    name
  }
}
    `, {"fragmentName":"ProductDetails"}) as unknown as TypedDocumentString<ProductDetailsFragment, unknown>;
export const ProductListItemFragmentDoc = new TypedDocumentString(`
    fragment ProductListItem on Product {
  slug
  name
  price
  images {
    alt
    url
  }
  categories {
    name
  }
  rating
}
    `, {"fragmentName":"ProductListItem"}) as unknown as TypedDocumentString<ProductListItemFragment, unknown>;
export const ReviewItemFragmentDoc = new TypedDocumentString(`
    fragment ReviewItem on Review {
  author
  description
  id
  rating
  title
}
    `, {"fragmentName":"ReviewItem"}) as unknown as TypedDocumentString<ReviewItemFragment, unknown>;
export const CartAddItemDocument = new TypedDocumentString(`
    mutation CartAddItem($id: ID!, $input: MutationCartAddItemInput!) {
  cartAddItem(id: $id, input: $input) {
    id
  }
}
    `) as unknown as TypedDocumentString<CartAddItemMutation, CartAddItemMutationVariables>;
export const CartChangeItemQuantityDocument = new TypedDocumentString(`
    mutation CartChangeItemQuantity($id: ID!, $productId: ID!, $quantity: Int!) {
  cartChangeItemQuantity(id: $id, productId: $productId, quantity: $quantity) {
    id
  }
}
    `) as unknown as TypedDocumentString<CartChangeItemQuantityMutation, CartChangeItemQuantityMutationVariables>;
export const CartCompleteDocument = new TypedDocumentString(`
    mutation CartComplete($cartId: ID!, $userEmail: String!) {
  cartComplete(cartId: $cartId, userEmail: $userEmail) {
    status
  }
}
    `) as unknown as TypedDocumentString<CartCompleteMutation, CartCompleteMutationVariables>;
export const CartFindOrCreateDocument = new TypedDocumentString(`
    mutation CartFindOrCreate($id: ID, $input: MutationCartFindOrCreateInput!) {
  cartFindOrCreate(id: $id, input: $input) {
    id
  }
}
    `) as unknown as TypedDocumentString<CartFindOrCreateMutation, CartFindOrCreateMutationVariables>;
export const CartGetByIdDocument = new TypedDocumentString(`
    query CartGetById($id: ID!) {
  cart(id: $id) {
    id
    items {
      product {
        id
        name
        description
        images {
          url
          alt
        }
        price
      }
      quantity
    }
  }
}
    `) as unknown as TypedDocumentString<CartGetByIdQuery, CartGetByIdQueryVariables>;
export const CartRemoveItemFromCartDocument = new TypedDocumentString(`
    mutation CartRemoveItemFromCart($id: ID!, $productId: ID!) {
  cartRemoveItem(id: $id, productId: $productId) {
    id
  }
}
    `) as unknown as TypedDocumentString<CartRemoveItemFromCartMutation, CartRemoveItemFromCartMutationVariables>;
export const CategoriesBySlugDocument = new TypedDocumentString(`
    query CategoriesBySlug($slug: String!) {
  category(slug: $slug) {
    name
    description
    products {
      ...ProductListItem
    }
  }
}
    fragment ProductListItem on Product {
  slug
  name
  price
  images {
    alt
    url
  }
  categories {
    name
  }
  rating
}`) as unknown as TypedDocumentString<CategoriesBySlugQuery, CategoriesBySlugQueryVariables>;
export const CategoryListDocument = new TypedDocumentString(`
    query CategoryList {
  categories {
    data {
      id
      name
      slug
    }
  }
}
    `) as unknown as TypedDocumentString<CategoryListQuery, CategoryListQueryVariables>;
export const CollectionListDocument = new TypedDocumentString(`
    query CollectionList {
  collections {
    data {
      id
      name
      slug
    }
  }
}
    `) as unknown as TypedDocumentString<CollectionListQuery, CollectionListQueryVariables>;
export const CollectionBySlugDocument = new TypedDocumentString(`
    query CollectionBySlug($slug: String!) {
  collection(slug: $slug) {
    name
    description
    products {
      ...ProductListItem
    }
  }
}
    fragment ProductListItem on Product {
  slug
  name
  price
  images {
    alt
    url
  }
  categories {
    name
  }
  rating
}`) as unknown as TypedDocumentString<CollectionBySlugQuery, CollectionBySlugQueryVariables>;
export const OrderByIdDocument = new TypedDocumentString(`
    query OrderById($id: ID!) {
  order(id: $id) {
    lines
  }
}
    `) as unknown as TypedDocumentString<OrderByIdQuery, OrderByIdQueryVariables>;
export const OrdersByEmailDocument = new TypedDocumentString(`
    query OrdersByEmail($email: String!) {
  orders(email: $email) {
    data {
      id
      status
      createdAt
    }
  }
}
    `) as unknown as TypedDocumentString<OrdersByEmailQuery, OrdersByEmailQueryVariables>;
export const ProductBySlugDocument = new TypedDocumentString(`
    query ProductBySlug($slug: String!) {
  product(slug: $slug) {
    ...ProductDetails
  }
}
    fragment ProductDetails on Product {
  id
  description
  images {
    url
    alt
  }
  name
  price
  rating
  reviews {
    author
  }
  categories {
    name
  }
}`) as unknown as TypedDocumentString<ProductBySlugQuery, ProductBySlugQueryVariables>;
export const ProductListRelatedDocument = new TypedDocumentString(`
    query ProductListRelated {
  products(take: 4, skip: 1) {
    data {
      ...ProductListItem
    }
  }
}
    fragment ProductListItem on Product {
  slug
  name
  price
  images {
    alt
    url
  }
  categories {
    name
  }
  rating
}`) as unknown as TypedDocumentString<ProductListRelatedQuery, ProductListRelatedQueryVariables>;
export const ProductSearchDocument = new TypedDocumentString(`
    query ProductSearch($search: String!) {
  products(search: $search) {
    meta {
      total
    }
    data {
      ...ProductListItem
    }
  }
}
    fragment ProductListItem on Product {
  slug
  name
  price
  images {
    alt
    url
  }
  categories {
    name
  }
  rating
}`) as unknown as TypedDocumentString<ProductSearchQuery, ProductSearchQueryVariables>;
export const ProductListDocument = new TypedDocumentString(`
    query ProductList($take: Int!, $skip: Int, $orderBy: ProductSortBy, $order: SortDirection) {
  products(take: $take, skip: $skip, orderBy: $orderBy, order: $order) {
    meta {
      count
      total
    }
    data {
      ...ProductListItem
    }
  }
}
    fragment ProductListItem on Product {
  slug
  name
  price
  images {
    alt
    url
  }
  categories {
    name
  }
  rating
}`) as unknown as TypedDocumentString<ProductListQuery, ProductListQueryVariables>;
export const ReviewByProductSlugDocument = new TypedDocumentString(`
    query ReviewByProductSlug($slug: String!) {
  product(slug: $slug) {
    rating
    reviews {
      ...ReviewItem
    }
  }
}
    fragment ReviewItem on Review {
  author
  description
  id
  rating
  title
}`) as unknown as TypedDocumentString<ReviewByProductSlugQuery, ReviewByProductSlugQueryVariables>;
export const ReviewCreateDocument = new TypedDocumentString(`
    mutation ReviewCreate($author: String!, $description: String!, $email: String!, $productId: ID!, $rating: Int!, $title: String!) {
  reviewCreate(
    author: $author
    description: $description
    email: $email
    productId: $productId
    rating: $rating
    title: $title
  ) {
    id
  }
}
    `) as unknown as TypedDocumentString<ReviewCreateMutation, ReviewCreateMutationVariables>;