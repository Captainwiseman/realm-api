// import { mongoUri } from "../../_secrets";
import moment from "moment";

import { MongoClient } from "mongodb";
const uri = "mongodb+srv://WhiteTower:Shnozoisgolf1@cluster0-kibwm.mongodb.net/test?retryWrites=true&w=majority";

const DATABASE_NAME = "World";

const HISTORY_COLLECTION_NAME = "History";
const REALMS_COLLECTION_NAME = "Realms";
const LANDS_COLLECTION_NAME = "Lands";

async function connectToDb() {
  const client = new MongoClient(uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true
  });

  const clientConnection = await client.connect();
  return clientConnection;
}

async function terminateConnection(client) {
  return client.close();
}

async function createHistoryEventInDb(historyEvent) {
  const client = await connectToDb();

  console.log(
    `Connecting to ${DATABASE_NAME} Database, adding an History Event to ${HISTORY_COLLECTION_NAME} Collection`
  );
  try {
    const results = await client
      .db(DATABASE_NAME)
      .collection(HISTORY_COLLECTION_NAME)
      .insertOne(historyEvent);

    return results.ops;
  } catch (e) {
    console.log(e);
  } finally {
    await terminateConnection(client);
  }
}

async function readAllHistoryDataFromDB() {
  const client = await connectToDb();

  console.log(
    `Connecting to ${DATABASE_NAME} Database, looking for all records in ${HISTORY_COLLECTION_NAME} Collection`,
    "database"
  );

  try {
    const results = await client
      .db(DATABASE_NAME)
      .collection(HISTORY_COLLECTION_NAME)
      .find({})
      .toArray();
    return results;
  } catch (e) {
    console.log(e, "database");
  } finally {
    await terminateConnection(client);
  }
}

async function readAllRealmsDataFromDB() {
  const client = await connectToDb();

  console.log(
    `Connecting to ${DATABASE_NAME} Database, looking for all records in ${REALMS_COLLECTION_NAME} Collection`,
    "database"
  );

  try {
    const results = await client
      .db(DATABASE_NAME)
      .collection(REALMS_COLLECTION_NAME)
      .find({})
      .toArray();
    return results;
  } catch (e) {
    log(e, "database");
  } finally {
    await terminateConnection(client);
  }
}

async function updateRealmDataInDB(realm) {
  const client = await connectToDb();

  console.log(
    `Connecting to ${DATABASE_NAME} Database, updatings all records in ${REALMS_COLLECTION_NAME} Collection`,
    "database"
  );
  try {
    const updatedRealm = await client
      .db(DATABASE_NAME)
      .collection(REALMS_COLLECTION_NAME)
      .updateOne(
        { _id: realm._id },
        {
          $set: {
            _lastUpdated: moment().format()
          }
        }
      );
    return updatedRealm;
  } catch (e) {
    console.log(e, "database");
  } finally {
    console.log("Ended", database);
    await terminateConnection(client);
  }
}

async function readAllLandsDataFromDB() {
  const client = await connectToDb();

  console.log(
    `Connecting to ${DATABASE_NAME} Database, looking for all records in ${LANDS_COLLECTION_NAME} Collection.`,
    "database"
  );

  try {
    const results = await client
      .db(DATABASE_NAME)
      .collection(LANDS_COLLECTION_NAME)
      .find({})
      .toArray();
    return results;
  } catch (e) {
    console.log(e, "database");
  } finally {
    await terminateConnection(client);
  }
}

async function updateLandDataInDB(land) {
  const client = await connectToDb();

  console.log(
    `Connecting to ${DATABASE_NAME} Database, updatings all records in ${LANDS_COLLECTION_NAME} Collection.`,
    "database"
  );
  try {
    const updatedland = await client
      .db(DATABASE_NAME)
      .collection(REALMS_COLLECTION_NAME)
      .updateOne(
        { _id: land._id },
        {
          $set: {
            _lastUpdated: moment().format()
          }
        }
      );
    return updatedRealm;
  } catch (e) {
    console.log(e, "database");
  } finally {
    console.log("ended", "database");
    await terminateConnection(client);
  }
}

export default {
  createHistoryEventInDb,
  readAllHistoryDataFromDB,
  readAllRealmsDataFromDB,
  updateRealmDataInDB,
  readAllLandsDataFromDB,
  updateLandDataInDB,
};
