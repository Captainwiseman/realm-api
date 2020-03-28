// import { mongoUri } from "../../_secrets";
import moment from "moment";

import { MongoClient } from "mongodb";
const uri =
  "mongodb+srv://CaptainWiseman:Shnozoisgolf@dodo-exchange-board-xhoo3.mongodb.net/test?retryWrites=true&w=majority";

const DATABASE_NAME = "DoDoXChange";
const LISTINGS_COLLECTION_NAME = "Listings";

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

async function createNewListingInCollection(listing) {
  const client = await connectToDb();

  console.log(
    `Connecting to ${DATABASE_NAME} Database, adding a listing to ${LISTINGS_COLLECTION_NAME} Collection`
  );
  try {
    const results = await client
      .db(DATABASE_NAME)
      .collection(LISTINGS_COLLECTION_NAME)
      .insertOne(listing);

    return results.ops;
  } catch (e) {
    console.log(e);
  } finally {
    await terminateConnection(client);
  }
}

async function readAllListingsInCollection() {
  const client = await connectToDb();

  console.log(
    `Connecting to ${DATABASE_NAME} Database, requesting listings in ${LISTINGS_COLLECTION_NAME} Collection`,
    "database"
  );

  try {
    const results = await client
      .db(DATABASE_NAME)
      .collection(LISTINGS_COLLECTION_NAME)
      .find({})
      .toArray();
    return results;
  } catch (e) {
    console.log(e, "database");
  } finally {
    await terminateConnection(client);
  }
}

async function updateListingInCollection(listing) {
  const client = await connectToDb();

  console.log(
    `Connecting to ${DATABASE_NAME} Database, updatings all records in ${LISTINGS_COLLECTION_NAME} Collection`,
    "database"
  );
  try {
    const updatedListing = await client
      .db(DATABASE_NAME)
      .collection(LISTINGS_COLLECTION_NAME)
      .updateOne(
        { _id: listing._id },
        {
          $set: {
            _lastUpdated: moment().format()
          }
        }
      );
    return updatedListing;
  } catch (e) {
    console.log(e, "database");
  } finally {
    console.log("Ended", database);
    await terminateConnection(client);
  }
}

async function deleteListingInCollection(listing) {
  const client = await connectToDb();

  log(
    `Connecting to ${DATABASE_NAME} Database, removing listing in ${LISTINGS_COLLECTION_NAME} Collection.`,
    "database"
  );
  try {
    const results = await client
      .db(DATABASE_NAME)
      .collection(LANDS_COLLECTION_NAME)
      .deleteOne({ _id: listing._id });
    return results;
  } catch (e) {
    log(e, "database");
  } finally {
    await terminateConnection(client);
  }
}

export default {
  createNewListingInCollection,
  readAllListingsInCollection,
  updateListingInCollection,
  deleteListingInCollection
};
