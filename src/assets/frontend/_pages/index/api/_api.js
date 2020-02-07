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

export const Happenings = `
query{
    happeningsCollection(filter: { published: true, type: "Promo"}, sort: {_id: -1 }, populate: 1 ) {
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
