export function validateEmailAdress(email){
    return email && email.length > 8 && email.includes("@") && email.includes(".com");

}