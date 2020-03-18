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

export const Banners = `
query{
    brandsSingleton(populate: 1){
        title,
        image{
            path
        },
    }
}
`;

export const Brands = `
query{
    brandsCollection(filter: { published: true }, sort: {index: 1 }) {
        _id
        name
        name_slug
        image{
            path
        }
        link
        gallery{
            path
        }
    }
}
`;
