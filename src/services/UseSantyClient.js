import { ABOUT_US_QUERY } from "../querys/about-us";

const { client } = require("../Client")
export const UseSantyClient = () => {


    const getAboutUsData = () => {
        return new Promise((resolve, reject) => {
            client
                .fetch(ABOUT_US_QUERY).then(res => resolve(res))
                .catch(err => reject(err));
        })
    }
    return {
        getAboutUsData
    }

}