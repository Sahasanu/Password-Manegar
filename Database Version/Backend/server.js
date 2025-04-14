const express = require('express');
const dotenv = require('dotenv');
const { MongoClient, ObjectId } = require('mongodb');
const bodyParser = require('body-parser');
const cors = require('cors');

dotenv.config();
const app = express();
app.use(bodyParser.json());
app.use(cors());

const port = 3000;
const url = 'mongodb://localhost:27017';
const client = new MongoClient(url);
const dbName = 'PassMan';

async function main() {
  await client.connect();
}
main();

app.get('/', async (req, res) => {
  const db = client.db(dbName);
  const collection = db.collection('Passwords');
  const findResult = await collection.find({}).toArray();
  res.json(findResult);
});
app.put('/:id', async (req, res) => {
  const id = req.params.id;
  const updatedPassword = req.body;
  const db = client.db(dbName);
  const collection = db.collection('Passwords');
  const result = await collection.updateOne(
    { _id: new ObjectId(id) },
    { $set: updatedPassword }
  );
  res.send({ success: true, result });
});

app.post('/', async (req, res) => {
  const password = req.body;
  const db = client.db(dbName);
  const collection = db.collection('Passwords');
  const result = await collection.insertOne(password);
  res.send({ success: true, result });
});

app.delete('/:id', async (req, res) => {
  const id = req.params.id;
  const db = client.db(dbName);
  const collection = db.collection('Passwords');
  const result = await collection.deleteOne({ _id: new ObjectId(id) });
  res.send({ success: true, result });
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
