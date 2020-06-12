/* prettier-ignore-start */
/* tslint:disable */
/* eslint-disable */

/* 该文件由 yapi-to-typescript 自动生成，请勿直接修改！！！ */

// @ts-ignore
// prettier-ignore
import { Method, RequestBodyType, ResponseBodyType, RequestConfig, RequestFunctionRestArgs, FileData, prepare } from 'yapi-to-typescript'
// @ts-ignore
import request from './request'

// makeRequest
function makeRequestRequired<TReqeustData, TResponseData, TRequestConfig extends RequestConfig>(
  requestConfig: TRequestConfig,
) {
  const req = function(requestData: TReqeustData, ...args: RequestFunctionRestArgs<typeof request>) {
    return request<TResponseData>(prepare(requestConfig, requestData), ...args)
  }
  req.requestConfig = requestConfig
  return req
}
function makeRequestOptional<TReqeustData, TResponseData, TRequestConfig extends RequestConfig>(
  requestConfig: TRequestConfig,
) {
  const req = function(requestData?: TReqeustData, ...args: RequestFunctionRestArgs<typeof request>) {
    return request<TResponseData>(prepare(requestConfig, requestData), ...args)
  }
  req.requestConfig = requestConfig
  return req
}
function makeRequest<TReqeustData, TResponseData, TRequestConfig extends RequestConfig>(requestConfig: TRequestConfig) {
  const optional = makeRequestOptional<TReqeustData, TResponseData, TRequestConfig>(requestConfig)
  const required = makeRequestRequired<TReqeustData, TResponseData, TRequestConfig>(requestConfig)
  return (requestConfig.requestDataOptional ? optional : required) as TRequestConfig['requestDataOptional'] extends true
    ? typeof optional
    : typeof required
}

// Request
export type Request<
  TReqeustData,
  TRequestConfig extends RequestConfig,
  TRequestResult
> = (TRequestConfig['requestDataOptional'] extends true
  ? (requestData?: TReqeustData, ...args: RequestFunctionRestArgs<typeof request>) => TRequestResult
  : (requestData: TReqeustData, ...args: RequestFunctionRestArgs<typeof request>) => TRequestResult) & {
  requestConfig: TRequestConfig
}

const mockUrl_0_0_0_1 = 'http://202.120.40.8:1086/mock/13' as any
const devUrl_0_0_0_1 = 'http://localhost:3000' as any
const prodUrl_0_0_0_1 = 'http://202.120.40.8:30416' as any
const dataKey_0_0_0_1 = '' as any

/**
 * 接口 [\/function↗](http://202.120.40.8:1086/project/13/interface/api/11) 的 **请求类型**
 *
 * @分类 [function-controller↗](http://202.120.40.8:1086/project/13/interface/api/cat_16)
 * @请求头 `POST /function`
 * @更新时间 `2020-04-08 18:20:07`
 */
/**
 * FunctionCreationRequest :FunctionCreationRequest
 */
export interface FunctionPostRequest {
  funcName?: string
  memorySize?: string
  codeZip?: string
  env?: string
  timeout?: string
}

/**
 * 接口 [\/function↗](http://202.120.40.8:1086/project/13/interface/api/11) 的 **返回类型**
 *
 * @分类 [function-controller↗](http://202.120.40.8:1086/project/13/interface/api/cat_16)
 * @请求头 `POST /function`
 * @更新时间 `2020-04-08 18:20:07`
 */
/**
 * FunctionCreationResponse :FunctionCreationResponse
 */
export interface FunctionPostResponse {}

/**
 * 接口 [\/function↗](http://202.120.40.8:1086/project/13/interface/api/11) 的 **请求配置的类型**
 *
 * @分类 [function-controller↗](http://202.120.40.8:1086/project/13/interface/api/cat_16)
 * @请求头 `POST /function`
 * @更新时间 `2020-04-08 18:20:07`
 */
type FunctionPostRequestConfig = Readonly<
  RequestConfig<
    'http://202.120.40.8:1086/mock/13',
    'http://localhost:3000',
    'http://202.120.40.8:30416',
    '/function',
    '',
    string,
    false
  >
>

/**
 * 接口 [\/function↗](http://202.120.40.8:1086/project/13/interface/api/11) 的 **请求配置**
 *
 * @分类 [function-controller↗](http://202.120.40.8:1086/project/13/interface/api/cat_16)
 * @请求头 `POST /function`
 * @更新时间 `2020-04-08 18:20:07`
 */
const functionPostRequestConfig: FunctionPostRequestConfig = {
  mockUrl: mockUrl_0_0_0_1,
  devUrl: devUrl_0_0_0_1,
  prodUrl: prodUrl_0_0_0_1,
  path: '/function',
  method: Method.POST,
  requestBodyType: RequestBodyType.json,
  responseBodyType: ResponseBodyType.json,
  dataKey: dataKey_0_0_0_1,
  paramNames: [],
  requestDataOptional: false,
}

/**
 * 接口 [\/function↗](http://202.120.40.8:1086/project/13/interface/api/11) 的 **请求函数**
 *
 * @分类 [function-controller↗](http://202.120.40.8:1086/project/13/interface/api/cat_16)
 * @请求头 `POST /function`
 * @更新时间 `2020-04-08 18:20:07`
 */
export const functionPOST = makeRequest<FunctionPostRequest, FunctionPostResponse, FunctionPostRequestConfig>(
  functionPostRequestConfig,
)

/**
 * 接口 [\/function↗](http://202.120.40.8:1086/project/13/interface/api/25) 的 **请求类型**
 *
 * @分类 [function-controller↗](http://202.120.40.8:1086/project/13/interface/api/cat_16)
 * @请求头 `GET /function`
 * @更新时间 `2020-04-08 18:20:07`
 */
export interface FunctionGetRequest {}

/**
 * 接口 [\/function↗](http://202.120.40.8:1086/project/13/interface/api/25) 的 **返回类型**
 *
 * @分类 [function-controller↗](http://202.120.40.8:1086/project/13/interface/api/cat_16)
 * @请求头 `GET /function`
 * @更新时间 `2020-04-08 18:20:07`
 */
/**
 * FunctionResponse :FunctionResponse
 */
export interface FunctionGetResponse {
  /**
   * Function
   */
  functions?: {
    functionName?: string
    description?: string
    runtime?: string
    handler?: string
    timeout?: number
    memorySize?: number
    codeSize?: number
    codeChecksum?: string
    /**
     * (该参数为map)
     */
    environmentVariables?: {
      /**
       * string
       */
      mapKey?: {}
      /**
       * string
       */
      mapValue?: {
        hash?: number
      }
    }
    createdTime?: string
  }[]
  status?: number
}

/**
 * 接口 [\/function↗](http://202.120.40.8:1086/project/13/interface/api/25) 的 **请求配置的类型**
 *
 * @分类 [function-controller↗](http://202.120.40.8:1086/project/13/interface/api/cat_16)
 * @请求头 `GET /function`
 * @更新时间 `2020-04-08 18:20:07`
 */
type FunctionGetRequestConfig = Readonly<
  RequestConfig<
    'http://202.120.40.8:1086/mock/13',
    'http://localhost:3000',
    'http://202.120.40.8:30416',
    '/function',
    '',
    string,
    true
  >
>

/**
 * 接口 [\/function↗](http://202.120.40.8:1086/project/13/interface/api/25) 的 **请求配置**
 *
 * @分类 [function-controller↗](http://202.120.40.8:1086/project/13/interface/api/cat_16)
 * @请求头 `GET /function`
 * @更新时间 `2020-04-08 18:20:07`
 */
const functionGetRequestConfig: FunctionGetRequestConfig = {
  mockUrl: mockUrl_0_0_0_1,
  devUrl: devUrl_0_0_0_1,
  prodUrl: prodUrl_0_0_0_1,
  path: '/function',
  method: Method.GET,
  requestBodyType: RequestBodyType.query,
  responseBodyType: ResponseBodyType.json,
  dataKey: dataKey_0_0_0_1,
  paramNames: [],
  requestDataOptional: true,
}

/**
 * 接口 [\/function↗](http://202.120.40.8:1086/project/13/interface/api/25) 的 **请求函数**
 *
 * @分类 [function-controller↗](http://202.120.40.8:1086/project/13/interface/api/cat_16)
 * @请求头 `GET /function`
 * @更新时间 `2020-04-08 18:20:07`
 */
export const functionGET = makeRequest<FunctionGetRequest, FunctionGetResponse, FunctionGetRequestConfig>(
  functionGetRequestConfig,
)

/**
 * 接口 [\/function\/{id}↗](http://202.120.40.8:1086/project/13/interface/api/256) 的 **请求类型**
 *
 * @分类 [function-controller↗](http://202.120.40.8:1086/project/13/interface/api/cat_16)
 * @请求头 `DELETE /function/{id}`
 * @更新时间 `2020-04-08 18:20:07`
 */
export interface FunctionidDeleteRequest {
  /**
   * (String)
   */
  id: string
}

/**
 * 接口 [\/function\/{id}↗](http://202.120.40.8:1086/project/13/interface/api/256) 的 **返回类型**
 *
 * @分类 [function-controller↗](http://202.120.40.8:1086/project/13/interface/api/cat_16)
 * @请求头 `DELETE /function/{id}`
 * @更新时间 `2020-04-08 18:20:07`
 */
export interface FunctionidDeleteResponse {}

/**
 * 接口 [\/function\/{id}↗](http://202.120.40.8:1086/project/13/interface/api/256) 的 **请求配置的类型**
 *
 * @分类 [function-controller↗](http://202.120.40.8:1086/project/13/interface/api/cat_16)
 * @请求头 `DELETE /function/{id}`
 * @更新时间 `2020-04-08 18:20:07`
 */
type FunctionidDeleteRequestConfig = Readonly<
  RequestConfig<
    'http://202.120.40.8:1086/mock/13',
    'http://localhost:3000',
    'http://202.120.40.8:30416',
    '/function/{id}',
    '',
    'id',
    false
  >
>

/**
 * 接口 [\/function\/{id}↗](http://202.120.40.8:1086/project/13/interface/api/256) 的 **请求配置**
 *
 * @分类 [function-controller↗](http://202.120.40.8:1086/project/13/interface/api/cat_16)
 * @请求头 `DELETE /function/{id}`
 * @更新时间 `2020-04-08 18:20:07`
 */
const functionidDeleteRequestConfig: FunctionidDeleteRequestConfig = {
  mockUrl: mockUrl_0_0_0_1,
  devUrl: devUrl_0_0_0_1,
  prodUrl: prodUrl_0_0_0_1,
  path: '/function/{id}',
  method: Method.DELETE,
  requestBodyType: RequestBodyType.json,
  responseBodyType: ResponseBodyType.json,
  dataKey: dataKey_0_0_0_1,
  paramNames: ['id'],
  requestDataOptional: false,
}

/**
 * 接口 [\/function\/{id}↗](http://202.120.40.8:1086/project/13/interface/api/256) 的 **请求函数**
 *
 * @分类 [function-controller↗](http://202.120.40.8:1086/project/13/interface/api/cat_16)
 * @请求头 `DELETE /function/{id}`
 * @更新时间 `2020-04-08 18:20:07`
 */
export const functionidDELETE = makeRequest<
  FunctionidDeleteRequest,
  FunctionidDeleteResponse,
  FunctionidDeleteRequestConfig
>(functionidDeleteRequestConfig)

/**
 * 接口 [\/function\/{id}↗](http://202.120.40.8:1086/project/13/interface/api/263) 的 **请求类型**
 *
 * @分类 [function-controller↗](http://202.120.40.8:1086/project/13/interface/api/cat_16)
 * @请求头 `GET /function/{id}`
 * @更新时间 `2020-04-08 18:20:07`
 */
export interface FunctionidGetRequest {
  /**
   * (String)
   */
  id: string
}

/**
 * 接口 [\/function\/{id}↗](http://202.120.40.8:1086/project/13/interface/api/263) 的 **返回类型**
 *
 * @分类 [function-controller↗](http://202.120.40.8:1086/project/13/interface/api/cat_16)
 * @请求头 `GET /function/{id}`
 * @更新时间 `2020-04-08 18:20:07`
 */
/**
 * FunctionResponse :FunctionResponse
 */
export interface FunctionidGetResponse {
  /**
   * Function
   */
  functions?: {
    functionName?: string
    description?: string
    runtime?: string
    handler?: string
    timeout?: number
    memorySize?: number
    codeSize?: number
    codeChecksum?: string
    /**
     * (该参数为map)
     */
    environmentVariables?: {
      /**
       * string
       */
      mapKey?: {}
      /**
       * string
       */
      mapValue?: {
        hash?: number
      }
    }
    createdTime?: string
  }[]
  status?: number
}

/**
 * 接口 [\/function\/{id}↗](http://202.120.40.8:1086/project/13/interface/api/263) 的 **请求配置的类型**
 *
 * @分类 [function-controller↗](http://202.120.40.8:1086/project/13/interface/api/cat_16)
 * @请求头 `GET /function/{id}`
 * @更新时间 `2020-04-08 18:20:07`
 */
type FunctionidGetRequestConfig = Readonly<
  RequestConfig<
    'http://202.120.40.8:1086/mock/13',
    'http://localhost:3000',
    'http://202.120.40.8:30416',
    '/function/{id}',
    '',
    'id',
    false
  >
>

/**
 * 接口 [\/function\/{id}↗](http://202.120.40.8:1086/project/13/interface/api/263) 的 **请求配置**
 *
 * @分类 [function-controller↗](http://202.120.40.8:1086/project/13/interface/api/cat_16)
 * @请求头 `GET /function/{id}`
 * @更新时间 `2020-04-08 18:20:07`
 */
const functionidGetRequestConfig: FunctionidGetRequestConfig = {
  mockUrl: mockUrl_0_0_0_1,
  devUrl: devUrl_0_0_0_1,
  prodUrl: prodUrl_0_0_0_1,
  path: '/function/{id}',
  method: Method.GET,
  requestBodyType: RequestBodyType.query,
  responseBodyType: ResponseBodyType.json,
  dataKey: dataKey_0_0_0_1,
  paramNames: ['id'],
  requestDataOptional: false,
}

/**
 * 接口 [\/function\/{id}↗](http://202.120.40.8:1086/project/13/interface/api/263) 的 **请求函数**
 *
 * @分类 [function-controller↗](http://202.120.40.8:1086/project/13/interface/api/cat_16)
 * @请求头 `GET /function/{id}`
 * @更新时间 `2020-04-08 18:20:07`
 */
export const functionidGET = makeRequest<FunctionidGetRequest, FunctionidGetResponse, FunctionidGetRequestConfig>(
  functionidGetRequestConfig,
)

/**
 * 接口 [\/invoke↗](http://202.120.40.8:1086/project/13/interface/api/32) 的 **请求类型**
 *
 * @分类 [function-controller↗](http://202.120.40.8:1086/project/13/interface/api/cat_16)
 * @请求头 `POST /invoke`
 * @更新时间 `2020-04-08 18:21:16`
 */
/**
 * FunctionInvocationRequest :FunctionInvocationRequest
 */
export interface InvokePostRequest {
  funcName?: string
  args?: string
  enableNative?: string
}

/**
 * 接口 [\/invoke↗](http://202.120.40.8:1086/project/13/interface/api/32) 的 **返回类型**
 *
 * @分类 [function-controller↗](http://202.120.40.8:1086/project/13/interface/api/cat_16)
 * @请求头 `POST /invoke`
 * @更新时间 `2020-04-08 18:21:16`
 */
export type InvokePostResponse = any

/**
 * 接口 [\/invoke↗](http://202.120.40.8:1086/project/13/interface/api/32) 的 **请求配置的类型**
 *
 * @分类 [function-controller↗](http://202.120.40.8:1086/project/13/interface/api/cat_16)
 * @请求头 `POST /invoke`
 * @更新时间 `2020-04-08 18:21:16`
 */
type InvokePostRequestConfig = Readonly<
  RequestConfig<
    'http://202.120.40.8:1086/mock/13',
    'http://localhost:3000',
    'http://202.120.40.8:30416',
    '/invoke',
    '',
    string,
    false
  >
>

/**
 * 接口 [\/invoke↗](http://202.120.40.8:1086/project/13/interface/api/32) 的 **请求配置**
 *
 * @分类 [function-controller↗](http://202.120.40.8:1086/project/13/interface/api/cat_16)
 * @请求头 `POST /invoke`
 * @更新时间 `2020-04-08 18:21:16`
 */
const invokePostRequestConfig: InvokePostRequestConfig = {
  mockUrl: mockUrl_0_0_0_1,
  devUrl: devUrl_0_0_0_1,
  prodUrl: prodUrl_0_0_0_1,
  path: '/invoke',
  method: Method.POST,
  requestBodyType: RequestBodyType.json,
  responseBodyType: ResponseBodyType.raw,
  dataKey: dataKey_0_0_0_1,
  paramNames: [],
  requestDataOptional: false,
}

/**
 * 接口 [\/invoke↗](http://202.120.40.8:1086/project/13/interface/api/32) 的 **请求函数**
 *
 * @分类 [function-controller↗](http://202.120.40.8:1086/project/13/interface/api/cat_16)
 * @请求头 `POST /invoke`
 * @更新时间 `2020-04-08 18:21:16`
 */
export const invokePOST = makeRequest<InvokePostRequest, InvokePostResponse, InvokePostRequestConfig>(
  invokePostRequestConfig,
)

const mockUrl_0_0_0_2 = 'http://202.120.40.8:1086/mock/13' as any
const devUrl_0_0_0_2 = 'http://localhost:3000' as any
const prodUrl_0_0_0_2 = 'http://202.120.40.8:30416' as any
const dataKey_0_0_0_2 = '' as any

/**
 * 接口 [\/backend↗](http://202.120.40.8:1086/project/13/interface/api/270) 的 **请求类型**
 *
 * @分类 [state-controller↗](http://202.120.40.8:1086/project/13/interface/api/cat_19)
 * @请求头 `GET /backend`
 * @更新时间 `2020-05-31 11:47:54`
 */
export interface BackendGetRequest {}

/**
 * 接口 [\/backend↗](http://202.120.40.8:1086/project/13/interface/api/270) 的 **返回类型**
 *
 * @分类 [state-controller↗](http://202.120.40.8:1086/project/13/interface/api/cat_19)
 * @请求头 `GET /backend`
 * @更新时间 `2020-05-31 11:47:54`
 */
/**
 * BackendGetResponse :BackendGetResponse
 */
export interface BackendGetResponse {
  /**
   * BackendOTD
   */
  backends?: {
    addr?: string
    latency?: {}
    price?: {}
    active?: boolean
    priority?: {}
  }[]
}

/**
 * 接口 [\/backend↗](http://202.120.40.8:1086/project/13/interface/api/270) 的 **请求配置的类型**
 *
 * @分类 [state-controller↗](http://202.120.40.8:1086/project/13/interface/api/cat_19)
 * @请求头 `GET /backend`
 * @更新时间 `2020-05-31 11:47:54`
 */
type BackendGetRequestConfig = Readonly<
  RequestConfig<
    'http://202.120.40.8:1086/mock/13',
    'http://localhost:3000',
    'http://202.120.40.8:30416',
    '/backend',
    '',
    string,
    true
  >
>

/**
 * 接口 [\/backend↗](http://202.120.40.8:1086/project/13/interface/api/270) 的 **请求配置**
 *
 * @分类 [state-controller↗](http://202.120.40.8:1086/project/13/interface/api/cat_19)
 * @请求头 `GET /backend`
 * @更新时间 `2020-05-31 11:47:54`
 */
const backendGetRequestConfig: BackendGetRequestConfig = {
  mockUrl: mockUrl_0_0_0_2,
  devUrl: devUrl_0_0_0_2,
  prodUrl: prodUrl_0_0_0_2,
  path: '/backend',
  method: Method.GET,
  requestBodyType: RequestBodyType.query,
  responseBodyType: ResponseBodyType.json,
  dataKey: dataKey_0_0_0_2,
  paramNames: [],
  requestDataOptional: true,
}

/**
 * 接口 [\/backend↗](http://202.120.40.8:1086/project/13/interface/api/270) 的 **请求函数**
 *
 * @分类 [state-controller↗](http://202.120.40.8:1086/project/13/interface/api/cat_19)
 * @请求头 `GET /backend`
 * @更新时间 `2020-05-31 11:47:54`
 */
export const backendGET = makeRequest<BackendGetRequest, BackendGetResponse, BackendGetRequestConfig>(
  backendGetRequestConfig,
)

/**
 * 接口 [\/backend↗](http://202.120.40.8:1086/project/13/interface/api/277) 的 **请求类型**
 *
 * @分类 [state-controller↗](http://202.120.40.8:1086/project/13/interface/api/cat_19)
 * @请求头 `POST /backend`
 * @更新时间 `2020-05-31 11:47:54`
 */
/**
 * Backend :Backend
 */
export interface BackendPostRequest {
  addr?: string
  latency?: {}
  price?: {}
  active?: boolean
  priority?: {}
  /**
   * WebClient
   */
  wc?: {}
}

/**
 * 接口 [\/backend↗](http://202.120.40.8:1086/project/13/interface/api/277) 的 **返回类型**
 *
 * @分类 [state-controller↗](http://202.120.40.8:1086/project/13/interface/api/cat_19)
 * @请求头 `POST /backend`
 * @更新时间 `2020-05-31 11:47:54`
 */
/**
 * BackendPostResponse :BackendPostResponse
 */
export interface BackendPostResponse {
  /**
   * OK
   * InvalidAddr
   * InvalidPrice
   * InvalidPriority
   * RuntimeError
   *
   */
  status?: {}
}

/**
 * 接口 [\/backend↗](http://202.120.40.8:1086/project/13/interface/api/277) 的 **请求配置的类型**
 *
 * @分类 [state-controller↗](http://202.120.40.8:1086/project/13/interface/api/cat_19)
 * @请求头 `POST /backend`
 * @更新时间 `2020-05-31 11:47:54`
 */
type BackendPostRequestConfig = Readonly<
  RequestConfig<
    'http://202.120.40.8:1086/mock/13',
    'http://localhost:3000',
    'http://202.120.40.8:30416',
    '/backend',
    '',
    string,
    false
  >
>

/**
 * 接口 [\/backend↗](http://202.120.40.8:1086/project/13/interface/api/277) 的 **请求配置**
 *
 * @分类 [state-controller↗](http://202.120.40.8:1086/project/13/interface/api/cat_19)
 * @请求头 `POST /backend`
 * @更新时间 `2020-05-31 11:47:54`
 */
const backendPostRequestConfig: BackendPostRequestConfig = {
  mockUrl: mockUrl_0_0_0_2,
  devUrl: devUrl_0_0_0_2,
  prodUrl: prodUrl_0_0_0_2,
  path: '/backend',
  method: Method.POST,
  requestBodyType: RequestBodyType.json,
  responseBodyType: ResponseBodyType.json,
  dataKey: dataKey_0_0_0_2,
  paramNames: [],
  requestDataOptional: false,
}

/**
 * 接口 [\/backend↗](http://202.120.40.8:1086/project/13/interface/api/277) 的 **请求函数**
 *
 * @分类 [state-controller↗](http://202.120.40.8:1086/project/13/interface/api/cat_19)
 * @请求头 `POST /backend`
 * @更新时间 `2020-05-31 11:47:54`
 */
export const backendPOST = makeRequest<BackendPostRequest, BackendPostResponse, BackendPostRequestConfig>(
  backendPostRequestConfig,
)

/* prettier-ignore-end */
