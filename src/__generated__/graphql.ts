/* eslint-disable */
import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
};

export type FilterBy = {
  field: Scalars['String'];
  order: Order;
  value: Scalars['String'];
};

export type Mutation = {
  __typename?: 'Mutation';
  createProduct?: Maybe<Product>;
  createTask?: Maybe<Task>;
  deleteProduct?: Maybe<Product>;
  deleteTask?: Maybe<Task>;
  updateProduct?: Maybe<Product>;
  updateTask?: Maybe<Task>;
};


export type MutationCreateProductArgs = {
  product: ProductInput;
};


export type MutationCreateTaskArgs = {
  task: TaskInput;
};


export type MutationDeleteProductArgs = {
  id: Scalars['ID'];
};


export type MutationDeleteTaskArgs = {
  id: Scalars['ID'];
};


export type MutationUpdateProductArgs = {
  product: ProductUpdateInput;
};


export type MutationUpdateTaskArgs = {
  task: TaskUpdateInput;
};

export enum Order {
  Asc = 'ASC',
  Desc = 'DESC',
  Eq = 'EQ'
}

export type Product = {
  __typename?: 'Product';
  color?: Maybe<Scalars['String']>;
  height?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['ID']>;
  imagePath?: Maybe<Scalars['String']>;
  inDelivery?: Maybe<Scalars['Int']>;
  inStock?: Maybe<Scalars['Int']>;
  length?: Maybe<Scalars['Int']>;
  model?: Maybe<Scalars['String']>;
  title?: Maybe<Scalars['String']>;
  width?: Maybe<Scalars['Int']>;
};

export type ProductInDemand = {
  __typename?: 'ProductInDemand';
  amount: Scalars['Int'];
  product: Product;
};

export type ProductInDemandInput = {
  amount: Scalars['Int'];
  product: Scalars['ID'];
};

export type ProductInput = {
  color: Scalars['String'];
  height?: InputMaybe<Scalars['Int']>;
  imagePath?: InputMaybe<Scalars['String']>;
  inDelivery?: InputMaybe<Scalars['Int']>;
  inStock?: InputMaybe<Scalars['Int']>;
  length?: InputMaybe<Scalars['Int']>;
  model?: InputMaybe<Scalars['String']>;
  title: Scalars['String'];
  width?: InputMaybe<Scalars['Int']>;
};

export type ProductUpdateInput = {
  color?: InputMaybe<Scalars['String']>;
  height?: InputMaybe<Scalars['Int']>;
  id: Scalars['ID'];
  imagePath?: InputMaybe<Scalars['String']>;
  inDelivery?: InputMaybe<Scalars['Int']>;
  inStock?: InputMaybe<Scalars['Int']>;
  length?: InputMaybe<Scalars['Int']>;
  model?: InputMaybe<Scalars['String']>;
  title?: InputMaybe<Scalars['String']>;
  width?: InputMaybe<Scalars['Int']>;
};

export type Query = {
  __typename?: 'Query';
  getAllProducts?: Maybe<Array<Maybe<Product>>>;
  getFilteredProducts?: Maybe<Array<Maybe<Product>>>;
  getProduct?: Maybe<Product>;
  getSortedProducts?: Maybe<Array<Maybe<Product>>>;
  getTask?: Maybe<Task>;
  getTasks?: Maybe<Array<Maybe<Task>>>;
};


export type QueryGetFilteredProductsArgs = {
  filterBy: Array<InputMaybe<FilterBy>>;
  sortBy?: InputMaybe<Array<InputMaybe<SortBy>>>;
};


export type QueryGetProductArgs = {
  id: Scalars['ID'];
};


export type QueryGetSortedProductsArgs = {
  filterBy?: InputMaybe<Array<InputMaybe<FilterBy>>>;
  sortBy: Array<InputMaybe<SortBy>>;
};


export type QueryGetTaskArgs = {
  id: Scalars['ID'];
};

export type SortBy = {
  field: Scalars['String'];
  order: Order;
};

export type Task = {
  __typename?: 'Task';
  entryDate?: Maybe<Scalars['String']>;
  finishDate?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['ID']>;
  instructions?: Maybe<Scalars['String']>;
  products?: Maybe<Array<Maybe<ProductInDemand>>>;
  title?: Maybe<Scalars['String']>;
};

export type TaskInput = {
  entryDate: Scalars['String'];
  finishDate: Scalars['String'];
  instructions?: InputMaybe<Scalars['String']>;
  products: Array<InputMaybe<ProductInDemandInput>>;
  title: Scalars['String'];
};

export type TaskUpdateInput = {
  entryDate?: InputMaybe<Scalars['String']>;
  finishDate?: InputMaybe<Scalars['String']>;
  id: Scalars['ID'];
  instructions?: InputMaybe<Scalars['String']>;
  products?: InputMaybe<Array<InputMaybe<ProductInDemandInput>>>;
  title?: InputMaybe<Scalars['String']>;
};

export type GetTasksQueryVariables = Exact<{ [key: string]: never; }>;


export type GetTasksQuery = { __typename?: 'Query', getTasks?: Array<{ __typename?: 'Task', title?: string | null, id?: string | null, entryDate?: string | null, finishDate?: string | null, instructions?: string | null, products?: Array<{ __typename?: 'ProductInDemand', amount: number, product: { __typename?: 'Product', title?: string | null, width?: number | null, model?: string | null, length?: number | null, inStock?: number | null, inDelivery?: number | null, imagePath?: string | null, id?: string | null, height?: number | null, color?: string | null } } | null> | null } | null> | null };


export const GetTasksDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"getTasks"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"getTasks"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"entryDate"}},{"kind":"Field","name":{"kind":"Name","value":"finishDate"}},{"kind":"Field","name":{"kind":"Name","value":"instructions"}},{"kind":"Field","name":{"kind":"Name","value":"products"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"amount"}},{"kind":"Field","name":{"kind":"Name","value":"product"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"width"}},{"kind":"Field","name":{"kind":"Name","value":"model"}},{"kind":"Field","name":{"kind":"Name","value":"length"}},{"kind":"Field","name":{"kind":"Name","value":"inStock"}},{"kind":"Field","name":{"kind":"Name","value":"inDelivery"}},{"kind":"Field","name":{"kind":"Name","value":"imagePath"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"height"}},{"kind":"Field","name":{"kind":"Name","value":"color"}}]}}]}}]}}]}}]} as unknown as DocumentNode<GetTasksQuery, GetTasksQueryVariables>;