export const stages_soak = {
  stages: [
    { duration: '10m', target: 100 }, // Mantém 100 usuários por 10 minutos
    { duration: '30m', target: 100 }, // Mantém a carga constante
    { duration: '10m', target: 0 },   // Finaliza
  ],
};

export let stages_spike = {
  stages: [
    { duration: '10s', target: 500 }, // Aumento súbito para 500 usuários
    { duration: '30s', target: 500 }, // Mantém por 30 segundos
    { duration: '10s', target: 0 },   // Reduz rapidamente
  ],
};

export let stages_stress = {
  stages: [
    { duration: '5m', target: 200 },  // Aumento gradual para 200 usuários
    { duration: '10m', target: 500 }, // Mantém 500 usuários por 10 minutos
    { duration: '5m', target: 0 },    // Reduz a carga
  ],
};

export let stages_load = {
  stages: [
    { duration: '2m', target: 100 }, // Sobe para 100 usuários em 2 minutos
    { duration: '3m', target: 100 }, // Mantém 100 usuários por 3 minutos
    { duration: '2m', target: 0 }, // Diminui a carga
  ],
};