export function validatePassword(password){
    let passwordLengthIsSuitable = password.length >= 8;

    return passwordLengthIsSuitable
}