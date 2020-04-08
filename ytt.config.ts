import { Config, ExtendedInterface, ChangeCase, Interface } from 'yapi-to-typescript'

const config: Config = [
  {
    serverUrl: 'http://202.120.40.8:1086',
    typesOnly: false,
    reactHooks: {
      enabled: false,
    },
    prodEnvName: 'production',
    devEnvName: 'dev',
    outputFilePath: 'src/api/index.ts',
    requestFunctionFilePath: 'src/api/request.ts',
    dataKey: '',
    projects: [
      {
        token: process.env.YTT_TOKEN as string,
        getRequestFunctionName: (interfaceInfo: ExtendedInterface, changeCase: ChangeCase): string => {
          return interfaceInfo.path.replace(new RegExp("[\\+\\/\\{\\}]","g"), '') + interfaceInfo.method
        },
        preproccessInterface: interfaceInfo => {
          interfaceInfo.res_body = interfaceInfo.res_body.replace(new RegExp('"(String|int|long|Interger)"', 'g'), (s, s1) => {
            if (s1 === 'String') {
              return '"string"'
            }else if (s1 === 'int' || s1 === 'long' || s1 === 'Interger') {
              return '"integer"'
            }
          })
          if (interfaceInfo.req_body_other !== undefined)
            interfaceInfo.req_body_other = interfaceInfo.req_body_other.replace(new RegExp('"(String|int|long|Interger)"', 'g'), (s, s1) => {
              if (s1 === 'String') {
                return '"string"'
              }else if (s1 === 'int' || s1 === 'long' || s1 === 'Interger') {
                return '"integer"'
              }
            })
          return interfaceInfo
        },
        categories: [
          {
            id: 0,
          }
        ],
      },
    ],
  },
]

export default config