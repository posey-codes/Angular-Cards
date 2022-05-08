import { Contact } from "./contact";

export const CONTACTS: Contact[] = [
    {
        id: 0,
        fName: 'John',
        lName: 'Adams',
        phoneNumber: '701-404-0298',
        email: "adamjohns@gmail.com"
    },
    {
        id: 1,
        fName: 'Parker',
        lName: 'Hanson',
        phoneNumber: '701-442-0937',
        email: "hansontheparker@gmail.com"
    },
    {
        id: 2,
        fName: 'Eren',
        lName: 'Jaeger',
        phoneNumber: '123-543-2873',
        email: "rumbling@gmail.com"
    },
    
];

export function findContactByName(contactID: number) {
    return CONTACTS.find((contact) => contact.id === contactID);
  }
