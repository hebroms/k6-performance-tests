import { generateReport } from '../settings/report.js';
import { BASE_URL, HEADERS } from '../settings/settings.js';

import { getResource } from '../pages/api.js';

import { thresholds } from '../settings/thresholds.js';
import { stages_spike } from '../settings/stages.js';

export let options = {
    thresholds: thresholds,
    stages: stages_spike,
};

export default function () {
  let res = getResource(`${BASE_URL}/resource`, HEADERS);
}

export function handleSummary(data) {
  return generateReport(data, 'spike-test');
}