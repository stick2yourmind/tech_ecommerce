import { AxiosInstance } from 'axios'

// useAxiosFn types

export interface QueryCreateUpdateProduct{
  category: string
  description: string
  name: string
  photo: string
  price: number
  stock: number
}

export interface QueryRegisterUser{
  address: string,
  email: string,
  name: string,
  password: string,
  phone: number
}
export type QueryLoginUser = Pick<QueryRegisterUser, 'email' | 'password'>

export interface RequestConfigAxios<T>{
  data: T
}
export interface AxiosFetchParams<T>{
  axiosInstance:AxiosInstance,
  method: 'get' | 'post' | 'put' | 'delete',
  requestConfig?:RequestConfigAxios<T>,
  url: string
}

export interface ErrorDetailsAPIResponse{
  details?: string,
  message: string
}
export interface Product{
  _id: string
  category: string
  description: string
  name: string
  photo: string
  price: number
  stock: number
}
export interface RESDataGetAllProducts{
  products: Product[]
}
export interface SuccessfulAPIResponse<T>{
  data: T,
  error: false,
  statusCode: number
}
export type RESDataGetProductById = Product

export interface FailedAPIResponse{
  error: false
  error_details: ErrorDetailsAPIResponse,
  statusCode: number
}
export interface RESPONSEAPI<T>{
  data?: T,
  error: false,
  error_details?:ErrorDetailsAPIResponse
  statusCode: number
}
export type ReturnErrUseAxiosFn = string | false
export type ReturnLoadUseAxiosFn = boolean
export type CtrlUseAxiosFn = AbortController
export type ReturnUseAxiosFn<T> = (configObj: AxiosFetchParams<T>) => Promise<void>
export type ReturnUseAxiosFunction<T> = [
  FailedAPIResponse | SuccessfulAPIResponse <RESDataGetAllProducts> | SuccessfulAPIResponse<Product>,
  ReturnErrUseAxiosFn,
  ReturnLoadUseAxiosFn,
  ReturnUseAxiosFn<T>
]
