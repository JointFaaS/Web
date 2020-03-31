import App from '../App'

const info = r => require.ensure([], () => r(require('../page/info')), 'info')
const management = r => require.ensure([], () => r(require('../page/info')), 'info')

export default [{
    path: '/',
    component: App,
    children: [
        {
            path: '/function',
            component: management,
            children: [
                {
                    path: 'info/:funcName',
                    component: info
                },
                {
                    path: 'new/:funcName',
                    component: NewFunction
                }
            ]
        },
        {
            path: '*'
        }
    ]},
]