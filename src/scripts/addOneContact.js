import { PATH_DB } from '../constants/contacts.js';
import { createFakeContact } from '../utils/createFakeContact.js';
import * as fs from 'node:fs/promises';

export const addOneContact = async () => {
     try {
        const getFile = await fs.readFile(PATH_DB, { encoding: 'UTF-8' });
        let newContactsArr = JSON.parse(getFile);
            let newContact = createFakeContact();
            newContactsArr.push(newContact);
   
        await fs.writeFile(PATH_DB, JSON.stringify(newContactsArr, null, 2));
    }
    catch (error){
        console.log(error);
    }
};

addOneContact();
