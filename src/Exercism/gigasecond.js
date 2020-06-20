const GIGASECOND_IN_MS = 10 ** 12;
export const gigasecond = d => new Date(d.getTime() + GIGASECOND_IN_MS);
