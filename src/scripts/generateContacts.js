import { PATH_DB } from '../constants/contacts.js';
import { createFakeContact } from '../utils/createFakeContact.js';
import * as fs from 'node:fs/promises';

const generateContacts = async (number) => {
    try {
        const getFile = await fs.readFile(PATH_DB, { encoding: 'UTF-8' });
        let newContactsArr = JSON.parse(getFile);
        for (let i = 1; i <= number; i++) {
            let newContact = createFakeContact();
            newContactsArr.push(newContact);
        }
   
        await fs.writeFile(PATH_DB, JSON.stringify(newContactsArr, null, 2));
    }
    catch (error){
        console.log(error);
    }
};

generateContacts(5);
