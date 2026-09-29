export type Procedure = { name: string; description: string; image: string };
export type Testimonial = { quote: string; name: string };

export const site = {
  name: 'Juliana Peron',
  monogram: 'JP',
  headline: 'Sua melhor versão, aqui.',
  cro: 'CRO 44728',
  bio: 'Na Barra da Tijuca, a Dra. Juliana Peron dedica seu olhar à harmonização facial feminina. Seu Método Lume Face® parte da individualidade de cada rosto para construir escolhas precisas e uma beleza que continua sendo sua.',
  education: [] as string[],
  specialties: ['Harmonização facial', 'Full Face', 'Método Lume Face®'],
  phone: '',
  whatsapp: '',
  whatsappUrl: 'https://va.link/sdyjz',
  address: 'Barra da Tijuca, Rio de Janeiro',
  professionalPhilosophy: 'Sua melhor versão, sem perder a sua essência.',
  instagram: 'https://www.instagram.com/drajulianaperon/',
  instagramHandle: '@drajulianaperon',
  philosophy: ['SUA HISTÓRIA.', 'SEUS TRAÇOS.', 'SUA LUZ.'],
  colors: { paper: '#f4eee7', ink: '#251f1d', taupe: '#8b736b', champagne: '#d9b99d', dark: '#1d1a19', wine: '#281d1e', muted: '#6d625d' },
  images: { hero: '/images/julliana-hero.png', essence: '/images/julliana-essencia.png', about: '/images/julliana-sobre.png', beauty: '/images/julliana-essencia.png' },
  procedures: [] as Procedure[],
  office: [] as { src: string; alt: string }[],
  testimonials: [] as Testimonial[],
  results: { enabled: true, items: [
    { image: '/images/resultado-01.png', label: 'Leveza que se revela', alt: 'Comparativo de antes e depois de harmonização facial feminina em visão de três quartos.', orientation: 'horizontal', beforeShare: .5, comparisonRatio: 1226 / 1600 },
    { image: '/images/resultado-02.png', label: 'Equilíbrio em cada ângulo', alt: 'Comparativo de antes e depois de harmonização facial masculina em visão de três quartos.', orientation: 'horizontal', beforeShare: .5, comparisonRatio: 1282 / 1530 },
    { image: '/images/resultado-03.png', label: 'Expressão em harmonia', alt: 'Comparativo frontal de antes e depois de harmonização facial feminina.', orientation: 'horizontal', beforeShare: .5, comparisonRatio: 1276 / 1600 },
    { image: '/images/resultado-04.png', label: 'Traços valorizados', alt: 'Comparativo frontal de antes e depois de tratamento facial feminino.', orientation: 'horizontal', beforeShare: .5, comparisonRatio: 1262 / 1600 },
    { image: '/images/resultado-05.png', label: 'Um novo olhar', alt: 'Comparativo de antes e depois de tratamento facial feminino em visão de três quartos.', orientation: 'horizontal', beforeShare: .5, comparisonRatio: 1278 / 1600 },
    { image: '/images/resultado-06.png', label: 'Cuidado em cada detalhe', alt: 'Comparativo frontal de antes e depois de harmonização facial feminina.', orientation: 'horizontal', beforeShare: .5, comparisonRatio: 1284 / 1568 },
    { image: '/images/resultado-07.png', label: 'Naturalidade em perspectiva', alt: 'Comparativo de antes e depois de harmonização facial feminina em visão de três quartos.', orientation: 'horizontal', beforeShare: .5, comparisonRatio: 1284 / 1576 },
  ] },
  seo: { title: 'Dra. Juliana Peron | Harmonização Facial na Barra da Tijuca', description: 'Harmonização facial com a Dra. Juliana Peron na Barra da Tijuca. Conheça o Método Lume Face® e agende sua avaliação.', url: '' },
};

export const appointmentUrl = site.whatsappUrl;
