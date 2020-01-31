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

export const All_Promo_Query = `
    query{
        happenings(orderBy: id_DESC, where: { type_in : Promo }){
            id,
            title,
            description {
                html,
            },
            image {
              url,
              width,
              height
            },
            dateStart,
            dateEnd,
            recurringDate,
        }
    }
`;

export const All_Event_Query = `
    query{
        happenings(orderBy: id_DESC, where: { type_in : Event }){
            id,
            title,
            description {
                html,
            },
            image {
              url,
              width,
              height
            },
            dateStart,
            dateEnd,
            recurringDate,
        }
    }
`;
