import { RequestFunctionParams, RequestBodyType, ResponseBodyType } from 'yapi-to-typescript'

export interface RequestOptions {
  /**
   * 使用的服务器。
   *
   * - `prod`: 生产服务器
   * - `dev`: 测试服务器
   * - `mock`: 模拟服务器
   *
   * @default prod
   */
  server?: 'prod' | 'dev' | 'mock';
}

export default function request<TResponseData> (
  payload: RequestFunctionParams,
  options: RequestOptions = {
    server: 'mock'
  }
): Promise<TResponseData> {
  return new Promise<TResponseData>((resolve, reject) => {
    // 基本地址
    const baseUrl = options.server === 'mock'
      ? payload.mockUrl
      : options.server === 'dev'
        ? payload.devUrl
        : payload.prodUrl

    // 请求地址
    let url = `${baseUrl}${payload.path}`

    if (payload.paramNames.length > 0) {
      // 路径参数
      const pathParas: string[] = []
      url = url.replace(new RegExp('\\{(\\w*)\\}'), (s, paraName) => { pathParas.push(paraName); return payload.data[paraName] })

      // url paras
      const urlParas = payload.paramNames.filter((value) => pathParas.includes(value))
      url = url + '?'
      urlParas.forEach((value) => {
        url = url + value + '=' + payload.data[value] + '&'
      })
    }
    const bodyParas: string[] = Object.keys(payload.data).filter((value: string) => !payload.paramNames.includes(value))
    let req
    // 具体请求逻辑
    if (payload.requestBodyType === RequestBodyType.form) {
      const formdata = new FormData()
      bodyParas.forEach(value => {
        formdata.append(value, payload.data[value])
      })
      req = fetch(url, { method: payload.method, headers: { 'Content-Type': 'application/x-www-form-urlencoded' }, body: formdata })
    } else if (payload.requestBodyType === RequestBodyType.json) {
      req = fetch(url, { method: payload.method, headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(payload.data, bodyParas) })
    } else {
      req = fetch(url, { method: payload.method })
    }

    req.then((response) => {
      if (payload.responseBodyType === ResponseBodyType.json) {
        response.json().then(body => {
          resolve(body)
        }).catch(res => {
          reject(res)
        })
      } else {
        response.text().then(body => {
          // eslint-disable-next-line
          resolve(body as any)
        }).catch(res => {
          reject(res)
        })
      }
    }).catch(res => {
      reject(res)
    })
  })
}
