import ENV from "./env";

const CDN = "https://";
const DOMAIN = "24printing.ae";
const CLIENT_URL = ENV.IS_PRODUCTION
    ? `https://www.${DOMAIN}`
    : "http://localhost:3000";
const API_URL = ENV.IS_PRODUCTION
    ? `https://api.${DOMAIN}`
    : "http://localhost:5000";

export default {
    CDN,
    DOMAIN,
    CLIENT_URL,
    API_URL,
};
