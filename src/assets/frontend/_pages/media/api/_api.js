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

export const Medias = `
query{
    mediasCollection(filter: { published: true }, sort: {sort: 1 }) {
        _id
        title
        description
        link
        date
        image{
            path
        }
        pdf{
            path
        }
    }
}
`;

export const Banners = `
query{
    bmediasSingleton(populate: 1){
        image{
            path
        }
    }
}
`;
