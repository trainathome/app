export enum Sport {
  FOOTBALL = 'Fútbol',
  BASKETBALL = 'Baloncesto',
  TENNIS = 'Tenis',
  PADEL = 'Pádel',
  RUNNING = 'Running',
  CYCLING = 'Ciclismo',
  SWIMMING = 'Natación',
}

export const SportColors = {
  [Sport.FOOTBALL]: {
    primary: '#22c55e',
    secondary: '#16a34a',
  },
  [Sport.BASKETBALL]: {
    primary: '#f97316',
    secondary: '#ea580c',
  },
  [Sport.TENNIS]: {
    primary: '#3b82f6',
    secondary: '#2563eb',
  },
  [Sport.PADEL]: {
    primary: '#8b5cf6',
    secondary: '#7c3aed',
  },
  [Sport.RUNNING]: {
    primary: '#ec4899',
    secondary: '#db2777',
  },
  [Sport.CYCLING]: {
    primary: '#06b6d4',
    secondary: '#0891b2',
  },
  [Sport.SWIMMING]: {
    primary: '#0ea5e9',
    secondary: '#0284c7',
  },
  default: {
    primary: '#64748b',
    secondary: '#475569',
  },
} as const;

export const getSportColor = (sport: string) => {
  const sportEnum: Sport | undefined = Object.values(Sport).find(
    (s: Sport) => s === sport
  );
  return sportEnum ? SportColors[sportEnum] : SportColors.default;
};
