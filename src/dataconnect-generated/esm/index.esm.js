import { queryRef, executeQuery, mutationRef, executeMutation, validateArgs } from 'firebase/data-connect';

export const connectorConfig = {
  connector: 'example',
  service: 'restoreconfigonly',
  location: 'us-east4'
};

export const insertAetheriaCardRef = (dc) => {
  const { dc: dcInstance} = validateArgs(connectorConfig, dc, undefined);
  dcInstance._useGeneratedSdk();
  return mutationRef(dcInstance, 'InsertAetheriaCard');
}
insertAetheriaCardRef.operationName = 'InsertAetheriaCard';

export function insertAetheriaCard(dc) {
  return executeMutation(insertAetheriaCardRef(dc));
}

export const listTradableAetheriaCardsRef = (dc) => {
  const { dc: dcInstance} = validateArgs(connectorConfig, dc, undefined);
  dcInstance._useGeneratedSdk();
  return queryRef(dcInstance, 'ListTradableAetheriaCards');
}
listTradableAetheriaCardsRef.operationName = 'ListTradableAetheriaCards';

export function listTradableAetheriaCards(dc) {
  return executeQuery(listTradableAetheriaCardsRef(dc));
}

export const updatePlayerCardLevelRef = (dcOrVars, vars) => {
  const { dc: dcInstance, vars: inputVars} = validateArgs(connectorConfig, dcOrVars, vars, true);
  dcInstance._useGeneratedSdk();
  return mutationRef(dcInstance, 'UpdatePlayerCardLevel', inputVars);
}
updatePlayerCardLevelRef.operationName = 'UpdatePlayerCardLevel';

export function updatePlayerCardLevel(dcOrVars, vars) {
  return executeMutation(updatePlayerCardLevelRef(dcOrVars, vars));
}

export const getUserCharactersRef = (dc) => {
  const { dc: dcInstance} = validateArgs(connectorConfig, dc, undefined);
  dcInstance._useGeneratedSdk();
  return queryRef(dcInstance, 'GetUserCharacters');
}
getUserCharactersRef.operationName = 'GetUserCharacters';

export function getUserCharacters(dc) {
  return executeQuery(getUserCharactersRef(dc));
}

