import { ConnectorConfig, DataConnect, QueryRef, QueryPromise, MutationRef, MutationPromise } from 'firebase/data-connect';

export const connectorConfig: ConnectorConfig;

export type TimestampString = string;
export type UUIDString = string;
export type Int64String = string;
export type DateString = string;




export interface AetheriaCard_Key {
  id: UUIDString;
  __typename?: 'AetheriaCard_Key';
}

export interface Character_Key {
  id: UUIDString;
  __typename?: 'Character_Key';
}

export interface DeckCard_Key {
  deckId: UUIDString;
  playerCardId: UUIDString;
  __typename?: 'DeckCard_Key';
}

export interface Deck_Key {
  id: UUIDString;
  __typename?: 'Deck_Key';
}

export interface GetUserCharactersData {
  characters: ({
    id: UUIDString;
    characterName: string;
    characterClass: string;
    level: number;
  } & Character_Key)[];
}

export interface InsertAetheriaCardData {
  aetheriaCard_insert: AetheriaCard_Key;
}

export interface ListTradableAetheriaCardsData {
  aetheriaCards: ({
    id: UUIDString;
    cardName: string;
    elementType: string;
    baseAttack: number;
    baseDefense: number;
    rarity: string;
  } & AetheriaCard_Key)[];
}

export interface PlayerCard_Key {
  id: UUIDString;
  __typename?: 'PlayerCard_Key';
}

export interface Transaction_Key {
  id: UUIDString;
  __typename?: 'Transaction_Key';
}

export interface UpdatePlayerCardLevelData {
  playerCard_update?: PlayerCard_Key | null;
}

export interface UpdatePlayerCardLevelVariables {
  id: UUIDString;
  level: number;
}

export interface User_Key {
  id: UUIDString;
  __typename?: 'User_Key';
}

interface InsertAetheriaCardRef {
  /* Allow users to create refs without passing in DataConnect */
  (): MutationRef<InsertAetheriaCardData, undefined>;
  /* Allow users to pass in custom DataConnect instances */
  (dc: DataConnect): MutationRef<InsertAetheriaCardData, undefined>;
  operationName: string;
}
export const insertAetheriaCardRef: InsertAetheriaCardRef;

export function insertAetheriaCard(): MutationPromise<InsertAetheriaCardData, undefined>;
export function insertAetheriaCard(dc: DataConnect): MutationPromise<InsertAetheriaCardData, undefined>;

interface ListTradableAetheriaCardsRef {
  /* Allow users to create refs without passing in DataConnect */
  (): QueryRef<ListTradableAetheriaCardsData, undefined>;
  /* Allow users to pass in custom DataConnect instances */
  (dc: DataConnect): QueryRef<ListTradableAetheriaCardsData, undefined>;
  operationName: string;
}
export const listTradableAetheriaCardsRef: ListTradableAetheriaCardsRef;

export function listTradableAetheriaCards(): QueryPromise<ListTradableAetheriaCardsData, undefined>;
export function listTradableAetheriaCards(dc: DataConnect): QueryPromise<ListTradableAetheriaCardsData, undefined>;

interface UpdatePlayerCardLevelRef {
  /* Allow users to create refs without passing in DataConnect */
  (vars: UpdatePlayerCardLevelVariables): MutationRef<UpdatePlayerCardLevelData, UpdatePlayerCardLevelVariables>;
  /* Allow users to pass in custom DataConnect instances */
  (dc: DataConnect, vars: UpdatePlayerCardLevelVariables): MutationRef<UpdatePlayerCardLevelData, UpdatePlayerCardLevelVariables>;
  operationName: string;
}
export const updatePlayerCardLevelRef: UpdatePlayerCardLevelRef;

export function updatePlayerCardLevel(vars: UpdatePlayerCardLevelVariables): MutationPromise<UpdatePlayerCardLevelData, UpdatePlayerCardLevelVariables>;
export function updatePlayerCardLevel(dc: DataConnect, vars: UpdatePlayerCardLevelVariables): MutationPromise<UpdatePlayerCardLevelData, UpdatePlayerCardLevelVariables>;

interface GetUserCharactersRef {
  /* Allow users to create refs without passing in DataConnect */
  (): QueryRef<GetUserCharactersData, undefined>;
  /* Allow users to pass in custom DataConnect instances */
  (dc: DataConnect): QueryRef<GetUserCharactersData, undefined>;
  operationName: string;
}
export const getUserCharactersRef: GetUserCharactersRef;

export function getUserCharacters(): QueryPromise<GetUserCharactersData, undefined>;
export function getUserCharacters(dc: DataConnect): QueryPromise<GetUserCharactersData, undefined>;

