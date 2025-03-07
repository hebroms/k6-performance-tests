import http from 'k6/http';

export function getResource(url) {
  return http.get(url);
}

export function postResource(url, payload, params) {
  return http.post(url, JSON.stringify(payload), params);
}