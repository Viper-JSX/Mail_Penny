export function validateEmail(email){
    let recipientAdressIsValid = email.recipient.length > 8 && email.recipient.includes("@") && email.recipient.includes(".com");
    let subjectTitleIsValid = Boolean(email.subject);
    let messageIsValid = Boolean(email.message);

    return recipientAdressIsValid && subjectTitleIsValid && messageIsValid;
}