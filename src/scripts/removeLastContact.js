import { PATH_DB } from '../constants/contacts.js';
import * as fs from 'node:fs/promises';

export const removeLastContact = async () => {
    try {
     const getFile = await fs.readFile(PATH_DB, { encoding: 'UTF-8' });
        let newContactsArr = JSON.parse(getFile);
       
        newContactsArr.pop();
   
        await fs.writeFile(PATH_DB, JSON.stringify(newContactsArr, null, 2));   
    } catch (error) {
        console.log(error);  
    }
};

removeLastContact();
