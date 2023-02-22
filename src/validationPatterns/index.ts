const namePattern = "^[a-zA-Z\u0600-\u06FFs ]+$";
const familyNamePattern = "^[a-zA-Z\u0600-\u06FFs ]+$";
const emailPattern = "[^@ \t\r\n]+@[^@ \t\r\n]+.[^@ \t\r\n]+";
const phonePattern = "09[0-9]";

export const validName = (str: string) =>
  str.match(namePattern) && str.trim().length > 2;

export const validFamilyName = (str: string) =>
  str.match(familyNamePattern) && str.trim().length > 2;

export const validPhonNumber = (str: string) =>
  str.match(phonePattern) && str.length === 11;

export const validEmail = (str: string) => str.match(emailPattern);

export const validRelation = (str: string) => str.length > 0;
