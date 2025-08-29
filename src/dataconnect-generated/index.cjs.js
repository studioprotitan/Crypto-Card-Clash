const { queryRef, executeQuery, mutationRef, executeMutation, validateArgs } = require('firebase/data-connect');

const connectorConfig = {
  connector: 'example',
  service: 'restoreconfigonly',
  location: 'us-east4'
};
exports.connectorConfig = connectorConfig;

const insertAetheriaCardRef = (dc) => {
  const { dc: dcInstance} = validateArgs(connectorConfig, dc, undefined);
  dcInstance._useGeneratedSdk();
  return mutationRef(dcInstance, 'InsertAetheriaCard');
}
insertAetheriaCardRef.operationName = 'InsertAetheriaCard';
exports.insertAetheriaCardRef = insertAetheriaCardRef;

exports.insertAetheriaCard = function insertAetheriaCard(dc) {
  return executeMutation(insertAetheriaCardRef(dc));
};

const listTradableAetheriaCardsRef = (dc) => {
  const { dc: dcInstance} = validateArgs(connectorConfig, dc, undefined);
  dcInstance._useGeneratedSdk();
  return queryRef(dcInstance, 'ListTradableAetheriaCards');
}
listTradableAetheriaCardsRef.operationName = 'ListTradableAetheriaCards';
exports.listTradableAetheriaCardsRef = listTradableAetheriaCardsRef;

exports.listTradableAetheriaCards = function listTradableAetheriaCards(dc) {
  return executeQuery(listTradableAetheriaCardsRef(dc));
};

const updatePlayerCardLevelRef = (dcOrVars, vars) => {
  const { dc: dcInstance, vars: inputVars} = validateArgs(connectorConfig, dcOrVars, vars, true);
  dcInstance._useGeneratedSdk();
  return mutationRef(dcInstance, 'UpdatePlayerCardLevel', inputVars);
}
updatePlayerCardLevelRef.operationName = 'UpdatePlayerCardLevel';
exports.updatePlayerCardLevelRef = updatePlayerCardLevelRef;

exports.updatePlayerCardLevel = function updatePlayerCardLevel(dcOrVars, vars) {
  return executeMutation(updatePlayerCardLevelRef(dcOrVars, vars));
};

const getUserCharactersRef = (dc) => {
  const { dc: dcInstance} = validateArgs(connectorConfig, dc, undefined);
  dcInstance._useGeneratedSdk();
  return queryRef(dcInstance, 'GetUserCharacters');
}
getUserCharactersRef.operationName = 'GetUserCharacters';
exports.getUserCharactersRef = getUserCharactersRef;

exports.getUserCharacters = function getUserCharacters(dc) {
  return executeQuery(getUserCharactersRef(dc));
};
