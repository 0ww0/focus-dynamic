import axios from "axios";

export const ENDPOINT = "http://backend.waswar.net";

const TOKEN = "051e3542c6eedaa72fcbfd58b1eadc";

const headers = {
    "Content-Type": "application/json",
    Authorization: `Bearer ${TOKEN}`
};

export const API = axios.create({
    baseURL: ENDPOINT,
    headers,
});

export const BannerAPI = "/api/collections/get/banners"

export const EntryAPI = "/api/graphql/query"

export const Banners = `
query{
    bannersCollection(filter: { published: true }, sort: {_id:-1}, limit: 5 ) {
        _id,
        title,
        imageDesktop{
            path
        },
        imageMobile{
            path
        }
    }
}
`;
