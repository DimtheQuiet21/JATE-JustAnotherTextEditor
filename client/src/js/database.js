import { openDB } from 'idb';

const DATA_VAR = 'jate';

const initdb = async () =>
  openDB('jate', 1, {
    upgrade(db) {
      if (db.objectStoreNames.contains('jate')) {
        console.log('jate database already exists');
        return;
      }
      db.createObjectStore('jate', { keyPath: 'id', autoIncrement: true });
      console.log('jate database created');
    },
  });

// TODO: Add logic to a method that accepts some content and adds it to the database
export const putDb = async (id, content) => {
  try {
    console.log('PUT to the database');
    const jateDb = await openDB(DATA_VAR, 1);
    const tx = jateDb.transaction(DATA_VAR, 'readwrite');
    const store = tx.objectStore(DATA_VAR);
    const request = store.put({ id: id, jate: content });
    const result = await request;
    console.log('Data saved to the database', result);
  }
  catch (err) {
    console.log(err)
  }
}

// TODO: Add logic for a method that gets all the content from the database
export const getDb = async () => {
  try {
    console.log('GET all from the database');
    const jateDb = await openDB(DATA_VAR, 1);
    const tx = jateDb.transaction(DATA_VAR, 'readonly');
    const store = tx.objectStore(DATA_VAR);
    const request = store.getAll();
    const result = await request;
    console.log('result.value', result);
    return result;
  }
  catch (err) {
    console.log(err)
  }
};

initdb();
