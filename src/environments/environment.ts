let index: any = 'env';
export const environment = {
  production: false,
  API_URL: 'https://content-api-dev.eztek.net',
  name: window[index]['name'] || 'production',
};
