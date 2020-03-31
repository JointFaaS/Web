let baseUrl = ''; 
let routerMode = 'hash';
let imgBaseUrl = '';


if (process.env.NODE_ENV == 'development') {
    imgBaseUrl = '/img/';

}else if(process.env.NODE_ENV == 'production'){
	baseUrl = '//';
    imgBaseUrl = '//';
}

export {
	baseUrl,
	routerMode,
	imgBaseUrl,
}