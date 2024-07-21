import { PATH_DB } from '../constants/contacts.js';
import * as fs from 'node:fs/promises';

export const getAllContacts = async () => {
  try{
  let getFile = await fs.readFile(PATH_DB, { encoding: 'UTF-8' });
  const contactsArr = JSON.parse(getFile);
  return contactsArr;
  }
  catch (error) {
    console.log(error);
  }
};

console.loga(await getAllContacts());
