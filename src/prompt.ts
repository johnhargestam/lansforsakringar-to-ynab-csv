const promptFn = require('prompt-sync')();

export const prompt = (question: string): string => promptFn(question);
