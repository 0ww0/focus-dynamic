import axios from "axios";

export const ENDPOINT = process.env.VUE_APP_ENDPOINT;

const TOKEN = process.env.VUE_APP_TOKEN;

const headers = {
  "Content-Type": "application/json",
  Authorization: `Bearer ${TOKEN}`
};

export const API = axios.create({
  headers
});

export const All_Store_Query = `
    query{
        outlets(orderBy: id_DESC)  {
            id,
            title,
            slug,
            imagePreview {
                url,
                width,
                height,
            }
        }
    }
`;

export const Slug_Store_Query = `
    query SlugStoreQuery($slug: String!){
        outlets(orderBy: id_DESC, where : { slug: $slug })  {
            id,
            title,
            slug,
            imagePreview {
                url,
                width,
                height,
            }
        }
    }
`;
