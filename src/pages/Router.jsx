import { Routes, Route } from "react-router-dom";
import HomePage from "./home";
import BorderInformationPage from "./border-information";
import FoodAndShelterPage from "./food-and-shelter";
import PolandFormPage from "./poland-form";
import AboutPage from "./about";
import ServicesPage from "./services";

const routes = [
    {
        name: "Home",
        path: "/",
        element: <HomePage />
    },
    {
        name: "Border Information",
        path: "/border-information",
        element: <BorderInformationPage />
    },
    {
        name: "Food and Shelter",
        path: "/food-and-shelter",
        element: <FoodAndShelterPage />
    },
    {
        name: "About us",
        path: "/about",
        element: <AboutPage />
    },
    {
        name: "Poland Asylum Form",
        path: "/poland-form",
        element: <PolandFormPage />
    },
    {
        name: "Other Services",
        path: "/services",
        element: <ServicesPage />
    }
];

const Router = () => {
    return (
        <Routes>
            {routes.map(route =>
                <Route
                    key={route.name}
                    path={route.path}
                    element={route.element}
                />
            )}
        </Routes>
    );
};

export default Router;
