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

export const EntryAPI = "/api/graphql/query"

export const Supports = `
query{
    supportsCollection(filter: { published: true }){
        title,
        content
    }
}
`;

export const Banners = `
query{
    bcontactsSingleton(populate: 1){
        title,
        image{
            path
        }
    }
}
`;
