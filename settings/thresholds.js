export const thresholds = {
    http_req_duration: ['p(95)<500'], // 95% das requisições devem ser < 500ms
    http_req_failed: ['rate<0.01'],   // Menos de 1% de falhas
  };