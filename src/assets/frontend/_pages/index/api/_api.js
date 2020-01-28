import axios from "axios";

export const ENDPOINT = "https://api-apeast.graphcms.com/v1/ck5tkk6mg5oja0193fh0o2vep/master";

const TOKEN = "eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCIsImtpZCI6ImdjbXMtbWFpbi1wcm9kdWN0aW9uIn0.eyJ2ZXJzaW9uIjoyLCJ0b2tlbklkIjoiMGI5YTY1OTItYjMzYy00ZTQxLTlmMTMtOWI2YzFiNzdmOTYxIiwiaWF0IjoxNTgwMTg1MTY0LCJpc3MiOiJodHRwczovL21hbmFnZW1lbnQuZ3JhcGhjbXMuY29tLyJ9.afxLuCH31n4rDc5JNP853a-xZQ9x2FSURyU_2mtnHBC2o9pOltjQqPQLd5bWX9JA8F-skae24cuTNM3Ngapre1Pm1XpVEXhkQNPh9wCQ1qXiFUDyXl0yX0HeDIEWDozhp7zooJWYLmqjUMwkI95taw-4BvW3CrJ8j5ZgB5L-ZxLFH9Cd0FWa2SwsI9eKwVssYD-5K9PzfHRT7ohRBOh4OMuphU_BFQYvllROFmjZKfs_VQpz6Tg2qoocqYKsq50p1nuzsVR0t4k2W50jK3zg5VxnRhAb2KYYkwrukL6jC3WUffktVy4U2Mj8hb7Clbu_k_AOF2ixRJfRI1MlYnAIwwKSvPZKXgOD21XfNIsOiSIjQduOgUGDn83e02qJKVYA5eeG4eHjGJTk_l7zMviKblGCiDSYce_SV225HSvum90ntbJf29tQhleP4PTQxmw04DVHAqTuOzC9GFVAQM76_ElkxSJ2kUexIE5M8p0NF-84AvZWBEwOs-G9cOpCydyCIKBpys6lJqUunW7CS4bw0UKlwmOdHu8H8KBZtGYyEsRleQ4dR-uSP93_S-zWJJfN_Gk7wL3NOLpGSZFicfHztTMsb5EquShr64VtGdaPbSx_yoIcJ_wn784OfFd09irj_ykvsTpLZQX3m_oEnvPKa7c5Z2xyGQH7XmL2J6VFJts";

const headers = {
  "Content-Type": "application/json",
  Authorization: `Bearer ${TOKEN}`
};

export const API = axios.create({
  headers
});

export const All_MAIN_BANNER_QUERY = `
query mainBanners {
    mainBanners(orderBy:status_ASC) {
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
