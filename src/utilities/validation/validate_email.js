import { validateEmailAdress } from "./validate_email_adress";

export function validateEmail(email){
    let recipientAdressIsValid = validateEmailAdress(email.recipient)
    let subjectTitleIsValid = Boolean(email.subject);
    let messageIsValid = Boolean(email.message);

    return recipientAdressIsValid && subjectTitleIsValid && messageIsValid;
}