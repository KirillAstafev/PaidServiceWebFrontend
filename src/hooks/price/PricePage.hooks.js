import {useEffect, useState} from "react";
import {loadServices} from "../../api/api";

export const useServices = () => {
    const [services, setServices] = useState([]);

    useEffect(() => {
        loadServices()
            .then(response => setServices(response.data));
    }, []);

    return [services, setServices];
}