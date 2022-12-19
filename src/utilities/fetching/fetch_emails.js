import axios from "axios";

export async function fetchEmails(url, headers){
    const emails = await axios.get(url, { headers })
    .then((response) => { console.log(response); return response.data})
    .catch((err) => console.log(err));

    return emails;
}