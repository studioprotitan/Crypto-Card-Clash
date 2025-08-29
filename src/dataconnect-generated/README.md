# Generated TypeScript README
This README will guide you through the process of using the generated JavaScript SDK package for the connector `example`. It will also provide examples on how to use your generated SDK to call your Data Connect queries and mutations.

**If you're looking for the `React README`, you can find it at [`dataconnect-generated/react/README.md`](./react/README.md)**

***NOTE:** This README is generated alongside the generated SDK. If you make changes to this file, they will be overwritten when the SDK is regenerated.*

# Table of Contents
- [**Overview**](#generated-javascript-readme)
- [**Accessing the connector**](#accessing-the-connector)
  - [*Connecting to the local Emulator*](#connecting-to-the-local-emulator)
- [**Queries**](#queries)
  - [*ListTradableAetheriaCards*](#listtradableaetheriacards)
  - [*GetUserCharacters*](#getusercharacters)
- [**Mutations**](#mutations)
  - [*InsertAetheriaCard*](#insertaetheriacard)
  - [*UpdatePlayerCardLevel*](#updateplayercardlevel)

# Accessing the connector
A connector is a collection of Queries and Mutations. One SDK is generated for each connector - this SDK is generated for the connector `example`. You can find more information about connectors in the [Data Connect documentation](https://firebase.google.com/docs/data-connect#how-does).

You can use this generated SDK by importing from the package `@dataconnect/generated` as shown below. Both CommonJS and ESM imports are supported.

You can also follow the instructions from the [Data Connect documentation](https://firebase.google.com/docs/data-connect/web-sdk#set-client).

```typescript
import { getDataConnect } from 'firebase/data-connect';
import { connectorConfig } from '@dataconnect/generated';

const dataConnect = getDataConnect(connectorConfig);
```

## Connecting to the local Emulator
By default, the connector will connect to the production service.

To connect to the emulator, you can use the following code.
You can also follow the emulator instructions from the [Data Connect documentation](https://firebase.google.com/docs/data-connect/web-sdk#instrument-clients).

```typescript
import { connectDataConnectEmulator, getDataConnect } from 'firebase/data-connect';
import { connectorConfig } from '@dataconnect/generated';

const dataConnect = getDataConnect(connectorConfig);
connectDataConnectEmulator(dataConnect, 'localhost', 9399);
```

After it's initialized, you can call your Data Connect [queries](#queries) and [mutations](#mutations) from your generated SDK.

# Queries

There are two ways to execute a Data Connect Query using the generated Web SDK:
- Using a Query Reference function, which returns a `QueryRef`
  - The `QueryRef` can be used as an argument to `executeQuery()`, which will execute the Query and return a `QueryPromise`
- Using an action shortcut function, which returns a `QueryPromise`
  - Calling the action shortcut function will execute the Query and return a `QueryPromise`

The following is true for both the action shortcut function and the `QueryRef` function:
- The `QueryPromise` returned will resolve to the result of the Query once it has finished executing
- If the Query accepts arguments, both the action shortcut function and the `QueryRef` function accept a single argument: an object that contains all the required variables (and the optional variables) for the Query
- Both functions can be called with or without passing in a `DataConnect` instance as an argument. If no `DataConnect` argument is passed in, then the generated SDK will call `getDataConnect(connectorConfig)` behind the scenes for you.

Below are examples of how to use the `example` connector's generated functions to execute each query. You can also follow the examples from the [Data Connect documentation](https://firebase.google.com/docs/data-connect/web-sdk#using-queries).

## ListTradableAetheriaCards
You can execute the `ListTradableAetheriaCards` query using the following action shortcut function, or by calling `executeQuery()` after calling the following `QueryRef` function, both of which are defined in [dataconnect-generated/index.d.ts](./index.d.ts):
```typescript
listTradableAetheriaCards(): QueryPromise<ListTradableAetheriaCardsData, undefined>;

interface ListTradableAetheriaCardsRef {
  ...
  /* Allow users to create refs without passing in DataConnect */
  (): QueryRef<ListTradableAetheriaCardsData, undefined>;
}
export const listTradableAetheriaCardsRef: ListTradableAetheriaCardsRef;
```
You can also pass in a `DataConnect` instance to the action shortcut function or `QueryRef` function.
```typescript
listTradableAetheriaCards(dc: DataConnect): QueryPromise<ListTradableAetheriaCardsData, undefined>;

interface ListTradableAetheriaCardsRef {
  ...
  (dc: DataConnect): QueryRef<ListTradableAetheriaCardsData, undefined>;
}
export const listTradableAetheriaCardsRef: ListTradableAetheriaCardsRef;
```

If you need the name of the operation without creating a ref, you can retrieve the operation name by calling the `operationName` property on the listTradableAetheriaCardsRef:
```typescript
const name = listTradableAetheriaCardsRef.operationName;
console.log(name);
```

### Variables
The `ListTradableAetheriaCards` query has no variables.
### Return Type
Recall that executing the `ListTradableAetheriaCards` query returns a `QueryPromise` that resolves to an object with a `data` property.

The `data` property is an object of type `ListTradableAetheriaCardsData`, which is defined in [dataconnect-generated/index.d.ts](./index.d.ts). It has the following fields:
```typescript
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
```
### Using `ListTradableAetheriaCards`'s action shortcut function

```typescript
import { getDataConnect } from 'firebase/data-connect';
import { connectorConfig, listTradableAetheriaCards } from '@dataconnect/generated';


// Call the `listTradableAetheriaCards()` function to execute the query.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await listTradableAetheriaCards();

// You can also pass in a `DataConnect` instance to the action shortcut function.
const dataConnect = getDataConnect(connectorConfig);
const { data } = await listTradableAetheriaCards(dataConnect);

console.log(data.aetheriaCards);

// Or, you can use the `Promise` API.
listTradableAetheriaCards().then((response) => {
  const data = response.data;
  console.log(data.aetheriaCards);
});
```

### Using `ListTradableAetheriaCards`'s `QueryRef` function

```typescript
import { getDataConnect, executeQuery } from 'firebase/data-connect';
import { connectorConfig, listTradableAetheriaCardsRef } from '@dataconnect/generated';


// Call the `listTradableAetheriaCardsRef()` function to get a reference to the query.
const ref = listTradableAetheriaCardsRef();

// You can also pass in a `DataConnect` instance to the `QueryRef` function.
const dataConnect = getDataConnect(connectorConfig);
const ref = listTradableAetheriaCardsRef(dataConnect);

// Call `executeQuery()` on the reference to execute the query.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await executeQuery(ref);

console.log(data.aetheriaCards);

// Or, you can use the `Promise` API.
executeQuery(ref).then((response) => {
  const data = response.data;
  console.log(data.aetheriaCards);
});
```

## GetUserCharacters
You can execute the `GetUserCharacters` query using the following action shortcut function, or by calling `executeQuery()` after calling the following `QueryRef` function, both of which are defined in [dataconnect-generated/index.d.ts](./index.d.ts):
```typescript
getUserCharacters(): QueryPromise<GetUserCharactersData, undefined>;

interface GetUserCharactersRef {
  ...
  /* Allow users to create refs without passing in DataConnect */
  (): QueryRef<GetUserCharactersData, undefined>;
}
export const getUserCharactersRef: GetUserCharactersRef;
```
You can also pass in a `DataConnect` instance to the action shortcut function or `QueryRef` function.
```typescript
getUserCharacters(dc: DataConnect): QueryPromise<GetUserCharactersData, undefined>;

interface GetUserCharactersRef {
  ...
  (dc: DataConnect): QueryRef<GetUserCharactersData, undefined>;
}
export const getUserCharactersRef: GetUserCharactersRef;
```

If you need the name of the operation without creating a ref, you can retrieve the operation name by calling the `operationName` property on the getUserCharactersRef:
```typescript
const name = getUserCharactersRef.operationName;
console.log(name);
```

### Variables
The `GetUserCharacters` query has no variables.
### Return Type
Recall that executing the `GetUserCharacters` query returns a `QueryPromise` that resolves to an object with a `data` property.

The `data` property is an object of type `GetUserCharactersData`, which is defined in [dataconnect-generated/index.d.ts](./index.d.ts). It has the following fields:
```typescript
export interface GetUserCharactersData {
  characters: ({
    id: UUIDString;
    characterName: string;
    characterClass: string;
    level: number;
  } & Character_Key)[];
}
```
### Using `GetUserCharacters`'s action shortcut function

```typescript
import { getDataConnect } from 'firebase/data-connect';
import { connectorConfig, getUserCharacters } from '@dataconnect/generated';


// Call the `getUserCharacters()` function to execute the query.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await getUserCharacters();

// You can also pass in a `DataConnect` instance to the action shortcut function.
const dataConnect = getDataConnect(connectorConfig);
const { data } = await getUserCharacters(dataConnect);

console.log(data.characters);

// Or, you can use the `Promise` API.
getUserCharacters().then((response) => {
  const data = response.data;
  console.log(data.characters);
});
```

### Using `GetUserCharacters`'s `QueryRef` function

```typescript
import { getDataConnect, executeQuery } from 'firebase/data-connect';
import { connectorConfig, getUserCharactersRef } from '@dataconnect/generated';


// Call the `getUserCharactersRef()` function to get a reference to the query.
const ref = getUserCharactersRef();

// You can also pass in a `DataConnect` instance to the `QueryRef` function.
const dataConnect = getDataConnect(connectorConfig);
const ref = getUserCharactersRef(dataConnect);

// Call `executeQuery()` on the reference to execute the query.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await executeQuery(ref);

console.log(data.characters);

// Or, you can use the `Promise` API.
executeQuery(ref).then((response) => {
  const data = response.data;
  console.log(data.characters);
});
```

# Mutations

There are two ways to execute a Data Connect Mutation using the generated Web SDK:
- Using a Mutation Reference function, which returns a `MutationRef`
  - The `MutationRef` can be used as an argument to `executeMutation()`, which will execute the Mutation and return a `MutationPromise`
- Using an action shortcut function, which returns a `MutationPromise`
  - Calling the action shortcut function will execute the Mutation and return a `MutationPromise`

The following is true for both the action shortcut function and the `MutationRef` function:
- The `MutationPromise` returned will resolve to the result of the Mutation once it has finished executing
- If the Mutation accepts arguments, both the action shortcut function and the `MutationRef` function accept a single argument: an object that contains all the required variables (and the optional variables) for the Mutation
- Both functions can be called with or without passing in a `DataConnect` instance as an argument. If no `DataConnect` argument is passed in, then the generated SDK will call `getDataConnect(connectorConfig)` behind the scenes for you.

Below are examples of how to use the `example` connector's generated functions to execute each mutation. You can also follow the examples from the [Data Connect documentation](https://firebase.google.com/docs/data-connect/web-sdk#using-mutations).

## InsertAetheriaCard
You can execute the `InsertAetheriaCard` mutation using the following action shortcut function, or by calling `executeMutation()` after calling the following `MutationRef` function, both of which are defined in [dataconnect-generated/index.d.ts](./index.d.ts):
```typescript
insertAetheriaCard(): MutationPromise<InsertAetheriaCardData, undefined>;

interface InsertAetheriaCardRef {
  ...
  /* Allow users to create refs without passing in DataConnect */
  (): MutationRef<InsertAetheriaCardData, undefined>;
}
export const insertAetheriaCardRef: InsertAetheriaCardRef;
```
You can also pass in a `DataConnect` instance to the action shortcut function or `MutationRef` function.
```typescript
insertAetheriaCard(dc: DataConnect): MutationPromise<InsertAetheriaCardData, undefined>;

interface InsertAetheriaCardRef {
  ...
  (dc: DataConnect): MutationRef<InsertAetheriaCardData, undefined>;
}
export const insertAetheriaCardRef: InsertAetheriaCardRef;
```

If you need the name of the operation without creating a ref, you can retrieve the operation name by calling the `operationName` property on the insertAetheriaCardRef:
```typescript
const name = insertAetheriaCardRef.operationName;
console.log(name);
```

### Variables
The `InsertAetheriaCard` mutation has no variables.
### Return Type
Recall that executing the `InsertAetheriaCard` mutation returns a `MutationPromise` that resolves to an object with a `data` property.

The `data` property is an object of type `InsertAetheriaCardData`, which is defined in [dataconnect-generated/index.d.ts](./index.d.ts). It has the following fields:
```typescript
export interface InsertAetheriaCardData {
  aetheriaCard_insert: AetheriaCard_Key;
}
```
### Using `InsertAetheriaCard`'s action shortcut function

```typescript
import { getDataConnect } from 'firebase/data-connect';
import { connectorConfig, insertAetheriaCard } from '@dataconnect/generated';


// Call the `insertAetheriaCard()` function to execute the mutation.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await insertAetheriaCard();

// You can also pass in a `DataConnect` instance to the action shortcut function.
const dataConnect = getDataConnect(connectorConfig);
const { data } = await insertAetheriaCard(dataConnect);

console.log(data.aetheriaCard_insert);

// Or, you can use the `Promise` API.
insertAetheriaCard().then((response) => {
  const data = response.data;
  console.log(data.aetheriaCard_insert);
});
```

### Using `InsertAetheriaCard`'s `MutationRef` function

```typescript
import { getDataConnect, executeMutation } from 'firebase/data-connect';
import { connectorConfig, insertAetheriaCardRef } from '@dataconnect/generated';


// Call the `insertAetheriaCardRef()` function to get a reference to the mutation.
const ref = insertAetheriaCardRef();

// You can also pass in a `DataConnect` instance to the `MutationRef` function.
const dataConnect = getDataConnect(connectorConfig);
const ref = insertAetheriaCardRef(dataConnect);

// Call `executeMutation()` on the reference to execute the mutation.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await executeMutation(ref);

console.log(data.aetheriaCard_insert);

// Or, you can use the `Promise` API.
executeMutation(ref).then((response) => {
  const data = response.data;
  console.log(data.aetheriaCard_insert);
});
```

## UpdatePlayerCardLevel
You can execute the `UpdatePlayerCardLevel` mutation using the following action shortcut function, or by calling `executeMutation()` after calling the following `MutationRef` function, both of which are defined in [dataconnect-generated/index.d.ts](./index.d.ts):
```typescript
updatePlayerCardLevel(vars: UpdatePlayerCardLevelVariables): MutationPromise<UpdatePlayerCardLevelData, UpdatePlayerCardLevelVariables>;

interface UpdatePlayerCardLevelRef {
  ...
  /* Allow users to create refs without passing in DataConnect */
  (vars: UpdatePlayerCardLevelVariables): MutationRef<UpdatePlayerCardLevelData, UpdatePlayerCardLevelVariables>;
}
export const updatePlayerCardLevelRef: UpdatePlayerCardLevelRef;
```
You can also pass in a `DataConnect` instance to the action shortcut function or `MutationRef` function.
```typescript
updatePlayerCardLevel(dc: DataConnect, vars: UpdatePlayerCardLevelVariables): MutationPromise<UpdatePlayerCardLevelData, UpdatePlayerCardLevelVariables>;

interface UpdatePlayerCardLevelRef {
  ...
  (dc: DataConnect, vars: UpdatePlayerCardLevelVariables): MutationRef<UpdatePlayerCardLevelData, UpdatePlayerCardLevelVariables>;
}
export const updatePlayerCardLevelRef: UpdatePlayerCardLevelRef;
```

If you need the name of the operation without creating a ref, you can retrieve the operation name by calling the `operationName` property on the updatePlayerCardLevelRef:
```typescript
const name = updatePlayerCardLevelRef.operationName;
console.log(name);
```

### Variables
The `UpdatePlayerCardLevel` mutation requires an argument of type `UpdatePlayerCardLevelVariables`, which is defined in [dataconnect-generated/index.d.ts](./index.d.ts). It has the following fields:

```typescript
export interface UpdatePlayerCardLevelVariables {
  id: UUIDString;
  level: number;
}
```
### Return Type
Recall that executing the `UpdatePlayerCardLevel` mutation returns a `MutationPromise` that resolves to an object with a `data` property.

The `data` property is an object of type `UpdatePlayerCardLevelData`, which is defined in [dataconnect-generated/index.d.ts](./index.d.ts). It has the following fields:
```typescript
export interface UpdatePlayerCardLevelData {
  playerCard_update?: PlayerCard_Key | null;
}
```
### Using `UpdatePlayerCardLevel`'s action shortcut function

```typescript
import { getDataConnect } from 'firebase/data-connect';
import { connectorConfig, updatePlayerCardLevel, UpdatePlayerCardLevelVariables } from '@dataconnect/generated';

// The `UpdatePlayerCardLevel` mutation requires an argument of type `UpdatePlayerCardLevelVariables`:
const updatePlayerCardLevelVars: UpdatePlayerCardLevelVariables = {
  id: ..., 
  level: ..., 
};

// Call the `updatePlayerCardLevel()` function to execute the mutation.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await updatePlayerCardLevel(updatePlayerCardLevelVars);
// Variables can be defined inline as well.
const { data } = await updatePlayerCardLevel({ id: ..., level: ..., });

// You can also pass in a `DataConnect` instance to the action shortcut function.
const dataConnect = getDataConnect(connectorConfig);
const { data } = await updatePlayerCardLevel(dataConnect, updatePlayerCardLevelVars);

console.log(data.playerCard_update);

// Or, you can use the `Promise` API.
updatePlayerCardLevel(updatePlayerCardLevelVars).then((response) => {
  const data = response.data;
  console.log(data.playerCard_update);
});
```

### Using `UpdatePlayerCardLevel`'s `MutationRef` function

```typescript
import { getDataConnect, executeMutation } from 'firebase/data-connect';
import { connectorConfig, updatePlayerCardLevelRef, UpdatePlayerCardLevelVariables } from '@dataconnect/generated';

// The `UpdatePlayerCardLevel` mutation requires an argument of type `UpdatePlayerCardLevelVariables`:
const updatePlayerCardLevelVars: UpdatePlayerCardLevelVariables = {
  id: ..., 
  level: ..., 
};

// Call the `updatePlayerCardLevelRef()` function to get a reference to the mutation.
const ref = updatePlayerCardLevelRef(updatePlayerCardLevelVars);
// Variables can be defined inline as well.
const ref = updatePlayerCardLevelRef({ id: ..., level: ..., });

// You can also pass in a `DataConnect` instance to the `MutationRef` function.
const dataConnect = getDataConnect(connectorConfig);
const ref = updatePlayerCardLevelRef(dataConnect, updatePlayerCardLevelVars);

// Call `executeMutation()` on the reference to execute the mutation.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await executeMutation(ref);

console.log(data.playerCard_update);

// Or, you can use the `Promise` API.
executeMutation(ref).then((response) => {
  const data = response.data;
  console.log(data.playerCard_update);
});
```

