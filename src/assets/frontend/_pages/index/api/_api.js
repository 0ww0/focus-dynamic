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
