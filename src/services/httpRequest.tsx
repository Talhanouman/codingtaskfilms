
import axios from 'axios';
import { BaseUrl } from '../utils/contants';

export const _POST = async (endPoint: string, body: any, header = "") => {
    try {
        const result = await axios.post(endPoint, body, {
            headers: {
                Authorization: header

            },
        });

        return result;
    } catch (e) {
        return e.response;
    }
};

export const _GET = async (endPoint: string, header = '') => {
    try {
        const result = await axios.get(endPoint, {
            headers: {
                'X-RapidAPI-Key': 'ed0d634e0cmshaef6e046e763c59p162f34jsna1976192797d',
                'X-RapidAPI-Host': 'moviesdatabase.p.rapidapi.com',
            },
        });
        return result;
    } catch (e) {
        return e.response;
    }
};

export const getOrganizationListing = (endPoint: string) => {
    return _GET(`${BaseUrl}/${endPoint}`);
};


