import { createClient } from 'microcms-js-sdk';
import { MicroCMSClient } from '../../types/types'

const apiKey: string = process.env.API_KEY ?? "";

export const client = createClient({
  serviceDomain: process.env.API_DOMAIN,
  apiKey: process.env.API_KEY,
});