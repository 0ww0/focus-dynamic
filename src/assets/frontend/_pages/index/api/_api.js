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

export const Get_Main_Banner_Query = `
    query{
        mainBanners(first: 5, orderBy:id_DESC) {
            id,
            imageDesktop {
                url,
                width,
                height,
            },
            imageMobile {
                url,
                width,
                height,
            },
            description
        }
    }
`;

export const Get_Celebrate_Query = `
    query{
        celebrates(first: 3, orderBy: id_DESC){
            id,
            title,
            link,
            image {
              url,
              width,
              height
            }
        }
    }
`;

export const Get_Promo_Query = `
    query{
        happenings(first: 4, orderBy: id_DESC, where: { type_in : Promo }){
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

export const Get_Event_Query = `
    query{
        happenings(first: 4, orderBy: id_DESC, where: { type_in : Event }){
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
