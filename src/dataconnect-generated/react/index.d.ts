import { InsertAetheriaCardData, ListTradableAetheriaCardsData, UpdatePlayerCardLevelData, UpdatePlayerCardLevelVariables, GetUserCharactersData } from '../';
import { UseDataConnectQueryResult, useDataConnectQueryOptions, UseDataConnectMutationResult, useDataConnectMutationOptions} from '@tanstack-query-firebase/react/data-connect';
import { UseQueryResult, UseMutationResult} from '@tanstack/react-query';
import { DataConnect } from 'firebase/data-connect';
import { FirebaseError } from 'firebase/app';


export function useInsertAetheriaCard(options?: useDataConnectMutationOptions<InsertAetheriaCardData, FirebaseError, void>): UseDataConnectMutationResult<InsertAetheriaCardData, undefined>;
export function useInsertAetheriaCard(dc: DataConnect, options?: useDataConnectMutationOptions<InsertAetheriaCardData, FirebaseError, void>): UseDataConnectMutationResult<InsertAetheriaCardData, undefined>;

export function useListTradableAetheriaCards(options?: useDataConnectQueryOptions<ListTradableAetheriaCardsData>): UseDataConnectQueryResult<ListTradableAetheriaCardsData, undefined>;
export function useListTradableAetheriaCards(dc: DataConnect, options?: useDataConnectQueryOptions<ListTradableAetheriaCardsData>): UseDataConnectQueryResult<ListTradableAetheriaCardsData, undefined>;

export function useUpdatePlayerCardLevel(options?: useDataConnectMutationOptions<UpdatePlayerCardLevelData, FirebaseError, UpdatePlayerCardLevelVariables>): UseDataConnectMutationResult<UpdatePlayerCardLevelData, UpdatePlayerCardLevelVariables>;
export function useUpdatePlayerCardLevel(dc: DataConnect, options?: useDataConnectMutationOptions<UpdatePlayerCardLevelData, FirebaseError, UpdatePlayerCardLevelVariables>): UseDataConnectMutationResult<UpdatePlayerCardLevelData, UpdatePlayerCardLevelVariables>;

export function useGetUserCharacters(options?: useDataConnectQueryOptions<GetUserCharactersData>): UseDataConnectQueryResult<GetUserCharactersData, undefined>;
export function useGetUserCharacters(dc: DataConnect, options?: useDataConnectQueryOptions<GetUserCharactersData>): UseDataConnectQueryResult<GetUserCharactersData, undefined>;
