import {createBrowserRouter} from "react-router-dom";
import {AppointmentForm} from "../components/content/appointment/AppointmentForm";
import {ContainerPage} from "../pages/ContainerPage";
import {DocumentPage} from "../pages/DocumentPage";
import {PricePage} from "../pages/PricePage";
import {MainPage} from "../pages/MainPage";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <ContainerPage/>,
        children: [
            {
                index: true,
                element: <MainPage/>
            },
            {
                path: "/prices",
                element: <PricePage/>
            },
            {
                path: "/docs",
                element: <DocumentPage/>
            },
            {
                path: "/appointments",
                element: <AppointmentForm/>
            }
        ]
    }
]);