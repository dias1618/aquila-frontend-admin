export const environment = {
  production: false,
  baseUrl: {
    auth: 'http://localhost:3002',
    records: 'http://localhost:3003'
  },
  axiosConfig: { headers: {
    common: {
        "Cache-Control": "no-cache, no-store, must-revalidate",
        Pragma: "no-cache",
        "Content-Type": "application/json",
        Accept: "application/json",
    },
  }} 
};
