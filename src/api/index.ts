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
 * 接口 [FunctionCodeGet↗](http://202.120.40.8:1086/project/13/interface/api/18) 的 **请求类型**
 *
 * @分类 [函数管理↗](http://202.120.40.8:1086/project/13/interface/api/cat_6)
 * @请求头 `GET /sourcezip`
 * @更新时间 `2020-03-31 15:31:27`
 */
export interface FunctionCodeGetRequest {}

/**
 * 接口 [FunctionCodeGet↗](http://202.120.40.8:1086/project/13/interface/api/18) 的 **返回类型**
 *
 * @分类 [函数管理↗](http://202.120.40.8:1086/project/13/interface/api/cat_6)
 * @请求头 `GET /sourcezip`
 * @更新时间 `2020-03-31 15:31:27`
 */
export interface FunctionCodeGetResponse {}

/**
 * 接口 [FunctionCodeGet↗](http://202.120.40.8:1086/project/13/interface/api/18) 的 **请求配置的类型**
 *
 * @分类 [函数管理↗](http://202.120.40.8:1086/project/13/interface/api/cat_6)
 * @请求头 `GET /sourcezip`
 * @更新时间 `2020-03-31 15:31:27`
 */
type FunctionCodeGetRequestConfig = Readonly<
  RequestConfig<
    'http://202.120.40.8:1086/mock/13',
    'http://localhost:3000',
    'http://202.120.40.8:30416',
    '/sourcezip',
    '',
    string,
    true
  >
>

/**
 * 接口 [FunctionCodeGet↗](http://202.120.40.8:1086/project/13/interface/api/18) 的 **请求配置**
 *
 * @分类 [函数管理↗](http://202.120.40.8:1086/project/13/interface/api/cat_6)
 * @请求头 `GET /sourcezip`
 * @更新时间 `2020-03-31 15:31:27`
 */
const functionCodeGetRequestConfig: FunctionCodeGetRequestConfig = {
  mockUrl: mockUrl_0_0_0_1,
  devUrl: devUrl_0_0_0_1,
  prodUrl: prodUrl_0_0_0_1,
  path: '/sourcezip',
  method: Method.GET,
  requestBodyType: RequestBodyType.query,
  responseBodyType: ResponseBodyType.json,
  dataKey: dataKey_0_0_0_1,
  paramNames: [],
  requestDataOptional: true,
}

/**
 * 接口 [FunctionCodeGet↗](http://202.120.40.8:1086/project/13/interface/api/18) 的 **请求函数**
 *
 * @分类 [函数管理↗](http://202.120.40.8:1086/project/13/interface/api/cat_6)
 * @请求头 `GET /sourcezip`
 * @更新时间 `2020-03-31 15:31:27`
 */
export const FunctionCodeGet = makeRequest<
  FunctionCodeGetRequest,
  FunctionCodeGetResponse,
  FunctionCodeGetRequestConfig
>(functionCodeGetRequestConfig)

/**
 * 接口 [FunctionCreate↗](http://202.120.40.8:1086/project/13/interface/api/11) 的 **请求类型**
 *
 * @分类 [函数管理↗](http://202.120.40.8:1086/project/13/interface/api/cat_6)
 * @请求头 `POST /function`
 * @更新时间 `2020-04-01 13:51:34`
 */
export interface FunctionCreateRequest {
  funcName: string
  codeZip: string
  memorySize: number
  timeout: number
  env: string
}

/**
 * 接口 [FunctionCreate↗](http://202.120.40.8:1086/project/13/interface/api/11) 的 **返回类型**
 *
 * @分类 [函数管理↗](http://202.120.40.8:1086/project/13/interface/api/cat_6)
 * @请求头 `POST /function`
 * @更新时间 `2020-04-01 13:51:34`
 */
export interface FunctionCreateResponse {
  status: number
}

/**
 * 接口 [FunctionCreate↗](http://202.120.40.8:1086/project/13/interface/api/11) 的 **请求配置的类型**
 *
 * @分类 [函数管理↗](http://202.120.40.8:1086/project/13/interface/api/cat_6)
 * @请求头 `POST /function`
 * @更新时间 `2020-04-01 13:51:34`
 */
type FunctionCreateRequestConfig = Readonly<
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
 * 接口 [FunctionCreate↗](http://202.120.40.8:1086/project/13/interface/api/11) 的 **请求配置**
 *
 * @分类 [函数管理↗](http://202.120.40.8:1086/project/13/interface/api/cat_6)
 * @请求头 `POST /function`
 * @更新时间 `2020-04-01 13:51:34`
 */
const functionCreateRequestConfig: FunctionCreateRequestConfig = {
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
 * 接口 [FunctionCreate↗](http://202.120.40.8:1086/project/13/interface/api/11) 的 **请求函数**
 *
 * @分类 [函数管理↗](http://202.120.40.8:1086/project/13/interface/api/cat_6)
 * @请求头 `POST /function`
 * @更新时间 `2020-04-01 13:51:34`
 */
export const FunctionCreate = makeRequest<FunctionCreateRequest, FunctionCreateResponse, FunctionCreateRequestConfig>(
  functionCreateRequestConfig,
)

/**
 * 接口 [FunctionGet↗](http://202.120.40.8:1086/project/13/interface/api/25) 的 **请求类型**
 *
 * @分类 [函数管理↗](http://202.120.40.8:1086/project/13/interface/api/cat_6)
 * @请求头 `GET /function`
 * @更新时间 `2020-04-01 13:49:32`
 */
export interface FunctionGetRequest {
  /**
   * 为空则返回所有func
   */
  funcName?: string
}

/**
 * 接口 [FunctionGet↗](http://202.120.40.8:1086/project/13/interface/api/25) 的 **返回类型**
 *
 * @分类 [函数管理↗](http://202.120.40.8:1086/project/13/interface/api/cat_6)
 * @请求头 `GET /function`
 * @更新时间 `2020-04-01 13:49:32`
 */
export interface FunctionGetResponse {
  status: number
  functions: {
    funcName: string
    env: string
    memorySize: string
    timeout: string
  }[]
}

/**
 * 接口 [FunctionGet↗](http://202.120.40.8:1086/project/13/interface/api/25) 的 **请求配置的类型**
 *
 * @分类 [函数管理↗](http://202.120.40.8:1086/project/13/interface/api/cat_6)
 * @请求头 `GET /function`
 * @更新时间 `2020-04-01 13:49:32`
 */
type FunctionGetRequestConfig = Readonly<
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
 * 接口 [FunctionGet↗](http://202.120.40.8:1086/project/13/interface/api/25) 的 **请求配置**
 *
 * @分类 [函数管理↗](http://202.120.40.8:1086/project/13/interface/api/cat_6)
 * @请求头 `GET /function`
 * @更新时间 `2020-04-01 13:49:32`
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
  requestDataOptional: false,
}

/**
 * 接口 [FunctionGet↗](http://202.120.40.8:1086/project/13/interface/api/25) 的 **请求函数**
 *
 * @分类 [函数管理↗](http://202.120.40.8:1086/project/13/interface/api/cat_6)
 * @请求头 `GET /function`
 * @更新时间 `2020-04-01 13:49:32`
 */
export const FunctionGet = makeRequest<FunctionGetRequest, FunctionGetResponse, FunctionGetRequestConfig>(
  functionGetRequestConfig,
)

/**
 * 接口 [FunctionInvoke↗](http://202.120.40.8:1086/project/13/interface/api/32) 的 **请求类型**
 *
 * @分类 [函数管理↗](http://202.120.40.8:1086/project/13/interface/api/cat_6)
 * @请求头 `POST /invoke`
 * @更新时间 `2020-03-31 15:31:45`
 */
export interface FunctionInvokeRequest {}

/**
 * 接口 [FunctionInvoke↗](http://202.120.40.8:1086/project/13/interface/api/32) 的 **返回类型**
 *
 * @分类 [函数管理↗](http://202.120.40.8:1086/project/13/interface/api/cat_6)
 * @请求头 `POST /invoke`
 * @更新时间 `2020-03-31 15:31:45`
 */
export interface FunctionInvokeResponse {}

/**
 * 接口 [FunctionInvoke↗](http://202.120.40.8:1086/project/13/interface/api/32) 的 **请求配置的类型**
 *
 * @分类 [函数管理↗](http://202.120.40.8:1086/project/13/interface/api/cat_6)
 * @请求头 `POST /invoke`
 * @更新时间 `2020-03-31 15:31:45`
 */
type FunctionInvokeRequestConfig = Readonly<
  RequestConfig<
    'http://202.120.40.8:1086/mock/13',
    'http://localhost:3000',
    'http://202.120.40.8:30416',
    '/invoke',
    '',
    string,
    true
  >
>

/**
 * 接口 [FunctionInvoke↗](http://202.120.40.8:1086/project/13/interface/api/32) 的 **请求配置**
 *
 * @分类 [函数管理↗](http://202.120.40.8:1086/project/13/interface/api/cat_6)
 * @请求头 `POST /invoke`
 * @更新时间 `2020-03-31 15:31:45`
 */
const functionInvokeRequestConfig: FunctionInvokeRequestConfig = {
  mockUrl: mockUrl_0_0_0_1,
  devUrl: devUrl_0_0_0_1,
  prodUrl: prodUrl_0_0_0_1,
  path: '/invoke',
  method: Method.POST,
  requestBodyType: RequestBodyType.form,
  responseBodyType: ResponseBodyType.json,
  dataKey: dataKey_0_0_0_1,
  paramNames: [],
  requestDataOptional: true,
}

/**
 * 接口 [FunctionInvoke↗](http://202.120.40.8:1086/project/13/interface/api/32) 的 **请求函数**
 *
 * @分类 [函数管理↗](http://202.120.40.8:1086/project/13/interface/api/cat_6)
 * @请求头 `POST /invoke`
 * @更新时间 `2020-03-31 15:31:45`
 */
export const FunctionInvoke = makeRequest<FunctionInvokeRequest, FunctionInvokeResponse, FunctionInvokeRequestConfig>(
  functionInvokeRequestConfig,
)

/* prettier-ignore-end */
