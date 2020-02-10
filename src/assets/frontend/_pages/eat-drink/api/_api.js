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

export const Outlets = `
query{
    outletsCollection(filter: { published: true }, sort: {_id: -1 }) {
        _id,
        name,
        name_slug,
        imagePreview{
            path
        },
    }
}
`;

export const OutletSlugs = `
    query OutletSlugs($filter: JsonType){
        outletsCollection(filter : $filter) {
            _id,
            name,
            name_slug,
            happenings{
                _id,
                title,
                type,
            }
        }
    }
`;
