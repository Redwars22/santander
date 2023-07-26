import { ENVIRONMENT } from "../environment/environment";

export async function getAccountData(){
    const res = await fetch(ENVIRONMENT.API_URL);
    const data = await res.json();

    return data;
}