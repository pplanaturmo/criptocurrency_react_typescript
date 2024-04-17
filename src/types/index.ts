import { z } from "zod";
import { CryptoPriceSchema } from '../schemas/crypto-schema';
import {
  CurrencySchema,
  CryptoCurrencyResponseSchema,
  PairSchema,
} from "../schemas/crypto-schema";

export type Currency = z.infer<typeof CurrencySchema>;

export type Cryptocurrency = z.infer<typeof CryptoCurrencyResponseSchema>;

export type Pair = z.infer<typeof PairSchema>;

export type CryptoPrice = z.infer<typeof CryptoPriceSchema>