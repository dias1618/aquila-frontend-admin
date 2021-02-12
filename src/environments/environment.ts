export const environment = {
  production: false,
  baseUrl: {
    auth: 'http://localhost:3002',
    records: 'http://localhost:3003',
    recommendation: 'http://localhost:3004',
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
