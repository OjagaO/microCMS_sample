import { createClient } from 'microcms-js-sdk';

const serviceDomain: string | undefined = process.env.API_DOMAIN ?? undefined;
const apiKey: string | undefined = process.env.API_KEY ?? undefined;

export const client = createClient({
  serviceDomain: process.env.API_DOMAIN,
  apiKey: process.env.API_KEY,
});