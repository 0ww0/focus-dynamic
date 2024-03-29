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

export const Banners = `
query{
    membersSingleton(populate: 1){
        title,
        image{
            path
        },
    }
}
`;

export const Memberships = `
query{
    membershipsSingleton(populate: 1){
        title,
        description,
        image{
            path
        },
        linkJN,
        linkTnC,
        linkPP,
    }
}
`;

export const Rewards = `
query{
    rewardsCollection(filter: { published: true }, sort: {_id: 1 }) {
        title,
        description,
        image{
            path
        }
    }
}
`;
