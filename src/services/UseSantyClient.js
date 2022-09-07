import { ABOUT_US_QUERY, Home_QUERY } from "../querys/Querys";

const { client } = require("../Client")


export const getAboutUsData = () => {
    return new Promise((resolve, reject) => {
        client
            .fetch(ABOUT_US_QUERY).then(res => resolve(res))
            .catch(err => reject(err));
    })
}
export const getHomeData = () => {
    return new Promise((resolve, reject) => {
        client
            .fetch(Home_QUERY).then(res => resolve(res))
            .catch(err => reject(err));
    })
}


