# Firestore Data Models

This document outlines the data structures for the Firestore database.

## `cards` collection

Path: `/cards/{cardId}`

Represents a single card in the game.

```typescript
{
  name: string,
  faction: "Echelonian" | "Raider" | "Alchemist" | "Golem" | "Kaiju" | "Ghost" | "Formula" | "Kraken",
  rarity: "common" | "rare" | "epic" | "legendary",
  type: "pilot" | "weapon" | "npc" | "artifact" | "buff" | "vehicle",
  imageUrl: string,   // Firebase Storage or CDN URL
  glbUrl?: string,    // optional 3D asset
  unique?: boolean,   // marks “special one per deck” items
  stats?: {
    attack?: number;
    defense?: number;
    speed?: number;
    magic?: number;
  }
}
```

## `decks` collection

Path: `/decks/{deckId}`

Represents a pre-constructed deck available for purchase or use.

```typescript
{
  name: string,
  faction: string,
  heroPilotId: string,            // the “Legendary Top Pilot”
  includeRandomEchelonian: boolean,
  includes: Array<{cardId: string, qty: number}>,
  coverImageUrl: string,          // for UI card
  priceUSD: number,               // Stripe price anchoring
  nfcEnabled: boolean,
}
```

## `inventory` sub-collection

Path: `/users/{uid}/inventory/{cardId}`

Represents the cards a user owns.

```typescript
{
  cardId: string,
  qty: number,
  source: "purchase" | "mint" | "forge" | "reward",
  onchain?: {
    chain: "evm" | "solana",
    tokenId?: string,
    mintTx?: string
  }
}
```

## `orders` collection

Path: `/orders/{orderId}`

Tracks user purchases.

```typescript
{
  uid: string,
  deckId: string,
  stripeSessionId: string,
  status: "pending" | "paid" | "fulfilled" | "failed"
}
```

## `forgeJobs` collection

Path: `/forgeJobs/{jobId}`

Tracks the process of combining cards.

```typescript
{
  uid: string,
  inputs: string[],   // two cardIds
  resultCardId: string,
  status: "queued" | "processing" | "done" | "failed"
}
```