// src/types/zod.ts
import { z } from 'zod';

export const CardSchema = z.object({
  id: z.string().optional(),
  name: z.string(),
  power: z.string(),
  rarity: z.enum(['common', 'rare', 'epic', 'legendary']),
  image: z.string().url().optional(),
});
export type Card = z.infer<typeof CardSchema>;
