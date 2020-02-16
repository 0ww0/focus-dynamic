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
        },
        video{
            path
        },
        category
    }
}
`;

export const Brands = `
query{
    brandsCollection(filter: { published: true }, sort: {_id: -1 }) {
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

export const Membership = `
query{
    membershipsSingleton(populate: 1){
        title,
        description,
        image{
            path
        },
        linkLM,
        linkJN
    }
}
`;

export const Support = `
query{
    supportsCollection(filter: { published: true }){
        title,
        content
    }
}
`;
