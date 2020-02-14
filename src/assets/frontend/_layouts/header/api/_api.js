import axios from "axios";

export const ENDPOINT = process.env.VUE_APP_ENDPOINT;

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

export const Logo = `
query{
    logoSingleton(populate: 1) {
        name,
        link,
        logo{
            path
        }
    }
}
`;