import {createBrowserRouter} from "react-router-dom";

// Componets
import GuestLayout from "./assets/components/GuestLayout";

// Views
import Home from "./assets/views/Home";
import Blogs from "./assets/views/Blogs";
import Gallery from "./assets/views/Gallery";
import AboutUs from "./assets/views/AboutUs";
import ContactUs from "./assets/views/ContactUs";
import NotFound from "./assets/views/NotFound";

const router = createBrowserRouter([
    {
        path:'/',
        element: <GuestLayout />,
        children:[
            {
                path: '/react-yuhom-negros/',
                element: <Home />
            },
            {
                path: '/blogs',
                element: <Blogs />
            },
            {
                path: '/gallery',
                element: <Gallery />
            },
            {
                path: '/about-us',
                element: <AboutUs />
            },
            {
                path: '/contact-us',
                element: <ContactUs />
            },
        ]
    },
    {
        path: '*',
        element: <NotFound />
    },
])

export default router; 