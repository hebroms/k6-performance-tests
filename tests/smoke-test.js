import { generateReport } from '../settings/report.js';
import { BASE_URL, HEADERS } from '../settings/settings.js';

import { getResource } from '../pages/api.js';

import { thresholds } from '../settings/thresholds.js';

export let options = {
    vus: 1, // Apenas 1 usuário virtual
    duration: '10s', // Teste curto
    thresholds: thresholds,
};

export default function () {
    let res = getResource(`${BASE_URL}/health`, HEADERS);
}

export function handleSummary(data) {
    return generateReport(data, 'smoke-test');
}