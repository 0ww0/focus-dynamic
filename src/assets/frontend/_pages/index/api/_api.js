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
        }
    }
}
`;

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

export const Celebrates = `
query{
    celebratesCollection(filter: { published: true}, sort: {_id: -1 }, limit: 3 ) {
        _id,
        title,
        link,
        image{
            path
        }
    }
}
`;

export const Promos = `
query{
    happeningsCollection(filter: { published: true, type: "Promo"}, sort: {_id: -1 }, populate: 1, limit: 4 ) {
        _id,
        title,
        type,
        image{
            path
        },
        dateStart,
        dateEnd,
        recurringDate,
        content,
        outlets{
            name,
            imagePreview{
                path
            },
        }
    }
}
`;

export const Events = `
query{
    happeningsCollection(filter: { published: true, type: "Event"}, sort: {_id: -1 }, populate: 1, limit: 4 ) {
        _id,
        title,
        type,
        image{
            path
        },
        dateStart,
        dateEnd,
        recurringDate,
        content,
        outlets{
            name,
            imagePreview{
                path
            },
        }
    }
}
`;
