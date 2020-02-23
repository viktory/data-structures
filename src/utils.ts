const MAX_RANDOM_INT = 100;

export const getRandomInt = (max = MAX_RANDOM_INT) => Math.floor(Math.random() * Math.floor(max));
