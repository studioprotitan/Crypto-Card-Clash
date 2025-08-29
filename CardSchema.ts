import { z } from 'zod';

export const CardSchema = z.object({
  id: z.string().optional(),
  name: z.string(),
  rarity: z.enum(['common', 'rare', 'epic', 'legendary']).default('common'),
  power: z.number().int().min(0).max(999).default(0),
  image: z.string().url().optional(),
  lore: z.string().optional(),
});
export type Card = z.infer<typeof CardSchema>;
