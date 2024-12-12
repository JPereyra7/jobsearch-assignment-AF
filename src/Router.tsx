import { createBrowserRouter } from "react-router-dom";
import { Layout } from "./pages/Layout";
import { SearchJobs } from "./pages/SearchJobs";
import { IndividualAd } from "./pages/IndividualAd";
import { NotFound } from "./pages/NotFound";
import { Homepage } from "./pages/Homepage";
import { SavedAds } from "./pages/SavedAds";

export const router = createBrowserRouter([
    {
        path: '/',
        element: <Layout/>,
        children: [
            {
                path: '/',
                element: <Homepage/>,
            },

            {
                path: '/jobbtorget',
                element: <SearchJobs/>,
            },
            {
                path: '/:id',
                element: <IndividualAd/>,
            },
            {
                path:'/saved',
                element: <SavedAds/>
            }
        ],    
        errorElement: <NotFound />,
    }

])

