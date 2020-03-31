import { Config, ExtendedInterface, ChangeCase } from 'yapi-to-typescript'

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
    projects: [
      {
        token: process.env.YTT_TOKEN as string,
        getRequestFunctionName: (interfaceInfo: ExtendedInterface, changeCase: ChangeCase): string => {
          return interfaceInfo.title
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