import {client} from "./client";

export const loadServices = () => {
    return client.get('/services');
}