import './App.css';
import LandingPage from "./starting-page/LandingPage";
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import MainContent from "./starting-page/components/routes/main/MainContent";
import PricesTable from "./starting-page/components/routes/prices/PricesTable";
import DocumentList from "./starting-page/components/routes/documents/DocumentList";

const router = createBrowserRouter(
    [
        {
            path: "/",
            element: <LandingPage/>,
            children: [
                {
                    index: true,
                    element: <MainContent/>
                },
                {
                    path: "/prices",
                    element: <PricesTable/>
                },
                {
                    path: "/docs",
                    element: <DocumentList/>
                }
            ]
        }
    ]
)

function App() {
    return (
        <div className="App">
            <RouterProvider router={router}/>
        </div>
    );
}

export default App;
