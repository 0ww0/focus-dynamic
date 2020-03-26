import axios from "axios";

export const URL = process.env.VUE_APP_URL;

const ENDPOINT = URL + process.env.VUE_APP_ENDPOINT;

const TOKEN = process.env.VUE_APP_TOKEN;

const headers = {
    "Content-Type": "application/json",
    Authorization: `Bearer ${TOKEN}`
};

export const API = axios.create({
    baseURL: ENDPOINT,
    headers,
});

export const EntryAPI = "/api/graphql/query?token=" + `${TOKEN}`

export const Profiles = `
query{
    profilesSingleton(populate: 1){
        name,
        content,
        asset{
            path
        }
    }
}
`;

export const Banners = `
query{
    bprofilesSingleton(populate: 1){
        title,
        image{
            path
        }
    }
}
`;
