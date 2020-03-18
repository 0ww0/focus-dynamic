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

export const Governances = `
query{
    governancesSingleton(populate: 1){
        title,
        content,
    }
}
`;

export const Charters = `
query{
    chartersSingleton(populate: 1){
        title,
        content,
    }
}
`;

export const Ethics = `
query{
    ethicsSingleton(populate: 1){
        title,
        content,
    }
}
`;

export const Whistles = `
query{
    whistlesSingleton(populate: 1){
        title,
        image{
            path
        }
    }
}
`;

export const Audits = `
query{
    auditsSingleton(populate: 1){
        title,
        content,
    }
}
`;

export const Nominations = `
query{
    nominationsSingleton(populate: 1){
        title,
        content,
    }
}
`;
