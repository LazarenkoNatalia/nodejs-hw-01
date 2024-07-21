import { PATH_DB } from '../constants/contacts.js';
import * as fs from 'node:fs/promises';

export const countContacts = async () => {
     try {
        const getFile = await fs.readFile(PATH_DB, { encoding: 'UTF-8' });
        let contactsArr = JSON.parse(getFile);
         return contactsArr.length;
    }
    catch (error){
        console.log(error);
    }
};

console.log(await countContacts());
