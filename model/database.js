const { MongoClient, MongoDriverError } = require('mongodb');

const uri =
  'mongodb+srv://ulathi:ethereum@ulathi.gbvwxu8.mongodb.net/?retryWrites=true&w=majority';

const client = new MongoClient(uri);

const dataArr = [];

const run = async () => {
  try {
    await client.connect();
    const database = client.db('storage');
    const products = database.collection('products');
    const data = await products.find().toArray();
    const _products = database.collection('ads');
    const _data = await _products.find().next();

    //  error comes from here

    return [data, _data];
  } catch (err) {
    console.log(err.stack);
  } finally {
    await client.close();
  }
};

module.exports = run;
