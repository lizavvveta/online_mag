import Admin from "./page/Admin";
import {ADMIN_ROUTE, BASKET_ROUTE, LOGIN_ROUTE, PRODUCT_ROUTE, REGISTRATION_ROUTE, SHOP_ROUTE} from "./utils/consts";

import Shop from "./page/Shop";
import Auth from "./page/Auth";
import ProductPage from "./page/ProductPage";

export  const authRoutes =[
    {
        path: ADMIN_ROUTE,
        Component: Admin
    }
    ]
export const publicRoutes = [
    {
        path: SHOP_ROUTE,
        Component: Shop
    },
    {
        path: LOGIN_ROUTE,
        Component: Auth
    },
    {
        path: REGISTRATION_ROUTE,
        Component: Auth
    },
    {
        path: PRODUCT_ROUTE + '/:id',
        Component: ProductPage
    },
]